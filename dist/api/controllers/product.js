"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.enableProduct = exports.disableProduct = exports.putProduct = exports.postProduct = exports.getProductById = exports.getEnabledProducts = exports.getAllProducts = void 0;
const service = __importStar(require("../services/product"));
const getAllProducts = async (req, res) => {
    try {
        const result = await service.getProducts();
        res.send(result);
    }
    catch (e) {
        res.send('ERROR_GET_ALL_PRODUCTS');
    }
};
exports.getAllProducts = getAllProducts;
const getEnabledProducts = async (req, res) => {
    try {
        const result = await service.getEnabledProducts();
        res.send(result);
    }
    catch (e) {
        res.send('ERROR_GET_ENABLED_PRODUCTS');
    }
};
exports.getEnabledProducts = getEnabledProducts;
const getProductById = async (req, res) => {
    try {
        const { _id } = req.params;
        const result = await service.getProduct(_id);
        res.send(result);
    }
    catch (e) {
        res.send('ERROR_GET_PRODUCT_BY_ID');
    }
};
exports.getProductById = getProductById;
const postProduct = async (req, res) => {
    try {
        const data = req.body;
        const result = await service.registerProduct(data);
        res.send(result);
    }
    catch (e) {
        res.send('ERROR_POST_PRODUCT');
    }
};
exports.postProduct = postProduct;
const putProduct = async (req, res) => {
    try {
        const { _id } = req.params;
        const data = req.body;
        const result = await service.updateProduct(_id, data);
        res.send(result);
    }
    catch (e) {
        res.send('ERROR_PUT_PRODUCT');
    }
};
exports.putProduct = putProduct;
const disableProduct = async (req, res) => {
    try {
        const { _id } = req.params;
        const result = await service.disableProduct(_id);
        res.send(result);
    }
    catch (e) {
        res.send('ERROR_DISABLE_PRODUCT');
    }
};
exports.disableProduct = disableProduct;
const enableProduct = async (req, res) => {
    try {
        const { _id } = req.params;
        const result = await service.enableProduct(_id);
        res.send(result);
    }
    catch (e) {
        res.send('ERROR_ENABLE_PRODUCT');
    }
};
exports.enableProduct = enableProduct;
