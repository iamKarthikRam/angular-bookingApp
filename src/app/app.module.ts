import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRouteModule } from './app.route.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InitialLoadPageComponent } from './initial-load-page/initial-load-page.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRouteModule],
  declarations: [ AppComponent, LoginComponent,InitialLoadPageComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
