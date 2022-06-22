'use strict'

const path = require('path')
const AutoLoad = require('@fastify/autoload')

const { connect } = require('./db/db')
// const controllers = require('./controllers')

// const models = require('./db/models')

module.exports = async function (fastify, opts) {
  // Place here your custom code!

  // // подключаемся к postgres
  connect()
  fastify.decorate('util', (a, b) => a + b)
  console.log(fastify.util('that is ', 'awesome'))

  fastify.decorate('util2', '(a, b) => a + b')
  console.log(fastify.util2)


  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })

}
