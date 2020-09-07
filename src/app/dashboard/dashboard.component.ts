import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import {auth} from 'firebase/app'
import { Router } from '@angular/router'
import { UserService } from '../shared/user/user.service';
import { IUser } from '../shared/user/user.interface';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user$: Observable<IUser>;
  user: IUser;
  expanded = false;

  constructor(
    public auth: AngularFireAuth,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    // TODO: Must account for creating user who signed in with Google
    this.user$ = this.userService.getUser(auth().currentUser.providerData[0].email);
    this.user$.subscribe((user) => {
        this.user = user;
        console.log(this.user);
      });
  }

  toggleExpansion(){
    this.expanded = !this.expanded;
  }

  logout():void{
    this.auth.signOut();
    this.router.navigate(['signin']);
  }
}
