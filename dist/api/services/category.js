"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.enableCategory = exports.disableCategory = exports.updateCategory = exports.registerCategory = exports.getCategory = exports.getEnabledCategories = exports.getCategories = void 0;
const category_1 = __importDefault(require("../models/category"));
const getCategories = async () => {
    const result = await category_1.default.find({});
    return result;
};
exports.getCategories = getCategories;
const getEnabledCategories = async () => {
    const result = await category_1.default.find({ status: 1 });
    return result;
};
exports.getEnabledCategories = getEnabledCategories;
const getCategory = async (_id) => {
    const result = await category_1.default.findById({ _id: _id });
    return result;
};
exports.getCategory = getCategory;
const registerCategory = async (data) => {
    const result = await category_1.default.create(data);
    return result;
};
exports.registerCategory = registerCategory;
const updateCategory = async (_id, data) => {
    const result = await category_1.default.findByIdAndUpdate({ _id: _id }, data, { new: true });
    return result;
};
exports.updateCategory = updateCategory;
const disableCategory = async (_id) => {
    const result = await category_1.default.findByIdAndUpdate({ _id: _id }, { status: 0 }, { new: true });
    return result;
};
exports.disableCategory = disableCategory;
const enableCategory = async (_id) => {
    const result = await category_1.default.findByIdAndUpdate({ _id: _id }, { status: 1 }, { new: true });
    return result;
};
exports.enableCategory = enableCategory;
