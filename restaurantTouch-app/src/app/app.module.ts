import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';

import { RoutesModule } from './routes/routes.module';
import { FooterComponent } from './footer/footer.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { InsertProductComponent } from './insert-product/insert-product.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SignUpComponent,
    SignInComponent,
    HeaderComponent,
    HomeComponent,
    NavComponent,
    InsertProductComponent
  ],
  imports: [
    BrowserModule,
    RoutesModule,
    FormsModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
