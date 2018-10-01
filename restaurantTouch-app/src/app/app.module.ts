import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';
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

import { DataService } from './services/data.service';
import { TokenInterceptorService } from './services/token-interceptor.service';

import { AuthGuard } from './auth/auth.guard';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SignUpComponent,
    SignInComponent,
    HeaderComponent,
    HomeComponent,
    NavComponent,
    InsertProductComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    RoutesModule,
    FormsModule, 
    HttpClientModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [DataService, 
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
