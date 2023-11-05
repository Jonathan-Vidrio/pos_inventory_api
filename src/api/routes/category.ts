import { Router } from "express";
import * as controller from "../controllers/category";

const router = Router();

router.get("/", controller.getAllCategories);

router.get("/:_id", controller.getCategoryById);

router.post("/", controller.postCategory);

export {
    router,
}