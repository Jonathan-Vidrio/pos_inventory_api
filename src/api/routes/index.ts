import { Router } from 'express';
import { readdirSync } from 'fs';

const PATH_ROUTER = `${__dirname}`;
const router = Router();

readdirSync(PATH_ROUTER).forEach((file) => {
    if (file === 'index.ts') return;
    const routerFile = require(`./${file}`);
    router.use(`/${file.split('.')[0]}`, routerFile.router);
    console.log(`[INFO] Load router ${file}`);
});

export default router;