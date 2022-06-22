const {db: sequelize} = require('../../db')
const { DataTypes} = require('sequelize')

module.exports = {
    model: sequelize.define('rating',{
        id: { type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
        rate: {type: DataTypes.INTEGER, allowNull: false},
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
    url: 'rating',
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
