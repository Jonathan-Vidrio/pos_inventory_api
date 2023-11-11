"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.enableProduct = exports.disableProduct = exports.updateProduct = exports.registerProduct = exports.getProduct = exports.getEnabledProducts = exports.getProducts = void 0;
const product_1 = __importDefault(require("../models/product"));
const getProducts = async () => {
    const result = await product_1.default.find({});
    return result;
};
exports.getProducts = getProducts;
const getEnabledProducts = async () => {
    const result = await product_1.default.find({ status: 1 })
        .populate('category')
        .populate({ path: 'provider' });
    return result;
};
exports.getEnabledProducts = getEnabledProducts;
const getProduct = async (_id) => {
    const result = await product_1.default.findById({ _id: _id })
        .populate('category')
        .populate({ path: 'provider' });
    return result;
};
exports.getProduct = getProduct;
const registerProduct = async (data) => {
    const result = await product_1.default.create(data);
    return result;
};
exports.registerProduct = registerProduct;
const updateProduct = async (_id, data) => {
    const result = await product_1.default.findByIdAndUpdate({ _id: _id }, data, { new: true });
    return result;
};
exports.updateProduct = updateProduct;
const disableProduct = async (_id) => {
    const result = await product_1.default.findByIdAndUpdate({ _id: _id }, { status: 0 }, { new: true });
    return result;
};
exports.disableProduct = disableProduct;
const enableProduct = async (_id) => {
    const result = await product_1.default.findByIdAndUpdate({ _id: _id }, { status: 1 }, { new: true });
    return result;
};
exports.enableProduct = enableProduct;
