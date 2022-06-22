const {db: sequelize} = require('../../db')
const { DataTypes} = require('sequelize')

module.exports = {
    model: sequelize.define('basket_device',{
        id: { type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
    }),
    schema: {
        body: {
            type: 'object',
            required: ['userId'],
            properties: {
                userId: { type: 'number' },
            }
        }},
    url: 'basket_device',
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
