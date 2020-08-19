import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin-component',
  templateUrl: './signin-component.component.html',
  styleUrls: ['./signin-component.component.scss']
})
export class SigninComponentComponent implements OnInit {
  username: string;
  password: string;
  constructor() { }

  ngOnInit(): void {
  }
  login() : void{
    console.log("Stuff will happen?");
  }
}
