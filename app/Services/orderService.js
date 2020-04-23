const fs = require('fs');
const path = require('path')
const orderModel = require('../Models/order')
const { promisify } = require('util')

async function getOrdersFromDataFile() {
    try {
        // read data from data file
        let pathname = path.join(__dirname, '../data.txt')
        const readFilePromisified = promisify(fs.readFile)
        return readFilePromisified(pathname)
    } catch (error) {
        throw error;
    }

}

async function saveOrdersInDB(dataFile) {
    try {
        // foramt every order to json to be prepared for database insertion
        const newProducts = dataFile.toString().split('\n').map((line) => {
            line = line.split(",");
            return {
                orderId: line[0],
                companyName: line[1],
                customerAdress: line[2],
                orderedItem: line[3]
            }
        })
        // save orders to MongoDB
        return await orderModel.insertMany(newProducts)
    } catch (error) {
        throw error
    }

}


async function getOrders(query) {
    try {
        let orders = await orderModel.find(query)
        return orders;
    } catch (error) {
        throw error
    }
}

async function deleteOrder(orderId) {
    try {
        let deletedOrder = await orderModel.findOneAndRemove({ orderId: orderId })
        return deletedOrder;
    } catch (error) {
        throw error
    }
}

module.exports = {
    getOrdersFromDataFile,
    saveOrdersInDB,
    getOrders,
    deleteOrder
};