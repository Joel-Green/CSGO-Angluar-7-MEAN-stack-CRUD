const express = require('express'),
path = require('path'),
 bodyParser = require('body-parser'),
 mongoose = require('mongoose');
config=require('./DB');

const weaponRoute=require('./routes/weapon.route');
const updateRoute=require('./routes/update.route');
const feedbackRoute=require('./routes/feedback.route');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

const app = express();
app.use(bodyParser.json());


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  // res.setHeader('Access-Control-Allow-Methods', 'POST');
  // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // res.setHeader('Access-Control-Allow-Credentials', true);
  
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

let port = process.env.PORT || 4000;

app.use('/Weapon',weaponRoute);
app.use('/Update',updateRoute);
app.use('/Feedback',feedbackRoute);
const server = app.listen(port,function(){
    console.log('Listening on port ' + port);
});