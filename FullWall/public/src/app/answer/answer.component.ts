import { Component, OnInit } from '@angular/core';
import { Cookie } from 'ng2-cookies';
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import { FulwallService } from "app/fulwall.service";

import { CookieService } from 'ng2-cookies';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  name=Cookie.get("name")
  question ={}
  answer = {
    answer:"",
    details:"",
    user: this.name
    }
  constructor(
      private _router:Router,
      private _fulwalService: FulwallService,
      private _activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
        this._fulwalService.show(this._activatedRoute.snapshot.params['id'])
        .then(data => {
            this.question = data
        })
        .catch(err => console.log(err))
  }

  createAnswer(){
      console.log('answer before service :',this.answer)
      this._fulwalService.create_answer(this._activatedRoute.snapshot.params['id'], this.answer)
    //   .then((data)=>{
    //     if(data.answer){
    //       alert("Good job, create an answer ...success!")
    //       console.log(data.answer.text)
    //       this._router.navigateByUrl('home')
    //     }
    //     else{
    //       alert(data.messages.message)
    //     }
      //
    //   })
      .then((data) => {
          console.log('Object create_answer :', data)
          this._router.navigateByUrl('home')
      })
      .catch(err => {
          console.log('Err message :', err)
          alert(err.messages.message)
      })

  }

  logOut(){
    Cookie.deleteAll()
    this._router.navigateByUrl('index')
  }
}
