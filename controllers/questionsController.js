var Question = require('../models/Question');

exports.index = function(req, res, next) {
  Question.findAll()
  .then(function(questions) {
    res.status(200).jsonp(questions);
  });
}

exports.show = function(req, res, next) {
  Question.findById(req.params.id)
  .then(function(question) {
    res.status(200).jsonp(question);
  })
  .catch(function(err) {
  	  res.send(500, err);
  });
}

exports.store = function(req, res, next) {
  Question.create({
    questionid: req.body.questionid,
    description: req.body.description,
    state: req.body.state,
    position: req.body.position  
  })
  .then(function(question){
    res.status(201).jsonp(question);
  })
  .catch(function(err) {
    res.send(500, err);
  });
}
