import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {NgForm} from '@angular/forms';
import {AuthGuardService} from '../services/auth-guard.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private title: Title, private register: AuthGuardService) { }

  ngOnInit() {
    this.title.setTitle('Register | theKode Admin');
  }

  onRegister(data: NgForm){
    this.register.register(data.value.name, data.value.email, data.value.password)
      .subscribe(
        response => console.log(response),
        error => console.log(error)
      );
  }

}
