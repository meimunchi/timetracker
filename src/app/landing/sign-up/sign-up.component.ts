import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { Router } from '@angular/router'
import { from } from 'rxjs'
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

  // Depending on what you want the flow to be, we can change
  // TODO: Account for error handling
  createAccount() {
    from(this.auth.createUserWithEmailAndPassword(this.email, this.password))
      .subscribe((user) => { this.router.navigate(['dashboard']); },
        (err) => { console.log(err); });
  }
}
