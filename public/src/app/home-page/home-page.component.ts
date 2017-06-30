import { Component, OnInit } from '@angular/core';
import { Cookie } from "ng2-cookies";
import { Router } from "@angular/router";
import { FulwallService } from "app/fulwall.service";
import { CookieService } from 'ng2-cookies';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
    name=Cookie.get("name")
    
    questions =[]

  // title = 'Cookie'
  constructor(
      private _Router:Router,
      private _fullwallService: FulwallService
  ) {}

  ngOnInit() {
      this._fullwallService.show_question()
      .then(data => {
          console.log('Insie ngOnInit :', data)
          this.questions = data
          console.log(this.questions)
      })
      .catch(err => console.log(err))
  }
  logOut(){
    Cookie.deleteAll()
    this._Router.navigateByUrl('index')
  }
}
