const { model, Schema } = require("mongoose");

const listSchema = new Schema({
    name: String,
    image: String,
    body: String,
    cart: {
        type: Schema.Types.ObjectId,
        refs: "carts"
    }
});

module.exports = model("List", listSchema);