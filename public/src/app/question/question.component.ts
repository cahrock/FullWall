import { Component, OnInit } from '@angular/core';
import { Cookie } from 'ng2-cookies';
import { Router } from "@angular/router";

import { FulwallService } from "app/fulwall.service";


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

    q:any={};

    constructor(
        private _fullwallService:FulwallService,
        private _router:Router) { }

    ngOnInit() {
    }

    addQuestion(){
      console.log('question before service')
      this._fullwallService.create_question(this.q)
      .then((data)=>{
        if(data.question){
          alert("Good job, create question ...success!")
          console.log(data.question.text)
          this._router.navigateByUrl('home')
        }
        else{
          alert(data.messages.message)
        }

      })
    }

    logOut(){
      Cookie.deleteAll()
      this._router.navigateByUrl('index')
    }
}
