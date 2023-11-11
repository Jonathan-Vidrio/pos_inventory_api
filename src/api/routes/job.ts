import { Router } from "express";
import * as controller from "../controllers/job";

const router = Router();

router.get("/all", controller.getAllJobs);

router.get("/", controller.getEnabledJobs);

router.get("/:id", controller.getJobById);

router.post("/", controller.postJob);

router.put("/:id", controller.putJob);

router.delete("/:id", controller.disableJob);

router.patch("/:id", controller.enableJob);

export default router;