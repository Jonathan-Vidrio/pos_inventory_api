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
exports.enableWorker = exports.disableWorker = exports.putWorker = exports.postWorker = exports.getWorker = exports.getEnabledWorkers = exports.getWorkers = void 0;
const workerService = __importStar(require("../services/worker"));
const getWorkers = async (req, res) => {
    try {
        const result = await workerService.getWorkers();
        res.status(200).json(result);
    }
    catch (error) {
        res.status(500).json(error);
    }
};
exports.getWorkers = getWorkers;
const getEnabledWorkers = async (req, res) => {
    try {
        const result = await workerService.getEnabledWorkers();
        res.status(200).json(result);
    }
    catch (error) {
        res.status(500).json(error);
    }
};
exports.getEnabledWorkers = getEnabledWorkers;
const getWorker = async (req, res) => {
    try {
        const result = await workerService.getWorker(parseInt(req.params.id));
        res.status(200).json(result);
    }
    catch (error) {
        res.status(500).json(error);
    }
};
exports.getWorker = getWorker;
const postWorker = async (req, res) => {
    try {
        const result = await workerService.registerWorker(req.body);
        res.status(200).json(result);
    }
    catch (error) {
        res.status(500).json(error);
    }
};
exports.postWorker = postWorker;
const putWorker = async (req, res) => {
    try {
        const result = await workerService.updateWorker(parseInt(req.params.id), req.body);
        res.status(200).json(result);
    }
    catch (error) {
        res.status(500).json(error);
    }
};
exports.putWorker = putWorker;
const disableWorker = async (req, res) => {
    try {
        const result = await workerService.disableWorker(parseInt(req.params.id));
        res.status(200).json(result);
    }
    catch (error) {
        res.status(500).json(error);
    }
};
exports.disableWorker = disableWorker;
const enableWorker = async (req, res) => {
    try {
        const result = await workerService.enableWorker(parseInt(req.params.id));
        res.status(200).json(result);
    }
    catch (error) {
        res.status(500).json(error);
    }
};
exports.enableWorker = enableWorker;
