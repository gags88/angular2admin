import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class AuthGuardService {

  SIGNUP_URL = 'http://localhost:8000/api/register';
  SIGNIN_URL = 'http://localhost:8000/api/login';

  constructor(private http: Http) {}

  register(username: string, email: string, password: string){
    return this.http.post(this.SIGNUP_URL,
      {name: username, email: email, password: password},
      {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})
      });
  }

  login(email: string, password: string){
    return this.http.post(this.SIGNIN_URL,
      {email: email, password: password},
      {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})
      }).map(
      (response: Response) => {
        const token = response.json().token;
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        return {token: token, decodedToken: JSON.parse(window.atob(base64))};
      })
      .do(
        tokenData => {
          localStorage.setItem('token', tokenData.token);
        }
    );
  }

}
