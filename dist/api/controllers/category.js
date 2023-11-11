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
exports.enableCategory = exports.disableCategory = exports.putCategory = exports.postCategory = exports.getCategoryById = exports.getEnabledCategories = exports.getAllCategories = void 0;
const service = __importStar(require("../services/category"));
const getAllCategories = async (req, res) => {
    try {
        const result = await service.getCategories();
        res.send(result);
    }
    catch (e) {
        res.status(500).send("ERROR_GET_ALL_CATEGORIES");
    }
};
exports.getAllCategories = getAllCategories;
const getEnabledCategories = async (req, res) => {
    try {
        const result = await service.getEnabledCategories();
        res.send(result);
    }
    catch (e) {
        res.status(500).send("ERROR_GET_ENABLED_CATEGORIES");
    }
};
exports.getEnabledCategories = getEnabledCategories;
const getCategoryById = async (req, res) => {
    try {
        const { _id } = req.params;
        const result = await service.getCategory(_id);
        res.send(result);
    }
    catch (e) {
        res.status(500).send("ERROR_GET_CATEGORY_BY_ID");
    }
};
exports.getCategoryById = getCategoryById;
const postCategory = async (req, res) => {
    try {
        const { body } = req;
        const result = await service.registerCategory(body);
        res.send(result);
    }
    catch (e) {
        res.status(500).send("ERROR_POST_CATEGORY");
    }
};
exports.postCategory = postCategory;
const putCategory = async (req, res) => {
    try {
        const { body } = req;
        const { _id } = req.params;
        const result = await service.updateCategory(_id, body);
        res.send(result);
    }
    catch (e) {
        res.status(500).send("ERROR_PUT_CATEGORY");
    }
};
exports.putCategory = putCategory;
const disableCategory = async (req, res) => {
    try {
        const { _id } = req.params;
        const result = await service.disableCategory(_id);
        res.send(result);
    }
    catch (e) {
        res.status(500).send("ERROR_DISABLE_CATEGORY");
    }
};
exports.disableCategory = disableCategory;
const enableCategory = async (req, res) => {
    try {
        const { _id } = req.params;
        const result = await service.enableCategory(_id);
        res.send(result);
    }
    catch (e) {
        res.status(500).send("ERROR_ENABLE_CATEGORY");
    }
};
exports.enableCategory = enableCategory;
