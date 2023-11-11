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
exports.enableClient = exports.disableClient = exports.putClient = exports.postClient = exports.getClient = exports.getEnabledClients = exports.getAllClients = void 0;
const service = __importStar(require("../services/client"));
const getAllClients = async (req, res) => {
    try {
        const result = await service.getClients();
        res.status(200).json(result);
    }
    catch (error) {
        res.status(500).json(error);
    }
};
exports.getAllClients = getAllClients;
const getEnabledClients = async (req, res) => {
    try {
        const result = await service.getEnabledClients();
        res.status(200).json(result);
    }
    catch (error) {
        res.status(500).json(error);
    }
};
exports.getEnabledClients = getEnabledClients;
const getClient = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await service.getClient(Number(id));
        res.status(200).json(result);
    }
    catch (error) {
        res.status(500).json(error);
    }
};
exports.getClient = getClient;
const postClient = async (req, res) => {
    try {
        const data = req.body;
        const result = await service.registerClient(data);
        res.status(200).json(result);
    }
    catch (error) {
        res.status(500).json(error);
    }
};
exports.postClient = postClient;
const putClient = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const result = await service.updateClient(Number(id), data);
        res.status(200).json(result);
    }
    catch (error) {
        res.status(500).json(error);
    }
};
exports.putClient = putClient;
const disableClient = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await service.disableClient(Number(id));
        res.status(200).json(result);
    }
    catch (error) {
        res.status(500).json(error);
    }
};
exports.disableClient = disableClient;
const enableClient = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await service.enableClient(Number(id));
        res.status(200).json(result);
    }
    catch (error) {
        res.status(500).json(error);
    }
};
exports.enableClient = enableClient;
