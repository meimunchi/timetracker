import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//angular material imports
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule, MatTable} from '@angular/material/table'
import {MatButtonModule} from '@angular/material/button';

//firebase imports
import { AngularFireModule } from '@angular/fire';

//import environment variables
import { environment } from '../environments/environment';
import { SigninComponent } from './auth/signin/signin.component';
@NgModule({
  declarations: [
    AppComponent,
    HomescreenComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatTableModule,
    MatButtonModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
