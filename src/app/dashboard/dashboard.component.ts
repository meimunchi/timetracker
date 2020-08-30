import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import {auth} from 'firebase/app'
import { Router } from '@angular/router'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  panelOpenState = false;
  user : any;
  expanded = false;
  eventCalendars : Array<any> = [];
  constructor(
    public auth: AngularFireAuth,
    private router: Router
  ) { }
 
  ngOnInit(): void {
    this.user = auth().currentUser;
    this.user.providerData.forEach(element => {
      console.log(element);
    });
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
