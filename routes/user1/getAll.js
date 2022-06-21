const { UserGetAll } = require("../../controllers");
module.exports = async function (request, reply) {
    const data = await UserGetAll()
    return {
        data,
    }
}
