const mongoose = require('mongoose');

const reqString = {
    type: String,
        required: true,
}

const ItemSchema = new mongoose.Schema({
    item_type: reqString,
    name: reqString,
    unit: reqString,
    selling_price: reqString,
    description:reqString
    



});



module.exports = mongoose.model('Item', ItemSchema);