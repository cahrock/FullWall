var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var QuestionSchema = new Schema({
	question: {
		type: String,
		required:[true, 'Please fill in the box'],
		minlength: [10, "Min 10 characters"],
		maxLength: [200, "Too many characters, max 200"]
	},
	description: {
		type: String,
		maxLength: [200, "Too many characters, max 200"]
	},
  	answers:[{type: Schema.Types.ObjectId, ref: 'Answer'}],
  	_user: {type: Schema.Types.ObjectId, ref: 'User'}
}, {timestamps: true});

var UserSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true, 'Name error'],
		minlength: [2, "Min 2 characters"],
		maxLength: [200, "Too many characters, max 200"]
    },
    questions: {type: Schema.Types.ObjectId, ref:'Question'},
    // answers: {type: Schema.Types.ObjectId, ref:'Answer'}
}, {timestamps: true});

var AnswerSchema = new mongoose.Schema({
	answer: {
        type:String,
        required: [true, 'Insert your answer please'],
        minlength: [5, "Min 5 characters long for answer"],
		maxLength: [200, "Too many characters, max 200"]
  	},
	details: {
		type: String,
		maxLength: [200, "Too many characters, max 200"]
	},
    user: String,
    likes:{
        type: Number,
        default: 0
  	},
	_question: {type: Schema.Types.ObjectId, ref: 'Question'},
	// _user: {type: Schema.Types.ObjectId, ref: 'User'}
}, {timestamps: true});

AnswerSchema.methods.like = function(data){
  this.likes += 1;
  this.save(function(err){
    data(err);
  });
}

var Answer = mongoose.model("Answer", AnswerSchema);
var User = mongoose.model('User', UserSchema);
var Question = mongoose.model('Question', QuestionSchema);
