import { Router } from "express";
import * as controller from "../controllers/worker";

const router = Router();

router.get("/all", controller.getWorkers);

router.get("/", controller.getEnabledWorkers);

router.get("/:id", controller.getWorker);

router.post("/", controller.postWorker);

router.put("/:id", controller.putWorker);

router.delete("/:id", controller.disableWorker);

router.patch("/:id", controller.enableWorker);

export default router;