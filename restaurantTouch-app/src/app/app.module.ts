import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { SingInComponent } from './sing-in/sing-in.component';
import { RegistroComponent } from './registro/registro.component';

import { RoutesModule } from './routes/routes.module';

@NgModule({
  declarations: [
    AppComponent,
    SingInComponent,
    RegistroComponent
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
