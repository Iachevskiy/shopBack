const {db: sequelize} = require('../../db')
const { DataTypes} = require('sequelize')

module.exports = {
    model: sequelize.define('user',{
        id: { type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
        email: { type: DataTypes.STRING, unique:true},
        password: { type: DataTypes.STRING },
        role: { type: DataTypes.STRING, defaultValue: 'USER'}
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
    url: 'user',
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
