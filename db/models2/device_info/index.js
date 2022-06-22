const {db: sequelize} = require('../../db')
const { DataTypes} = require('sequelize')

module.exports = {
    model: sequelize.define('device_info',{
        id: { type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
        title: {type: DataTypes.STRING, allowNull: false},
        description: {type: DataTypes.STRING, allowNull: false},
    }),
    schema: {
        body: {
            type: 'object',
            required: ['emeil', 'password'],
            properties: {
                emeil: { type: 'string' },
                password: { type: 'string' },
                role: { type: 'string' },
            }
        }},
    url: 'device_info',
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
