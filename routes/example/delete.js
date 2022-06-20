const { BrandDelete } = require("../../controllers");
module.exports = async function (request, reply) {
    try {
        return await BrandDelete(request.params.id);
    } catch (e) {
        reply.statusCode = 401
        return { error: e.errors[0].message}
    }
}
