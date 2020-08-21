import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  email: string;
  password: string;
  verifyPassword: string;
  constructor(private auth : AngularFireAuth) { }

  ngOnInit(): void {
  }
  createAccount(){
    this.auth.createUserWithEmailAndPassword(this.email, this.password)
      .catch((err) => {
        console.log(err.code);
        console.log(err.message);
      })
  }
}
