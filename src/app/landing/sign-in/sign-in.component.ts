import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { from } from 'rxjs'
import {FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['../sign-up/sign-up.component.scss', './sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  email: string;
  password: string;
  signOnForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })
  constructor(
    public auth: AngularFireAuth,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Checks if user is authenticated by continuously checking, especially for the case of using Google sign in
    this.auth.user.subscribe((user) => this.router.navigate(['dashboard']))
  }

  login(){
    from(this.auth.signInWithEmailAndPassword(this.email, this.password))
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
