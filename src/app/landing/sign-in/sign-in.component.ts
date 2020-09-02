import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { from } from 'rxjs'
import { Validators} from '@angular/forms'
import {FormBuilder} from '@angular/forms'
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['../sign-up/sign-up.component.scss', './sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  err = {
    isError:false,
    errorMessage:''
  }
  signOnForm = this.fb.group({
    email:['',Validators.required],
    password:['',
      Validators.required
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

   this.err.isError = false;
    from(this.auth.signInWithEmailAndPassword(this.signOnForm.value.email, this.signOnForm.value.password))
      .subscribe((user) => { this.router.navigate(['dashboard']); },
        (err) => {
          //console.log(err);
          this.err.isError = true;
          this.err.errorMessage = this.getErrorMessage(err.code);
        });
  }

  getErrorMessage(code : string){
    if(code == "auth/invalid-email"){
      return "you have entered an invalid email";
    }
    else if(code == "auth/wrong-password"){
      return "incorrect password"
    }
    else{
      return "an error has occurred"
    }
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
