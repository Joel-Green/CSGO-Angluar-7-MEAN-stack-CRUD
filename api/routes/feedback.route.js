const express = require('express');
const fs = require('fs');
const app = express();
const multer = require('multer');
const feedbackRoute = express.Router();
const DIR = './uploads';


let  feedback= require('../models/feedbackSchema');


// Defined store route
feedbackRoute.route('/adding').post(function (req, res) {
  console.log("node add route");
  let Feedback = new feedback(req.body);
  Feedback.save()
    .then(Feedback => {
      res.status(200).json({'Feedback': 'feedback in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});


feedbackRoute.route('/').get(function (req, res) {
  feedback.find(function (err, Feedback){
  if(err){
    console.log(err);
  }
  else {
    res.json(Feedback);
  }
});
});

module.exports = feedbackRoute;