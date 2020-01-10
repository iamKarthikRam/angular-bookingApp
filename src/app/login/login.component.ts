import  {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector : 'app-login',
  templateUrl : './login.component.html'
})
export class LoginComponent {
  @Output('loginForm') isLoginForm = new EventEmitter<boolean>();
  
  loadSignupForm(){
    this.isLoginForm.emit(false);
  }
}