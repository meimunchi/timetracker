import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import {auth} from 'firebase/app';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  email: string;
  password: string;

  constructor(public auth: AngularFireAuth) { }

  ngOnInit(): void {
  }
  login(){
    this.auth.signInWithEmailAndPassword(this.email, this.password)
      .catch((err)=>{
        console.log(err.code);
        console.log(err.message);
      });

    console.log('Hello')
  }


  loginWithGoogle() :void {
    let provider = new auth.GoogleAuthProvider();
    this.auth.signInWithRedirect(provider).then((result)=>{
      console.log(result);
    }).catch((err)=>{
      console.log(err);
    })

  }
}
