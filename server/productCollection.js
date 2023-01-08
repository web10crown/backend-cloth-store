const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    brand: { type: String, required: true },
    name: { type: String, required: true },
    colour: { type: String, required: true },
    clothType: { type: String, required: true },
    description: { type: String, required: true },
    quantity: { type: Number, required: true },
    size: { type: String, required: true },
    genderType: { type: String, required: true },
    price: { type: Number, required: true },
    productImage: { type: String, required: true },
});

module.exports = mongoose.model("products", productSchema, "products");
