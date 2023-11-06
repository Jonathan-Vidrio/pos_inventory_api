import { Router } from "express";
import * as controller from "../controllers/provider";

const router = Router();

router.get("/all", controller.getAllProviders);

router.get("/", controller.getEnabledProviders);

router.get("/:id", controller.getProvider);

router.post("/", controller.postProvider);

router.put("/:id", controller.putProvider);

router.put("/disable/:id", controller.disableProvider);

router.put("/enable/:id", controller.enableProvider);

export {
    router,
}