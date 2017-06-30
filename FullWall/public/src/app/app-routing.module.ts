import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "app/login/login.component";
import { HomePageComponent } from "app/home-page/home-page.component";
import {QuestionComponent} from "app/question/question.component";
import {UserComponent} from "app/user/user.component";
import {AnswerComponent} from "app/answer/answer.component";


const routes: Routes = [
    { path: '', pathMatch:"full", redirectTo:'index'},
    { path: 'index', component:LoginComponent},
    { path: 'home', component:HomePageComponent},
    { path: 'new_question', component:QuestionComponent},
    { path: 'user/:id', component:UserComponent},
    { path: 'answer/:id', component:AnswerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
