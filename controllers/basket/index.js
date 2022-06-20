const {db} = require('../../db/db')
const { DataTypes} = require('sequelize')

const Basket = db.define('basket', {
    id: { type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
})

module.exports = {
    methods: {},
    Basket,
}
