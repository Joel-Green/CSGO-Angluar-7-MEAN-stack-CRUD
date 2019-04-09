const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let weapon = new Schema({
  weapon_name: {
    type: String
    },
  weapon_damage:{
      type:String
    },
    weapon_recoil:{
      type:String
    },  
    weapon_FireRate:{
      type:String
    },
    weapon_mobility:{
      type:String
    },
    image_upload:{
      type:String
    },
  },
{
    collection: 'Weapon'
});

module.exports = mongoose.model('weapon', weapon);

