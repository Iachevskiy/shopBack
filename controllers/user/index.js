const {db} = require('../../db/db')
const { DataTypes} = require('sequelize')

const User = db.define('user',{
    id: { type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
    emeil: { type: DataTypes.STRING, unique:true},
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: 'USER'}
})

module.exports = {
    methods: {},
    User,
}
