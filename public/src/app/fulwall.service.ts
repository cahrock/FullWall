import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs';

@Injectable()
export class FulwallService {

  constructor(private _Http: Http) { }

  login(user){
    console.log("inside my service login() before http call")
    console.log(user)
    return this._Http.post('/index', user)
    .map((data)=>{
      console.log("inside service after http call")
      console.log(data)
      return data.json()
    })
    .toPromise();
  }

  create_question(question){
      console.log("inside my service create_question() before http call")
      console.log(question)
      return this._Http.post('/new_question', question)
      .map((data)=>{
          console.log("inside service after http call")
          console.log(data)
          return data.json()
      })
      .toPromise();
  }

  create_answer(id, answer){
      console.log("inside my service create_answer() before http call");
      return this._Http.post(`/answers/${id}`, answer)
      .map((data)=>{
          console.log("inside service create_answer() after http call")
          console.log('Object create_answer service :',data)
          return data.json()
      })
      .toPromise();
  }

  show_question(){
       console.log("inside my service show_question() before http call")
       return this._Http.get('/home')
       .map((data)=>{
           console.log("inside service show_question() after http call")
           console.log(data)
           return data.json()
       })
       .toPromise();
  }

  show(id){
       console.log("inside my service show() before http call")
      return this._Http.get(`/questions/${id}`)
      .map((data)=>{
          console.log("inside service show() after http call")
          console.log(data)
          return data.json()
      })
      .toPromise();
  }

  like(id){
      return this._Http.post(`/answers/${id}/like`, {id:id})
      .map((data)=>{
          return data.json()
      })
      .toPromise()
  }
}
