const listResolvers = require("./list");
const descResolvers = require("./desc");
const cartResolvers = require("./cart");

module.exports = {
    Query: {
        ...listResolvers.Query
    }
}