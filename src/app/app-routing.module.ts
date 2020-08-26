import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './landing/sign-up/sign-up.component';
import { SignInComponent } from './landing/sign-in/sign-in.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { LandingComponent } from './landing/landing.component'
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard'

// TODO: Maybe add a message that signed up user
const redirectUnauthorizedToSignIn = () => redirectUnauthorizedTo(['signin'])

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    pathMatch: 'full',
    ...canActivate(redirectUnauthorizedToSignIn)
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: '',
    component: LandingComponent,
    children: [
      { path: 'signup', component: SignUpComponent, pathMatch: 'full' },
      { path: 'signin', component: SignInComponent, pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
