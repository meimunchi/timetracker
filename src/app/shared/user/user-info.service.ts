import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { IUser } from './user.interface';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserInfoService implements OnInit{
  //private usersCollection : AngularFirestoreCollection<IUser>;
  collection : string = 'users'
  constructor(private db : AngularFirestore) { }
  ngOnInit(){
    //this.usersCollection = this.db.collection<IUser>(this.collection);
    
  }
  //create user on sign in : takes in a User Object
  createUser(user:IUser): Promise<any>{
    return this.db.collection<IUser>(this.collection).doc<IUser>(user.email).set(user);
  }

  //get specific user  
  getUser(email:string) : Observable<IUser>{
    return this.db.collection<IUser>(this.collection).doc<IUser>(email).snapshotChanges()
    .pipe(map(snap => {
      const email = snap.payload.id
      const data = snap.payload.data()

      return {email: email, ...data}
    }))
  }

  
}
