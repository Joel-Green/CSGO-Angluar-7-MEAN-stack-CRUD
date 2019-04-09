const express = require('express');
const fs = require('fs');
const app = express();
const multer = require('multer');
const updateRoute = express.Router();
const DIR = './uploads';


let  update= require('../models/updateSchema');


// Defined store route
updateRoute.route('/adding').post(function (req, res) {
  console.log("node add route");
  let Update = new update(req.body);
  Update.save()
    .then(Update => {
      res.status(200).json({'Update': 'update in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});


updateRoute.route('/').get(function (req, res) {
  update.find(function (err, Update){
  if(err){
    console.log(err);
  }
  else {
    res.json(Update);
  }
});
});

module.exports = updateRoute;