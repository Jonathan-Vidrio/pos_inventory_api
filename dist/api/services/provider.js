"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.enableProvider = exports.disableProvider = exports.updateProvider = exports.registerProvider = exports.getProvider = exports.getEnabledProviders = exports.getProviders = void 0;
const provider_1 = __importDefault(require("../models/provider"));
const getProviders = async () => {
    const result = await provider_1.default.find({});
    return result;
};
exports.getProviders = getProviders;
const getEnabledProviders = async () => {
    const result = await provider_1.default.find({ status: 1 });
    return result;
};
exports.getEnabledProviders = getEnabledProviders;
const getProvider = async (_id) => {
    const result = await provider_1.default.findOne({ _id: _id });
    return result;
};
exports.getProvider = getProvider;
const registerProvider = async (data) => {
    const result = await provider_1.default.create(data);
    return result;
};
exports.registerProvider = registerProvider;
const updateProvider = async (_id, data) => {
    const result = await provider_1.default.findByIdAndUpdate({ _id: _id }, data, { new: true });
    return result;
};
exports.updateProvider = updateProvider;
const disableProvider = async (_id) => {
    const result = await provider_1.default.findByIdAndUpdate({ _id: _id }, { status: 0 }, { new: true });
    return result;
};
exports.disableProvider = disableProvider;
const enableProvider = async (_id) => {
    const result = await provider_1.default.findByIdAndUpdate({ _id: _id }, { status: 1 }, { new: true });
    return result;
};
exports.enableProvider = enableProvider;
