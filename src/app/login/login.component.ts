import { Component, Output, EventEmitter} from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import { AuthService } from '../auth/auth.service';
import { UserDetail } from '../common/model/user.model';

@Component({
  selector : 'app-login',
  templateUrl : './login.component.html'
})
export class LoginComponent {
  @Output('loginForm') isLoginForm = new EventEmitter<boolean>();

  constructor(private router: Router,private activatedRoute : ActivatedRoute, private authService : AuthService){

  }
  
  loadSignupForm(){
    this.isLoginForm.emit(false);
  }

  loginFormSubmit(loginForm:any) {
    let email = loginForm.value.email;
    let password = loginForm.value.password;
    console.log('loginForm: '+loginForm);
    let userDetail : UserDetail = {
      email : email,
      password : password,
      returnSecureToken : true
    }
    this.authService.login(userDetail).subscribe((response)=>{
      this.router.navigate(['/dashboard'],{relativeTo:this.activatedRoute});
    },(error)=>{
      console.log('Login Failed :'+ JSON.stringify({error}) );
    })

    
  }

}