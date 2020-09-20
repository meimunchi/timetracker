import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {  IUser } from './user.interface'
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit{
  readonly collection: string = 'users'
  constructor(private db : AngularFirestore) { }
  ngOnInit(){
  }

  //create user on sign in : takes in a User Object
  createUser(user: IUser): Promise<any>{
    return this.db.collection<IUser>(this.collection).doc<IUser>(user.email).set(user);
  }

  //get specific user
  getUser(email: string): Observable<IUser>{
    return this.db.collection<IUser>(this.collection).doc<IUser>(email).snapshotChanges()
    .pipe(map(snap => {
      const email = snap.payload.id
      const data = snap.payload.data()
      return data == undefined ? null : {email: email, ...data}
    }))
  }

  updateMainCalendar(user: IUser): void {
    this.db.collection<IUser>(this.collection).doc<IUser>(user.email).set(user, { merge: true });
  }
}
