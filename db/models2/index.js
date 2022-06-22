const basket = require('./basket')
const basket_device = require('./basket_device')
const brand = require('./brand')
const device = require('./device')
const device_info = require('./device_info')
const rating = require('./rating')
const typo = require('./typo')
const typo_brand = require('./typo_brand')
const user = require('./user')

const associations = require('./associations')

const models = {
    basket,
    basket_device,
    brand,
    device,
    device_info,
    rating,
    typo,
    typo_brand,
    user,
}

associations(models)

module.exports = models;

