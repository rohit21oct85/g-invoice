const mongoose = require('mongoose');

 
const reqString = {
    type: String,
    required: true,
}

const UnitSchema = new mongoose.Schema({
    
    name: reqString
  });



  module.exports = mongoose.model('Unit', UnitSchema);