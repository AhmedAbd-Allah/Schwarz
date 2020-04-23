const orderService = require('../Services/orderService')

async function saveOrdersInDB() {
    try {
        let dataFile = await orderService.getOrdersFromDataFile()
        return await orderService.saveOrdersInDB(dataFile)
    } catch (error) {
        return error
    }
}

async function getOrders(req, res) {
    try {
        let orders = await orderService.getOrders(req.query);
        res.status(200).send(orders)
    } catch (error) {
        res.send(error)
    }
}

module.exports = {
    saveOrdersInDB,
    getOrders
}


