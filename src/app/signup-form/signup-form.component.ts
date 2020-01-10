import { Component, OnDestroy, Output, EventEmitter} from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { UserDetails } from '../common/model.user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl : './signup-form.component.html'
})
export class SignUpComponent implements OnDestroy
{
  
  @Output('loginForm') cancelSignup = new EventEmitter<boolean>();

  signUpSubsription : Subscription;

  constructor(private authService: AuthService){

  }
  
  onSignupSubmit(signupForm:any){
    let email = signupForm.value.email;
    let password = signupForm.value.password;
    let confPassword = signupForm.value.confPassword;
    
    if(password === confPassword){
      let userDetails : UserDetails = {
      email             : email,
      password          : password,
      returnSecureToken : true
      }

      this.signUpSubsription = this.authService.signup(userDetails).subscribe((response)=>{
        console.log('User Created Successfully : ',response);
      },(error)=>{
        console.log('Error occured : ',error ); 
      });

    } else {
      console.log('Confiramtion password not matching with passowrd');
    }

    
  }

  onCancel(){
    this.cancelSignup.emit(true);
  }

  ngOnDestroy(){
    this.signUpSubsription.unsubscribe();
  }

}