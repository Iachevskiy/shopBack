
module.exports = (models)=> {
    const {
        basket: { model: basket },
        basket_device: { model: basket_device },
        brand: { model: brand },
        device: { model: device },
        device_info: { model: device_info },
        rating: { model: rating },
        typo: { model: typo },
        typo_brand: { model: typo_brand },
        user: { model: user },
    } = models;

    user.hasOne(basket)
    basket.belongsTo(user)

    user.hasMany(rating)
    rating.belongsTo(user)

    basket.hasMany(basket_device)
    basket_device.belongsTo(basket)

    typo.hasMany(device)
    device.belongsTo(typo)

    brand.hasMany(device)
    device.belongsTo(brand)

    device.hasMany(rating)
    rating.belongsTo(device)

    device.hasMany(basket_device)
    basket_device.belongsTo(device)

    device.hasMany(device_info, { as: 'info'})
    device_info.belongsTo(device)

    typo.belongsToMany(brand, {through: typo_brand})
    brand.belongsToMany(typo, {through: typo_brand})
}
