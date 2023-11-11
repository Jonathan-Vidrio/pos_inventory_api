import { Router } from "express";
import * as controller from "../controllers/provider";

const router = Router();

router.get("/all", controller.getAllProviders);

router.get("/", controller.getEnabledProviders);

router.get("/:id", controller.getProvider);

router.post("/", controller.postProvider);

router.put("/:id", controller.putProvider);

router.delete("/:id", controller.disableProvider);

router.patch("/:id", controller.enableProvider);

export default router;