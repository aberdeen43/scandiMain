const { model, Schema } = require("mongoose");

const descriptionSchema = new Schema({
    id: String,
    name: String,
    image: String,
    body: String,
    stock: {
        type: Schema.Types.ObjectId,
        refs: "carts"
    }
});

module.exports = model("Desc", descSchema);