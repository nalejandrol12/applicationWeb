import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from '../sign-in/sign-in.component';
import { SignUpComponent } from '../sign-up/sign-up.component';

const routes: Routes = [
  { path : '', 
    redirectTo:'/signin', 
    pathMatch : 'full'
  },
  {
    path: 'signin', 
    component: SignInComponent    
  },
  {
    path: 'signup', 
    component: SignUpComponent 
  }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RoutesModule { }
