'use strict'

const controllers = require("../../controllers");
const optBody = {
  body: {
    type: 'object',
    required: ['emeil', 'password'],
    properties: {
        emeil: { type: 'string' },
        password: { type: 'string' },
        role: { type: 'string' },
    }
  }
}



const reqFunc2 = (controller) => async function (req, res) {
        try {
            return await controllers[controller]({id: req.params.id, data: req.body });
        } catch (e) {
            res.statusCode = 401
            return { error: e.errors[0].message}
        }
    }



module.exports = async function (fastify) {

    fastify.get('/', reqFunc2( 'UserGetAll'))

    fastify.get('/:id', reqFunc2('UserGetOne'))

    fastify.delete('/:id', reqFunc2('UserDelete'))

    fastify.post('/',
        {
            schema: {
                ...optBody
            }
        },
        reqFunc2('UserCreate')
    )

    fastify.put('/:id',
      {
        schema: {
          ...optBody
        }
      },
        reqFunc2('UserUpdate')
    )
}
