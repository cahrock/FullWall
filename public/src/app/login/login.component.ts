import { Component, OnInit } from '@angular/core';
import { Cookie } from 'ng2-cookies';
import { Router } from "@angular/router";
import {FulwallService} from '../fulwall.service';

@Component({
  selector: 'app-login',
  exportAs: 'ngForm',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    user:any={};

    constructor(
        private _fullwallService:FulwallService,
        private _Router:Router
    ) {
            if(Cookie.check("name")){
                this._Router.navigateByUrl('home')
            }
      console.log("User name Cookie :", Cookie.get("name"));
    }

  ngOnInit() {
  }

  loginUser(){
    // if(user.email)
    console.log("login component before service call")
    console.log(this.user)
    this._fullwallService.login(this.user)
    .then((data)=>{
      if(data.login){
        alert("success")
        // Cookie.set("user logged_id :", data.user._id)
        Cookie.set("name", data.user.name)
        this._Router.navigateByUrl('home')
      }else{
        alert(data.messages.message)
      }
    })
  }
}
