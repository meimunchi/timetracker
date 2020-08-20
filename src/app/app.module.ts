import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//angular material imports
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table'
import { MatButtonModule } from '@angular/material/button';

//firebase imports
import { AngularFireModule } from '@angular/fire';

//import environment variables
import { environment } from '../environments/environment';

import { SignInComponent } from './auth/sign-in/sign-in.component'
import { FormsModule } from '@angular/forms';
import { MainDisplayComponent } from './main-display/main-display.component'
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MainDisplayComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatTableModule,
    MatButtonModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
