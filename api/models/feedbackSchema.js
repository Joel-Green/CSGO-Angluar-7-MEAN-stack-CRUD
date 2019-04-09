const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let feedback = new Schema({
    name: {
      type: String
      },
    phone:{
        type:String
      },
    email:{
        type:String
      },
    message:{
        type:String
      },
    },
  {
      collection: 'Feedback'
  });
  module.exports = mongoose.model('feedback', feedback);  