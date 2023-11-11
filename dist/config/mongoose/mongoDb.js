"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectMongoDb = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const constants_1 = require("../../utils/constants");
const connectMongoDb = async () => {
    try {
        await mongoose_1.default.connect(constants_1.MONGO_URI);
    }
    catch (e) {
        console.log(e);
    }
};
exports.connectMongoDb = connectMongoDb;
