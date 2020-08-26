import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//angular material imports : if you import anything from material, put it in ./core/material.module.ts :)
import { CustomMaterialModule } from './core/material.module'
//firebase imports
import { AngularFireModule } from '@angular/fire';

//import environment variables
import { environment } from '../environments/environment';

import { SignInComponent } from './landing/sign-in/sign-in.component'
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './landing/sign-up/sign-up.component';
import { LandingComponent } from './landing/landing.component'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    CustomMaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
