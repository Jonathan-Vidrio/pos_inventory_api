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
exports.enableJob = exports.disableJob = exports.putJob = exports.postJob = exports.getJobById = exports.getEnabledJobs = exports.getAllJobs = void 0;
const service = __importStar(require("../services/job"));
const getAllJobs = async (req, res) => {
    try {
        const result = await service.getJobs();
        res.send(result);
    }
    catch (e) {
        res.status(500).send("ERROR_GET_ALL_JOBS");
    }
};
exports.getAllJobs = getAllJobs;
const getEnabledJobs = async (req, res) => {
    try {
        const result = await service.getEnabledJobs();
        res.send(result);
    }
    catch (e) {
        res.status(500).send("ERROR_GET_ENABLED_JOBS");
    }
};
exports.getEnabledJobs = getEnabledJobs;
const getJobById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await service.getJob(Number(id));
        res.send(result);
    }
    catch (e) {
        res.status(500).send("ERROR_GET_JOB_BY_ID");
    }
};
exports.getJobById = getJobById;
const postJob = async (req, res) => {
    try {
        const { body } = req;
        const result = await service.registerJob(body);
        res.send(result);
    }
    catch (e) {
        res.status(500).send("ERROR_POST_JOB");
    }
};
exports.postJob = postJob;
const putJob = async (req, res) => {
    try {
        const { body } = req;
        const { id } = req.params;
        const result = await service.updateJob(Number(id), body);
        res.send(result);
    }
    catch (e) {
        res.status(500).send("ERROR_PUT_JOB");
    }
};
exports.putJob = putJob;
const disableJob = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await service.disableJob(Number(id));
        res.send(result);
    }
    catch (e) {
        res.status(500).send("ERROR_DISABLE_JOB");
    }
};
exports.disableJob = disableJob;
const enableJob = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await service.enableJob(Number(id));
        res.send(result);
    }
    catch (e) {
        res.status(500).send("ERROR_ENABLE_JOB");
    }
};
exports.enableJob = enableJob;
