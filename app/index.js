const express = require('express');
const app = express();
const mongoose = require('mongoose')
const mongoSanitize = require('express-mongo-sanitize');
const Config = require('./config')
const orderController = require('./Controllers/orderController');
const dbURI = Config.mongoURI;

// Start database connection
mongoose.connect(dbURI,
    { useNewUrlParser: true, useUnifiedTopology: true, 'useCreateIndex': true }
    , function (err, data) {
        if (err)
            console.log(err)
    });

// sanitize request
app.use(mongoSanitize());

// allow cross origin
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.get('/orders', orderController.getOrders)
app.delete('/order/:orderId', orderController.deleteOrder)
app.get('/items', orderController.getOrderedItems)


// server up
app.listen(Config.serverPort, () => {
    console.log("Server is on and listening on port ", Config.serverPort);
});

orderController.saveOrdersInDB()

module.exports = app

