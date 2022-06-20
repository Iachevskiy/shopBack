const { Sequelize } = require('sequelize')


// база через докер
const database = 'habrdb'
const username = 'habrpguser'
const password = 'pgpwd4habr'
// const host = 'host.docker.internal'
const host = 'localhost'
const port = 5430

const db = new Sequelize(
    database,
    username,
    password,
    {
        host,
        port,
        dialect: 'postgres'
    }
)

// подключаемся к postgres
const connect = async () => {
    try {
        console.log('start connect db 1')
        await db.authenticate()
        await db.sync()
        console.log('finish connect db 1')
    } catch (e) {
        console.log(e)
    }
}


module.exports = {connect, db}
