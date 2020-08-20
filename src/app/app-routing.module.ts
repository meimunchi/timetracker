import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainDisplayComponent } from './main-display/main-display.component'
import { SignUpComponent } from './auth/sign-up/sign-up.component';


const routes: Routes = [
  { path: '', component: MainDisplayComponent, pathMatch: 'full' },
  { path:'signup',component:SignUpComponent,pathMatch:'full'},
  { path: '**', redirectTo: '', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
