import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {NgForm} from '@angular/forms';
import {AuthGuardService} from '../services/auth-guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private title: Title, private login: AuthGuardService) { }

  ngOnInit() {
    this
      .title
      .setTitle('Login - theKode Admin');
  }

  onLogin(data: NgForm){
    this.login.login(data.value.email, data.value.password)
      .subscribe(
        response => console.log(response),
        error => console.log(error)
      );
  }

}
