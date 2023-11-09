import ICategory from "../interfaces/category";
import CategoryModel from "../models/category";

const getCategories = async () => {
    const result = await CategoryModel.find({});
    return result;
}

const getEnabledCategories = async () => {
    const result = await CategoryModel.find(
        { status: 1 }
    );
    return result;
}

const getCategory = async (_id: string) => {
    const result = await CategoryModel.findById(
        { _id: _id }
    );
    return result;
}

const registerCategory = async (data: ICategory) => {
    const result = await CategoryModel.create(data);
    return result;
}

const updateCategory = async (_id: string, data: ICategory) => {
    const result = await CategoryModel.findByIdAndUpdate(
        { _id: _id },
        data,
        { new:  true }
    );
    return result;
}

const disableCategory = async (_id: string) => {
    const result = await CategoryModel.findByIdAndUpdate(
        { _id: _id },
        { status: 0 },
        { new: true }
    );
    // cambiar a "" el campo de la categoria en los productos
    return result;
}

const enableCategory = async (_id: string) => {
    const result = await CategoryModel.findByIdAndUpdate(
        { _id: _id },
        { status: 1 },
        { new: true }
    );
    return result;
}

export {
    getCategories,
    getEnabledCategories,
    getCategory,
    registerCategory,
    updateCategory,
    disableCategory,
    enableCategory,
}