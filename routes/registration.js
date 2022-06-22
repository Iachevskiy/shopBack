'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/registration', async function (request, reply) {
    return { registration: true }
  })

  fastify.get('/auth', async function (request, reply) {
    return { registration: true }
  })
}
