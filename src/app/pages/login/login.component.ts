import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostLoginInterface, PostLoginService } from 'src/app/core/services/post/postLogin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public username: string = '';
  public password: string = '';
  constructor(private loginService:PostLoginService) { }

  ngOnInit(): void {
  }
  public onSubmit(loginForm: NgForm):void{
    let loginParams:PostLoginInterface ={
      email:this.username,
      password:this.password
    }
    this.loginService.postLogin(loginParams);
    loginForm.resetForm();
  }
}
