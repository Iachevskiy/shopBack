const { UserCreate} = require("../../controllers");
module.exports = async function (request, reply) {
    try {
        return await UserCreate(request.body);
    } catch (e) {
        reply.statusCode = 401
        return { error: e.errors[0].message}
    }
}
