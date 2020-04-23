const orderService = require('../Services/orderService')

async function saveOrdersInDB() {
    try {
        let dataFile = await orderService.getOrdersFromDataFile()
        return await orderService.saveOrdersInDB(dataFile)
    } catch (error) {
        return error
    }
}

module.exports = {
    saveOrdersInDB
}


