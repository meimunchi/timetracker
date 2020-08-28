import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { Router } from '@angular/router'
import { from } from 'rxjs'
import {FormBuilder, Validator, ValidatorFn} from '@angular/forms'
import { Validators } from '@angular/forms';
import { passwordVerificationValidator } from './password-verification.directive';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  
  signUpForm = this.fb.group({
    firstName: ['',Validators.required],
    lastName:['',Validators.required],
    email: ['',Validators.required],
    password: ['',Validators.required],
    verifyPassword: ['',
    [
      Validators.required,
      Validators.minLength(8),
      
    ]],
  },{validators:passwordVerificationValidator})

  get firstName() { return this.signUpForm.get('firstName'); }
  get lastName() { return this.signUpForm.get('lastName'); }
  get email() { return this.signUpForm.get('email'); }
  get password() { return this.signUpForm.get('password'); }
  get verifyPassword() { return this.signUpForm.get('verifyPassword'); }
  
  constructor(
    private auth : AngularFireAuth,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void { }

  // Depending on what you want the flow to be, we can change
  // TODO: Account for error handling
  //TODO: firestore create user object
  createAccount() {

    //error handling
    from(this.auth.createUserWithEmailAndPassword(this.signUpForm.value.email, this.signUpForm.value.password))
      .subscribe((user) => { this.router.navigate(['dashboard']); },
        (err) => { console.log(err); });
  }
}
