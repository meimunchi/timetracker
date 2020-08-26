import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { Router } from '@angular/router'
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  verifyPassword: string;

  constructor(
    private auth : AngularFireAuth,
    private router: Router
  ) { }

  ngOnInit(): void { }

  createAccount(){
    this.auth.createUserWithEmailAndPassword(this.email, this.password)
      .catch((err) => {
        console.log(err.code);
        console.log(err.message);
      })

    this.router.navigate(['dashboard']);
  }
}
