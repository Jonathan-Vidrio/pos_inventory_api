import IProduct from "../interfaces/product";
import ProductModel from "../models/product";

const getProducts = async () => {
    const result = await ProductModel.find({});
    return result;
}

const getEnabledProducts = async () => {
    const result = await ProductModel.find(
        { status: 1 }
    );
    return result;
}

const getProduct = async (_id: string) => {
    const result = await ProductModel.findById(
        { _id: _id }
    );
    return result;
}

const registerProduct = async (data: IProduct) => {
    const result = await ProductModel.create(data);
    return result;
}

const updateProduct = async (_id: string, data: IProduct) => {
    const result = await ProductModel.findByIdAndUpdate(
        { _id: _id},
        data,
        { new: true }
    );
    return result;
}

const disableProduct = async (_id: string) => {
    const result = await ProductModel.findByIdAndUpdate(
        { _id: _id },
        { status: 0 },
        { new: true }
    );
    return result;
}

const enableProduct = async (_id: string) => {
    const result = await ProductModel.findByIdAndUpdate(
        { _id: _id },
        { status: 1 },
        { new: true }
    );
    return result;
}

export {
    getProducts,
    getEnabledProducts,
    getProduct,
    registerProduct,
    updateProduct,
    disableProduct,
    enableProduct
}