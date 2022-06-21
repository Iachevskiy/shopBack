const { User, methods: UserMethods } = require('./user')
const { Basket, methods: BasketMethods  } = require('./basket')
const { BasketDevice, methods: BasketDeviceMethods  } = require('./basketDevice')
const { Device, methods: DeviceMethods  } = require('./device')
const { Type, methods: TypeMethods  } = require('./type')
const { Brand, methods: BrandMethods  } = require('./brand')
const { DeviceInfo, methods: DeviceInfoMethods  } = require('./deviceInfo')
const { TypeBrand, methods: TypeBrandMethods  } = require('./typeBrand')
const { Rating, methods: RatingMethods  } = require('./rating')



User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Basket.hasMany(BasketDevice)
BasketDevice.belongsTo(Basket)

Type.hasMany(Device)
Device.belongsTo(Type)

Brand.hasMany(Device)
Device.belongsTo(Brand)

Device.hasMany(Rating)
Rating.belongsTo(Device)

Device.hasMany(BasketDevice)
BasketDevice.belongsTo(Device)

Device.hasMany(DeviceInfo, { as: 'info'})
DeviceInfo.belongsTo(Device)

Type.belongsToMany(Brand, {through: TypeBrand})
Brand.belongsToMany(Type, {through: TypeBrand})



module.exports = {
    ...UserMethods,
    ...BasketMethods,
    ...RatingMethods,
    ...BasketDeviceMethods,
    ...DeviceMethods,
    ...TypeMethods,
    ...BrandMethods,
    ...DeviceInfoMethods,
    ...TypeBrandMethods
}
