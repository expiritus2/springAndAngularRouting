import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loggedIn: boolean;
  username: string;
  password: string;

  constructor(private loginService: LoginService) {
    if(localStorage.getItem('LoggedIn') === '' || localStorage.getItem("loggedIn") == null){
      this.loggedIn = false;
    } else {
      this.loggedIn = true;
    }
  }

  ngOnInit() {
  }

  onSubmit(){
    this.loginService.sendCredential(this.username, this.password).subscribe(
      res => {
        this.loggedIn = true;
        localStorage.setItem('LoggedIn', 'true');
      },
      err => console.log(err)
    );
  }



}
