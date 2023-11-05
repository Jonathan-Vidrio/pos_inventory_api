import { Router } from "express";
import * as controller from "../controllers/job";

const router = Router();

router.get("/", controller.getAllJobs);

router.get("/:id", controller.getJobById);

router.post("/", controller.postJob);

export {
    router,
}