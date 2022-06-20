const {db} = require('../../db/db')
const { DataTypes} = require('sequelize')

const TypeBrand = db.define('type_brand', {
    id: { type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
})

module.exports = {
    methods: {},
    TypeBrand,
}
