"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ProviderSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    firstSurname: {
        type: String,
        required: true
    },
    secondSurname: {
        type: String
    },
    phone: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        default: 1
    }
});
const ProviderModel = (0, mongoose_1.model)('Provider', ProviderSchema);
exports.default = ProviderModel;
