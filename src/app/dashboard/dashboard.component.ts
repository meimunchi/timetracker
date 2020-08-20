import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import {auth} from 'firebase/app'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user : any;
  displayedColumns: string[] = ['dayTimes','Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday','Saturday'];

  constructor(public auth: AngularFireAuth) { }
  dataSource=[
    {time:"7:00",sun:0,mon:0,tue:0,wed:0,thur:0,fri:0,sat:0},
    {time:"7:00",sun:0,mon:0,tue:0,wed:0,thur:0,fri:0,sat:0},
    {time:"7:00",sun:0,mon:0,tue:0,wed:0,thur:0,fri:0,sat:0},
    {time:"7:00",sun:0,mon:0,tue:0,wed:0,thur:0,fri:0,sat:0},
    {time:"7:00",sun:0,mon:0,tue:0,wed:0,thur:0,fri:0,sat:0},
    {time:"7:00",sun:0,mon:0,tue:0,wed:0,thur:0,fri:0,sat:0},
    {time:"7:00",sun:0,mon:0,tue:0,wed:0,thur:0,fri:0,sat:0},
  ];
 
  ngOnInit(): void {
    this.user = auth().currentUser;
    this.user.providerData.forEach(element => {
      console.log(element);
    });
  }
  logout():void{
    console.log("logout");
    this.auth.signOut();
    
  }
}
