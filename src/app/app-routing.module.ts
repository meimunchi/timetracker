import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainDisplayComponent } from './main-display/main-display.component'


const routes: Routes = [
  { path: '', component: MainDisplayComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
