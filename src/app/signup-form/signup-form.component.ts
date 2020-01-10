import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl : './signup-form.component.html'
})
export class SignUpComponent {
  
  @Output('loginForm') cancelSignup = new EventEmitter<boolean>();
  
  onSignupSubmit(signupForm:any){
    console.log(signupForm);
  }

  onCancel(){
    this.cancelSignup.emit(true);
  }

}