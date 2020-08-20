import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'

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

  login() : void {
    this.auth.createUserWithEmailAndPassword(this.email, this.password)
      .catch((err) => {
        console.log(err.code);
        console.log(err.message);
      })
  }
}
