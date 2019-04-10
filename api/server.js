const express = require('express'),
path = require('path'),
 bodyParser = require('body-parser'),
 mongoose = require('mongoose'),
 fs = require('fs'),
 multer = require('multer');
config=require('./DB');
const app = express();
let  weapon= require('./models/weaponSchema');
let  update= require('./models/updateSchema');


const weaponRoute=require('./routes/weapon.route');
const updateRoute=require('./routes/update.route');
const feedbackRoute=require('./routes/feedback.route');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

const DIR = '../src/assets/images';


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

app.post('/Weapon/upload/:id',upload.single('photo'), function (req, res) {
  _id= req.params.id;
  console.log(_id);
  if (!req.file) {
      console.log("No file received");
      return res.send({
        success: false
      });
  
    } else {
      
      console.log('file received, file name '+ res.req.file.filename);
      
      weapon.findById(req.params.id, function(err, weapons) {
        if (!weapons){
          console.log(err);
          console.log(req.params.id);
          }
        else {
            weapons.image_upload = res.req.file.filename;
            weapons.save().then(Weapon => {res.json('Update complete');
          })
          .catch(err => {
                res.status(400).send("unable to update the database");
          });
        }
      });

      return res.send({
        success: true
      })
    }
});


//////////////////////////////////////////////

app.post('/Update/uploadImage/:id',upload.single('photo'), function (req, res) {
  _id= req.params.id;
  console.log(_id);
  if (!req.file) {
      console.log("No file received");
      return res.send({
        success: false
      });
  
    } else {
      
      console.log('file received, file name '+ res.req.file.filename);
      
      update.findById(req.params.id, function(err, Update) {
        if (!Update){
          console.log(err);
          console.log(req.params.id);
          }
        else {
            Update.image = res.req.file.filename;
            Update.save().then(Update => {res.json('Update complete');
          })
          .catch(err => {
                res.status(400).send("unable to update the database");
          });
        }
      });

      return res.send({
        success: true
      })
    }
});



let port = process.env.PORT || 4000;

app.use('/Weapon',weaponRoute);
app.use('/Update',updateRoute);
app.use('/Feedback',feedbackRoute);
const server = app.listen(port,function(){
    console.log('Listening on port ' + port);
});