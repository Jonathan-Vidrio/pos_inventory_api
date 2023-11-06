import { Router } from "express";
import * as controller from "../controllers/product";

const router = Router();

router.get("/all", controller.getAllProducts);

router.get("/", controller.getEnabledProducts);

router.get("/:_id", controller.getProductById);

router.post("/", controller.postProduct);

router.put("/:_id", controller.putProduct);

router.put("/disable/:_id", controller.disableProduct);

router.put("/enable/:_id", controller.enableProduct);

export {
    router,
}