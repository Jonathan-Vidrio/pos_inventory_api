import { Router } from "express";
import * as controller from "../controllers/category";

const router = Router();

router.get("/all", controller.getAllCategories);

router.get("/", controller.getEnabledCategories);

router.get("/:_id", controller.getCategoryById);

router.post("/", controller.postCategory);

router.put("/:_id", controller.putCategory);

router.put("/disable/:_id", controller.disableCategory);

router.put("/enable/:_id", controller.enableCategory);

export {
    router,
}