import { Schema, model } from "mongoose";
import IProduct from "../interfaces/product";

const ProductSchema = new Schema<IProduct>(
    {
        name: {
            type: String,
            required: true,
            unique: true
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
                type: Schema.Types.ObjectId,
                ref: 'Category',
                required: true
        },
        provider: [{
            type: Schema.Types.ObjectId,
            ref: 'Provider',
            required: true
        }],
        status: {
            type: Number,
            default: 1
        }
    });

const ProductModel = model('Product', ProductSchema);

export default ProductModel;