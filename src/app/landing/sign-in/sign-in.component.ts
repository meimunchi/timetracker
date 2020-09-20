import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { from } from 'rxjs'
import { Validators} from '@angular/forms'
import {FormBuilder} from '@angular/forms'
import { IError } from './error';
import { UserService } from 'src/app/shared/user/user.service';
import { IUser } from 'src/app/shared/user/user.interface';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['../sign-up/sign-up.component.scss', './sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  localstore : Storage = window.localStorage;
  isPending : boolean=false;
  err : IError = {
    isError:false,
    errorMessage:''
  }
  signOnForm = this.fb.group({
    email:['',Validators.required],
    password:['',
      Validators.required
    ]
  })
  constructor(
    public auth: AngularFireAuth,
    private router: Router,
    private fb : FormBuilder,
    private userservice : UserService
  ) { }

  ngOnInit(): void {
    // Checks if user is authenticated by continuously checking, especially for the case of using Google sign in
    //console.log(this.localstore.getItem('authStatus'));
    this.isPending = !(this.localstore.getItem('authStatus') == null);
    this.auth.user.subscribe((user) => { 
     // console.log("FIRST USER," ,user);

      this.validateGoogleUsers();
      this.checkUserExists(user.displayName,user.email);
    })
  }

  get email(){return this.signOnForm.get('email')}
  get password(){return this.signOnForm.get('password')}


  login(){

   this.err.isError = false;
    from(this.auth.signInWithEmailAndPassword(this.signOnForm.value.email, this.signOnForm.value.password))
      .subscribe((user) => { this.router.navigate(['dashboard']); },
        (err) => {
          //console.log(err);
          this.err.isError = true;
          this.err.errorMessage = this.getErrorMessage(err.code);
        });
  }

  getErrorMessage(code : string){
    if(code == "auth/invalid-email"){
      return "you have entered an invalid email";
    }
    else if(code == "auth/wrong-password"){
      return "incorrect password"
    }
    else{
      return "an error has occurred"
    }
  }

  loginWithGoogle() :void {
    //localStorage, store auth as pending
    this.localstore.setItem('authStatus','pending');
    this.auth.signInWithRedirect(new auth.GoogleAuthProvider());
   
  }

  validateGoogleUsers(){
    from(this.auth.getRedirectResult()).subscribe(
      (result)=>{
        
        if(result.credential){
          console.log(result.credential);
        }
    
      },
      (err)=>{
        //TODO: error handling
        console.log("ERROR")
        if(err.code === 'auth/account-exists-with-different-credential'){
          console.log("an acct already exists", err);
        }
      })
  }

  checkUserExists(name:string,email:string){
    //check if user exists
          
    this.userservice.getUser(email).subscribe((user)=>{
      if(user == null){
        //how to tell if they have a middle name? etc....
        const splitname = name.split(" ");
        console.log(splitname);
        const newUser : IUser= {
        email: email,
        firstName: splitname[0],
        lastName:splitname[1],
        mainCalendar: {
          Sunday: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          Monday: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          Tuesday: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          Wednesday: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          Thursday: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          Friday: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          Saturday: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        } 
      }
      from(this.userservice.createUser(newUser)).subscribe((evt)=>{
        this.localstore.removeItem('authStatus');
        this.router.navigate(['dashboard']);
      })
      }
      else{
        this.localstore.removeItem('authStatus');
        this.router.navigate(['dashboard']);
      }
    },
    (err)=>{
      
      //TODO: check error
     
  
    })
  }
}

