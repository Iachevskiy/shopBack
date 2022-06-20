const { BrandGetOne } = require("../../controllers");
module.exports = async function (request, reply) {
    try {
        return await BrandGetOne(request.params.id);
    } catch (e) {
        reply.statusCode = 401
        return { error: e.errors[0].message}
    }
}
