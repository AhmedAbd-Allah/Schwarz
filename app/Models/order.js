const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    orderId: {
        type: String,
        unique: true
    },
    companyName: {
        type: String,
    },
    customerAdress: {
        type: String,
    },
    orderedItem: {
        type: String,
    }
});


mongoose.model('Orders', orderSchema);
module.exports = mongoose.model('Orders');