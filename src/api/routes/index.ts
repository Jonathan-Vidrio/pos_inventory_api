import { Router } from 'express';
import { readdirSync } from 'fs';

const PATH_ROUTER = `${__dirname}`;
const router = Router();

readdirSync(PATH_ROUTER).forEach((file) => {
    if (file === 'index.ts') return;
    const routerFile = require(`./${file}`);
    router.use(`/${file.split('.')[0]}`, routerFile.router);
});

export default router;