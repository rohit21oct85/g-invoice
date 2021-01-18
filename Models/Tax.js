const mongoose = require('mongoose');

const reqString = {
    type: String,
    required: true,
}

const TaxSchema = new mongoose.Schema({
    tax_type: reqString,
    name: reqString,
    value: reqString,
});



module.exports = mongoose.model('Tax', TaxSchema);