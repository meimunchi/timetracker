import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//angular material imports : if you import anything from material, put it in ./core/material.module.ts :)
import { CustomMaterialModule } from './core/material.module'
//firebase imports
import { AngularFireModule } from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';

//import environment variables
import { environment } from '../environments/environment';

import { SignInComponent } from './landing/sign-in/sign-in.component'
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './landing/sign-up/sign-up.component';
import { LandingComponent } from './landing/landing.component'
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarComponent } from './dashboard/calendar/calendar.component';
import { CalendarDayComponent } from './dashboard/calendar/calendar-day/calendar-day.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    LandingComponent,
    CalendarComponent,
    CalendarDayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    CustomMaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
