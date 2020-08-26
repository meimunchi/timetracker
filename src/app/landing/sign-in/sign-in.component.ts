import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import {auth} from 'firebase/app';
import { Router } from '@angular/router'
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  email: string;
  password: string;

  constructor(
    public auth: AngularFireAuth,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  login(){
    // TODO: Wrap in observable for proper authorization and to not trigger on first click
    this.auth.signInWithEmailAndPassword(this.email, this.password)
      .catch((err)=>{
        console.log(err.code);
        console.log(err.message);
      });

    this.router.navigate(['dashboard']);
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
