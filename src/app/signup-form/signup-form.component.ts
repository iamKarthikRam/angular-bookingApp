import { Component, OnInit, OnDestroy, Output, EventEmitter} from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { UserDetails } from '../common/model.user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl : './signup-form.component.html'
})
export class SignUpComponent implements OnInit,OnDestroy
{
  
  @Output('loginForm') loadLoginForm = new EventEmitter<boolean>();

  signupSubsription : Subscription;
  signupStatus : string;

  constructor(private authService: AuthService){

  }

  ngOnInit(){
    this.signupStatus = 'initial'
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

      this.signupSubsription = this.authService.signup(userDetails).subscribe((response)=>{
        console.log('User Created Successfully : ',response);
        this.signupStatus = 'success';
      },(error)=>{
        console.log('Error occured : ',error ); 
        this.signupStatus = 'failure';
      });

    } else {
      console.log('Confiramtion password not matching with passowrd');
    }
  }

  loadLogin(){
    this.loadLoginForm.emit(true);
  }

  ngOnDestroy(){
    this.signupSubsription.unsubscribe();
  }

}