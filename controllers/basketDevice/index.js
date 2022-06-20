const {db} = require('../../db/db')
const { DataTypes} = require('sequelize')

const BasketDevice = db.define('basket_device', {
    id: { type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
})

module.exports = {
    methods: {},
    BasketDevice,
}
