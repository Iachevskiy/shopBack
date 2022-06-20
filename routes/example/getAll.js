const { BrandGetAll } = require("../../controllers");
module.exports = async function (request, reply) {
    const brands = await BrandGetAll()
    return {
        brands,
    }
}
