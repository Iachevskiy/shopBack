const { BrandUpdate} = require("../../controllers");
module.exports = async function (request, reply) {
    try {
        return await BrandUpdate( request.params.id, request.body.name);
    } catch (e) {
        reply.statusCode = 401
        return { error: e.errors[0].message}
    }
}
