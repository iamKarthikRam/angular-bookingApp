import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path : '',
    component : LoginComponent
  },
  {
    path : 'test',
    component : AppComponent
  }
]

@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})
export class AppRouteModule {
  
}