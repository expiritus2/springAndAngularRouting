import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  sendCredential(username: string, password: string){
    const url = 'http://localhost:8080/login';
    const params = 'username=' + username + '&password=' + password;
    const headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    return this.http.post(url, params, { headers: headers, withCredentials: true });
  }

  logout(){
    const url = 'http://localhost:8080/logout';
    return this.http.get(url, { withCredentials: true });
  }
}
