import { Component,OnInit } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';

@Component({
  selector : 'initial-load-page',
  templateUrl : './initial-load-page.component.html'
})
export class InitialLoadPageComponent implements OnInit{

  isLoginForm : boolean;

  ngOnInit(){
    this.isLoginForm = true;
  }

  toggleForm(event:boolean){
    this.isLoginForm = event;
  }

  
}