import { Router } from "express";
import * as controller from "../controllers/job";

const router = Router();

router.get("/all", controller.getAllJobs);

router.get("/", controller.getEnabledJobs);

router.get("/:id", controller.getJobById);

router.post("/", controller.postJob);

router.put("/:id", controller.putJob);

router.put("/disable/:id", controller.disableJob);

router.put("/enable/:id", controller.enableJob);

export {
    router,
}