import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import {auth} from 'firebase/app'
import { Router } from '@angular/router'
import { UserInfoService } from '../shared/user/user-info.service';
import { IUser } from '../shared/user/user.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  panelOpenState = false;
  user : IUser;
  expanded = false;
  eventCalendars : Array<any> = [];
  constructor(
    public auth: AngularFireAuth,
    private router: Router,
    private userservice: UserInfoService
  ) { }
 
  ngOnInit(): void {
    //this.user = auth().currentUser;
    /*this.user.providerData.forEach(element => {
      console.log(element);
    });*/
    //console.log("Email", this.user.providerData[0].email);
    this.userservice.getUser(auth().currentUser.providerData[0].email)
    .subscribe((user)=>{
      this.user = user;
      console.log(this.user);
    })
  }

  toggleExpansion(){
    this.expanded = ! this.expanded;
  }
  logout():void{
    // console.log("logout");
    this.auth.signOut();
    this.router.navigate(['signin']);
  }
  
  
}
