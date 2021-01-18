const mongoose = require('mongoose');

const reqString = {
  type: String,
  required: true,
}

const PaymentTermSchema = new mongoose.Schema({
  name: reqString
});

module.exports = mongoose.model('payment_terms', PaymentTermSchema);