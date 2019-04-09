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

//////////////////////get data
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

// Defined delete | remove | destroy route
updateRoute.route('/delete/:id').get(function (req, res) {
  console.log(req.params.id);  
  update.findByIdAndRemove({_id: req.params.id}, function(err, update){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});


// // Defined edit route
updateRoute.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  update.findById(id, function (err,update){
      res.json(update);
  });
});

// //  Defined update route
updateRoute.route('/upcontent/:id').post(function (req, res) {
  console.log("updating");
  update.findById(req.params.id, function(err, update) {
    if (!update){
      console.log(err);
      console.log(req.params.id);
      }
    else {
        update.heading = req.body.heading;
        update.content = req.body.content;
        update.save().then(Update => {res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
  console.log(req.params.id);
});


module.exports = updateRoute;