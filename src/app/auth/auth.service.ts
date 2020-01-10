import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDetails } from '../common/model/user.model';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService{

  constructor(private httpClient : HttpClient){

  }

  signup(userDetails: UserDetails): Observable<UserDetails>{
    return this.httpClient.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCFs_d8UYuhB2g-PPUbmJxXKstBJMiWRMM',
                    userDetails);
    //return true;
  }

}