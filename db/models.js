// const sequelize = require('./config')
const {db: sequelize} = require('./db')
const { DataTypes} = require('sequelize')

const user = sequelize.define('user',{
    id: { type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
    emeil: { type: DataTypes.STRING, unique:true},
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: 'USER'}
})

const basket = sequelize.define('basket', {
    id: { type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
})

const basket_device = sequelize.define('basket_device', {
    id: { type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
})

const device = sequelize.define('device', {
    id: { type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER,  allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0,},
    img: {type: DataTypes.STRING, allowNull: false}
})

const type = sequelize.define('type', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const brand = sequelize.define('brand', {
    id: { type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const rating = sequelize.define('rating', {
    id: { type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false},
})

const device_info = sequelize.define('device_info', {
    id: { type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
})

const type_brand = sequelize.define('type_brand', {
    id: { type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
})

user.hasOne(basket)
basket.belongsTo(user)

user.hasMany(rating)
rating.belongsTo(user)

basket.hasMany(basket_device)
basket_device.belongsTo(basket)

type.hasMany(device)
device.belongsTo(type)

brand.hasMany(device)
device.belongsTo(brand)

device.hasMany(rating)
rating.belongsTo(device)

device.hasMany(basket_device)
basket_device.belongsTo(device)

device.hasMany(device_info, { as: 'info'})
device_info.belongsTo(device)

type.belongsToMany(brand, {through: type_brand})
brand.belongsToMany(type, {through: type_brand})

module.exports = {
    db: sequelize,
    models: {
         user,
         basket,
         basket_device,
         device,
         type,
         brand,
         rating,
         type_brand,
         device_info
    }
}
