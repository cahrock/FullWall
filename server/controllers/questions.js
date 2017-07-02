console.log("Questions controller")
var mongoose = require('mongoose');
var Question = mongoose.model('Question');
var User = mongoose.model('User');
var Answer = mongoose.model('Answer');


module.exports = {
    login: function(req, res){
        console.log("inside controllers: login()")
        console.log(req.body)
        User.findOne({name: req.body.name}, function(err, user){
            if(user){
                console.log('No err in Controllers: login()');
                res.json({login:true, user:user})
            }
            else{

                User.create(req.body, function(err, user){
                    if(err){
                          console.log(err)
                          res.json({login:false, messages:err.errors.name})
                    }
                    else{
                        console.log('No err in Controllers: login()');
                        res.json({login:true, user:user})
                    }
                })
            }
        })
    },

    // Create Question
    create:function(req, res){
        console.log('Controllers: Create() => Question');
        Question.create(req.body, function(err, data){
            if(err){
                console.log('Controllers: error create() => question');
                console.log(err)
                res.json({err:true, messages:err.errors.question})
            }
            else{
                console.log('Controllers: success create() => question');
                res.json(data)
            }
        })
    },

    // Show all questions
    show_questions: function(req, res){
        console.log('Controllers: show_questions() => Question');
        var id = req.params.id
        Question.find({})
        .sort('field -createdAt')
        .populate('answers')
        .exec(function(err, data){
            if(err){
              console.log("Error Controllers: show_questions()");
              console.log(err)
            }
            else{
              console.log("Success Controllers: show_questions()");
              res.json(data)
            }
        })


    },


    show: function(req, res){
        console.log('Controllers: show(id) => Question');
        var id = req.params.id
        Question.findOne({_id:id})
        .populate("answers")
        .exec(function(err, data){
            if(err){
                console.log("Error inside Controllers: show(id)");
                console.log(err)
            }
            else{
                console.log("Success inside Controllers: show(id)");
                res.json(data)
            }
        })

    },

    create_answer: function(req, res){
          var question_id = req.params.id
            console.log(req.body)
            Question.findOne({_id:question_id}, function(err, question){
                var answer = new Answer(req.body);
                answer._question = question_id
                answer.save(function(err){
                    question.answers.push(answer)
                    question.save(function(err, question){
                        if(err){
                            console.log(err);
                            res.json({err:true, messages:err.errors.answer})
                        }
                        else{
                            res.json(question)
                        }
                    })
                })
            })
    },

    like: function(req, res){
        var answer_id = req.params.id
        Answer.findOne({_id:answer_id}, function(err, answer){
            answer.like(function(err){
                if(err){
                    console.log(err)
                }
                else{
                    res.json(answer)
                }
            })
        })
    }

}
