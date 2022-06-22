'use strict'

const fp = require('fastify-plugin')

const models2 = require('../db/models2')



const request = (model, method) => async function ({params, body, ...obj}, res) {

  const id = params.id

  try {

    if(method === 'GETAll') return await model.findAll()
    if(method === 'GET') return await model.findByPk(id)
    if(method === 'DELETE') return await model.destroy({ where: {id} })
    if(method === 'POST') return await model.create(body)
    if(method === 'PUT'){
      const data = await model.update(body, { where: {id} })
      if(data[0]){
        return { message: 'Обновление прошло успешно'}
      } else {
        throw new Error('Не найдено')
      }
    }

  } catch (e) {
    res.statusCode = 400
    let message = "Описание ошибки"
    if (e.message) message = e.message
    if (e.errors && e.errors[0] && e.errors[0].message) message = e.errors[0].message
    return { message }
  }
}



module.exports = fp(async function (fastify, opts) {


  const makeUrl = (method, model) =>  [ 'GET', 'DELETE', 'PUT'].includes(method) ? `/${model}/:id` : `/${model}`

  Object.keys(models2).forEach((key)=>{
    const { model, schema, url, routes } = models2[key];

    Object.keys(routes).forEach((method)=>{
      if(routes[method].on){

        const options = {
          method: method === 'GETAll' ? 'GET' : method,
          url: makeUrl(method, url),
          handler: request( model, method),
        }
        if([ 'POST', 'PUT'].includes(method)) options.schema = { ...options.schema, ...schema }

        fastify.route(options)
      }

    })

  })

})
