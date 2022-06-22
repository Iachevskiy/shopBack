'use strict'

const optBody = {
  body: {
    type: 'object',
    required: ['name'],
    properties: {
      name: { type: 'string' },
    }
  }
}
const optParamsId = {
  params:{
    type: 'object',
    required: ['id'],
    properties: {
      id: { type: 'number' },
    }
  }
}

module.exports = async function (fastify) {

    // fastify.get('/', require('./getAll'))
    //
    // fastify.get('/:id',
    //     {
    //         schema: {
    //             ...optParamsId
    //         }
    //     },
    //     require('./getOne')
    // )
    //
    // fastify.post('/',
    //   {
    //     schema: {
    //       ...optBody
    //     }
    //   },
    //   require('./add'))
    //
    // fastify.delete('/:id',
    //   {
    //     schema: {
    //       ...optParamsId
    //     }
    //   },
    //   require('./delete')
    // )
    //
    // fastify.put('/:id',
    //   {
    //     schema: {
    //       ...optParamsId,
    //       ...optBody
    //     }
    //   },
    //   require('./update')
    // )
}
