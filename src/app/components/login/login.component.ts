import { Token } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private  _loginService:LoginService,private _router:Router){}

  public loginForm:FormGroup =new FormGroup({
    email:new FormControl(),
    password:new FormControl(),
  })

  onClick(){
    console.log(this.loginForm.value)
    this._loginService.login(this.loginForm.value).subscribe(
      (data:any)=>
      {
        alert("Login Success");
        localStorage.setItem("token", data.token)
        this._router.navigateByUrl("/dashboard");
      },
      (err:any)=>{
        alert("Login Failed")
      }
    )
  }

}
