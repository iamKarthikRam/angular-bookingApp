import  { Component } from '@angular/core';
import { appTitle } from '../common/app.constants'

@Component({
  selector : 'app-header',
  templateUrl : './header.component.html'
})
export class HeaderComponent {
  appTitle = appTitle;

}