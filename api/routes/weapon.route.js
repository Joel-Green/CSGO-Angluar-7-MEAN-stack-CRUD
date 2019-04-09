const express = require('express');
const fs = require('fs');
const app = express();
const multer = require('multer');
const weaponRoute = express.Router();
const DIR = './uploads';


let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + '.' + file.originalname);

    // this is the file name it is always unique save this value to db => file.fieldname + '-' + Date.now() + '.' + file.originalname
  }
});

let upload = multer({storage: storage});

// weaponRoute.route('/upload').post(upload.single('photo'), function (req, res) {
//   //  weapon.findById(req.params.id, function(err, weapons){
//     if (!req.file) {
//       console.log("No file received");
//       return res.send({
//         success: false
//       });
  
//     } else {
//       console.log('file received');
//       return res.send({
//         success: true
//       })
//     }
//   // }
//   // )
  
// });

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  
    // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.post('/Weapon/upload',upload.single('photo'), function (req, res) {
  if (!req.file) {
      console.log("No file received");
      return res.send({
        success: false
      });
  
    } else {
      console.log('file received');
      return res.send({
        success: true
      })
    }
});




// Require weapon model in our routes module
let  weapon= require('../models/weaponSchema');
let  update= require('../models/updateSchema');


// Defined store route
weaponRoute.route('/add').post(function (req, res) {
  console.log("node add route");
  let Weapon = new weapon(req.body);
  Weapon.save()
    .then(Weapon => {
      res.status(200).json({'Weapon': 'Weapon in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
weaponRoute.route('/').get(function (req, res) {
    weapon.find(function (err, Weapons){
    if(err){
      console.log(err);
    }
    else {
      res.json(Weapons);
    }
  });
});



// // Defined edit route
weaponRoute.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  weapon.findById(id, function (err,weapons){
      res.json(weapons);
  });
});

// //  Defined update route
weaponRoute.route('/update/:id').post(function (req, res) {
  console.log("updating");
  weapon.findById(req.params.id, function(err, weapons) {
    if (!weapons){
      console.log(err);
      console.log(req.params.id);
      }
    else {
        weapons.weapon_name = req.body.weapon_name;
        weapons.weapon_damage = req.body.weapon_damage;
        weapons.weapon_recoil = req.body.weapon_recoil;
        weapons.weapon_FireRate = req.body.weapon_FireRate;
        weapons.weapon_mobility = req.body.weapon_mobility;
        weapons.save().then(Weapon => {res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
  console.log(req.params.id);
});
// });

// Defined delete | remove | destroy route
weaponRoute.route('/delete/:id').get(function (req, res) {
  console.log(req.params.id);  
  weapon.findByIdAndRemove({_id: req.params.id}, function(err, business){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = weaponRoute;