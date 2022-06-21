'use strict'

const fp = require('fastify-plugin')

// the use of fastify-plugin is required to be able
// to export the decorators to the outer scope
const {db} = require('../db/db')
const controllers = require("../controllers");
const models = Object.keys(db.models);

const modelsData = require('../db/models')





const reqFunc2 = (model, method) => async function (req, res) {
  let data;
  switch (method) {
    case 'getAll':
      data = await modelsData.models[model].findAll()
      return data
    case 'getOne':
      data = await modelsData.models[model].findByPk(req.params.id)
      return data
    case 'delete':
      data = await modelsData.models[model].destroy({ where: {id: req.params.id} })
      return data
    case 'create':
      data = await modelsData.models[model].create(req.body)
      return data
    case 'update':
      data = await modelsData.models[model].update(req.body, { where: {id: req.params.id} })
      return data
  }

  // try {
  //   return await controllers[model]({id: req.params.id, data: req.body });
  // } catch (e) {
  //   res.statusCode = 401
  //   return { error: e.errors[0].message}
  // }
}



module.exports = fp(async function (fastify, opts) {

  models.forEach((model)=>{

    // getAll
    fastify.route({
      method: 'GET',
      url: `/${model}`,
      handler: reqFunc2( model, 'getAll')
    })

    // getOne
    fastify.route({
      method: 'GET',
      url: `/${model}/:id`,
      handler: reqFunc2( model, 'getOne')
    })

    // Delete
    fastify.route({
      method: 'DELETE',
      url: `/${model}/:id`,
      handler: reqFunc2( model, 'delete')
    })

    // Create
    fastify.route({
      method: 'POST',
      url: `/${model}`,
      handler: reqFunc2( model, 'create')
    })

    // Update
    fastify.route({
      method: 'PUT',
      url: `/${model}/:id`,
      handler: reqFunc2( model, 'update')
    })

  })

})
