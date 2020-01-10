import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRouteModule } from './app.route.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InitialLoadPageComponent } from './initial-load-page/initial-load-page.component';
import { HeaderComponent } from './header/header.component';
import { SignUpComponent } from './signup-form/signup-form.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRouteModule, HttpClientModule],
  declarations: [ AppComponent, 
                  LoginComponent,
                  InitialLoadPageComponent, 
                  HeaderComponent,
                  SignUpComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
