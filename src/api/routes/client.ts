import { Router } from "express";
import * as controller from "../controllers/client";
const router = Router();

router.get("/all", controller.getAllClients);

router.get("/", controller.getEnabledClients);

router.get("/:id", controller.getClient);

router.post("/", controller.postClient);

router.put("/:id", controller.putClient);

router.delete("/:id", controller.disableClient);

router.patch("/:id", controller.enableClient);

export {
    router,
}