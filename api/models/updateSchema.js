const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let update = new Schema({
    heading: {
      type: String
      },
    content:{
        type:String
      },
    },
  {
      collection: 'Update'
  });
  module.exports = mongoose.model('update', update);  