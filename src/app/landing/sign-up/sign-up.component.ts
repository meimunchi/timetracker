import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { Router } from '@angular/router'
import { from } from 'rxjs'
import {FormBuilder, Validator, ValidatorFn} from '@angular/forms'
import { Validators } from '@angular/forms';
import { passwordVerificationValidator } from './password-verification.directive';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { UserInfoService } from 'src/app/shared/user-info.service';
import { IUser } from 'src/app/shared/user.interface';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  
})
export class SignUpComponent implements OnInit {
  newUser : IUser;
  err ={
    isError:false,
    errorMessage:''
  }
  signUpForm = this.fb.group({
    firstName: ['',Validators.required],
    lastName:['',Validators.required],
    email: ['',Validators.required],
    password: ['',
      [Validators.required,
      Validators.minLength(8),]
    ],
    verifyPassword: ['',
    [
      Validators.required,
      Validators.minLength(8),
      
    ]],
  },{validators:passwordVerificationValidator})

  get firstName() { return this.signUpForm.get('firstName'); }
  get lastName() { return this.signUpForm.get('lastName'); }
  get email() { return this.signUpForm.get('email'); }
  get password() {
    //console.log(this.signUpForm.get('password').errors)
    return this.signUpForm.get('password'); }
  get verifyPassword() { return this.signUpForm.get('verifyPassword'); }
  
  get passwordErrors() {
    return (this.password.errors.required) ?  "required" : "password must be 8 characters or more";
  }

  constructor(
    private auth : AngularFireAuth,
    private router: Router,
    private fb: FormBuilder,
    private userservice : UserInfoService
  ) { }

  ngOnInit(): void { }

  // Depending on what you want the flow to be, we can change
  // TODO: Account for error handling
  //TODO: firestore create user object
  createAccount() {
    this.newUser={
      email: this.signUpForm.value.email,
      firstName: this.signUpForm.value.firstName,
      lastName:this.signUpForm.value.lastName,
      mainCalendar:{}
    }
    //error handling
    from(this.auth.createUserWithEmailAndPassword(this.signUpForm.value.email, this.signUpForm.value.password))
      .subscribe((user) => { 
        //here we can call createUser
       

        this.userservice.createUser(this.newUser)
        .then(()=>{
          console.log("User created");
        })
        .catch((err)=>{ console.log(err)})

        
        this.router.navigate(['dashboard']); 
      },
        (err) => { 
          console.log(err);
          this.err.isError = true;
          this.err.errorMessage = this.getErrorMessage(err.code);
         });
  }

  getErrorMessage(code : string){
    if(code == "auth/invalid-email"){
      return "you have entered an invalid email";
    }
    else if(code == "auth/email-already-in-use"){
      return "there is already an account with this email. Did you mean to sign in?"
    }
    else{
      return "an error has occured"
    }
  }
}
