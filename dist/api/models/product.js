"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ProductSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        default: 0
    },
    category: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    provider: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Provider',
            required: true
        }],
    status: {
        type: Number,
        default: 1
    }
});
const ProductModel = (0, mongoose_1.model)('Product', ProductSchema);
exports.default = ProductModel;
