const { model, Schema } = require("mongoose");

const cartSchema = new Schema({
    cart: {
        stock: Number,
        quantity: Number
    }
});

module.exports = model("Cart", cartSchema);