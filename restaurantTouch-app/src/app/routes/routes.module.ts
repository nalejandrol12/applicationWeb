import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from '../sign-in/sign-in.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { HomeComponent } from '../home/home.component';
import { InsertProductComponent } from '../insert-product/insert-product.component';

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
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'newProduct',
    component: InsertProductComponent
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
