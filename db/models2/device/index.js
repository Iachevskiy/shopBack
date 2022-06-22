const {db: sequelize} = require('../../db')
const { DataTypes} = require('sequelize')

module.exports = {
    model: sequelize.define('device',{
        id: { type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
        name: {type: DataTypes.STRING, unique: true, allowNull: false},
        price: {type: DataTypes.INTEGER,  allowNull: false},
        rating: {type: DataTypes.INTEGER, defaultValue: 0,},
        img: {type: DataTypes.STRING, allowNull: false}
    }),
    schema: {
        body: {
            type: 'object',
            required: ['userId'],
            properties: {
                userId: { type: 'number' },
            }
        }},
    url: 'device',
    routes: {
        GET: {
            on: true,
            auth: ['admin']
        },
        GETAll: {
            on: true,
            auth: ['admin']
        },
        POST: {
            on: true,
            auth: ['admin']
        },
        PUT: {
            on: true,
            auth: ['admin']
        },
        DELETE: {
            on: true,
            auth: ['admin']
        },
    }
}
