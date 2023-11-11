"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fs_1 = require("fs");
const PATH_ROUTER = `${__dirname}`;
const router = (0, express_1.Router)();
(0, fs_1.readdirSync)(PATH_ROUTER).forEach((file) => {
    if (file === 'index.js')
        return;
    const routerFile = require(`./${file}`);
    router.use(`/${file.split('.')[0]}`, routerFile.router);
});
exports.default = router;
