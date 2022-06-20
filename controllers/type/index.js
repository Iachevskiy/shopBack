const {db} = require('../../db/db')
const { DataTypes} = require('sequelize')

const Type = db.define('type', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

module.exports = {
    methods: {},
    Type,
}
