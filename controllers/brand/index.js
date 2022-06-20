const {db} = require('../../db/db')
const { DataTypes} = require('sequelize')

const Brand = db.define('brand', {
    id: { type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const BrandGetAll = () => Brand.findAll()
const BrandGetOne = (id) => Brand.findByPk(id)
const BrandCreate = (name) => Brand.create({name})
const BrandDelete = (id) => Brand.destroy({
    where: {
        id
    }
})
const BrandUpdate = (id, name) => Brand.update({name},
    {
        where: {
            id
        }
    }
)

module.exports = {
    methods: {
        BrandGetAll,
        BrandCreate,
        BrandDelete,
        BrandUpdate,
        BrandGetOne
    },
    Brand,
}
