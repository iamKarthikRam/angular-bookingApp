import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { InitialLoadPageComponent } from './initial-load-page/initial-load-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {
    path : '',
    component : InitialLoadPageComponent
  },
  {
    path : 'dashboard',
    component : DashboardComponent
  }
]

@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})
export class AppRouteModule {
  
}