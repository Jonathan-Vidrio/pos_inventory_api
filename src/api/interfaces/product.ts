import { Document, Types } from "mongoose";

interface IProduct extends Document {
    name: string,
    description: string,
    price: number,
    stock?: number,
    category: Types.ObjectId,
    provider: Types.ObjectId[],
    status?: number,
}

export default IProduct;