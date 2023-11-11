"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const constants_1 = require("./utils/constants");
const mongoDb_1 = require("./config/mongoose/mongoDb");
const routes_1 = __importDefault(require("./api/routes"));
const app = (0, express_1.default)();
(0, mongoDb_1.connectMongoDb)().then(() => {
    console.log("MongoDB is connected");
});
// Middlewares
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Routes
app.use("/", routes_1.default);
app.listen(constants_1.PORT, () => {
    console.log(`Server is running on port ${constants_1.PORT}`);
});
