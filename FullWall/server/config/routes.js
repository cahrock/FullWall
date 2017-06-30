var mongoose = require('mongoose');
var questions = require('../controllers/questions.js');
// var answers = require('../controllers/answers.js')

module.exports = function(app){
    // LOGIN and Create user
    app.post('/index', (req,res)=>{
        console.log("inside config routes")
        questions.login(req, res)
    })

    // Create: QUESTION
    app.post('/new_question', (req,res)=>{
        console.log("inside config routes")
        questions.create(req, res);
    })

    // Show all Questions
    app.get('/home', (req,res)=>{
        console.log("inside config home routes")
        console.log(req.body)
        questions.show_questions(req, res)
    })

    // Answer a question
    app.post('/answers/:id', (req,res)=>{
        console.log("inside config answer(id) routes")
        questions.create_answer(req, res);
    })

    // get detail a question
    app.get('/questions/:id', (req,res)=>{
        console.log("inside config questions(id) routes")
        console.log(req.body)
        questions.show(req, res)
    })

    // Give LIKE to an answer
    app.post('/answers/:id/like', (req,res)=>{
        console.log("inside config routes")
        questions.like(req, res);
    })
}
