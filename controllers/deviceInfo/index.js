const {db} = require('../../db/db')
const { DataTypes} = require('sequelize')

const DeviceInfo = db.define('device_info', {
    id: { type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
})

module.exports = {
    methods: {},
    DeviceInfo,
}
