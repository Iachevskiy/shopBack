const {db} = require('../../db/db')
const { DataTypes} = require('sequelize')

const Rating = db.define('rating', {
    id: { type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false},
})

module.exports = {
    methods: {},
    Rating,
}
