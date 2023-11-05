import { Schema, model } from "mongoose";
import ICategory from "../interfaces/category";

const CategorySchema = new Schema<ICategory>(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
        description: String,
        status: {
            type: Number,
            default: 1
        }
    });

const CategoryModel = model('Category', CategorySchema);

export default CategoryModel;