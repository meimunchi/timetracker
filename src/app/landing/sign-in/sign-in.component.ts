import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { from } from 'rxjs'
import {FormGroup, FormControl, Validators} from '@angular/forms'
import {FormBuilder, Validator, ValidatorFn} from '@angular/forms'
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['../sign-up/sign-up.component.scss', './sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  
  signOnForm = this.fb.group({
    email:['',Validators.required],
    password:['',
      Validators.required,
      
    ]
  })
  constructor(
    public auth: AngularFireAuth,
    private router: Router,
    private fb : FormBuilder
  ) { }

  ngOnInit(): void {
    // Checks if user is authenticated by continuously checking, especially for the case of using Google sign in
    this.auth.user.subscribe((user) => this.router.navigate(['dashboard']))
  }

  get email(){return this.signOnForm.get('email')}
  get password(){return this.signOnForm.get('password')}

  
  login(){

   
    from(this.auth.signInWithEmailAndPassword(this.signOnForm.value.email, this.signOnForm.value.password))
      .subscribe((user) => { this.router.navigate(['dashboard']); },
        (err) => { console.log(err); });
  }

  loginWithGoogle() :void {
    // TODO: Doesn't do anything on its own except log for errors because it takes user off our site
    // TODO: Maybe use localStorage to show that they're loading?
    this.auth.signInWithRedirect(new auth.GoogleAuthProvider());
    //   .then((result)=>{
    //     console.log(result);
    //   }).catch((err)=>{
    //   console.log(err);
    // })
  }
}
