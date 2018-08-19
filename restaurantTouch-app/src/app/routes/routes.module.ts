import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SingInComponent } from '../sing-in/sing-in.component';

const routes: Routes = [
  { path : '', 
    redirectTo:'/signin', 
    pathMatch : 'full'
  },
  {
    path: 'signin', 
    component: SingInComponent    
  },

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
