const {db} = require('../../db/db')
const { DataTypes} = require('sequelize')

const User = db.define('user',{
    id: { type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
    emeil: { type: DataTypes.STRING, unique:true},
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: 'USER'}
})

const UserGetAll = () => User.findAll()
const UserGetOne = ({id}) => User.findByPk(id)
const UserCreate = ({data}) => User.create(data)
const UserDelete = ({id}) => User.destroy({
    where: {
        id
    }
})
const UserUpdate = ({id, data}) => User.update(data,
    {
        where: {
            id
        }
    }
)

module.exports = {
    methods: {
        UserGetAll,
        UserGetOne,
        UserCreate,
        UserDelete,
        UserUpdate
    },
    User,
}
