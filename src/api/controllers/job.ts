import { Request, Response } from "express";
import * as service from "../services/job";

const getAllJobs = async (req: Request, res: Response) => {
    try {
        const result = await service.getJobs();
        res.send(result);
    } catch (e) {
        res.status(500).send(
            {
                error: "ERROR_GET_ALL_JOBS" ,
            message: e
            }
        );
    }
}

const getEnabledJobs = async (req: Request, res: Response) => {
    try {
        const result = await service.getEnabledJobs();
        res.send(result);
    } catch (e) {
        res.status(500).send(
            {
                error: "ERROR_GET_ENABLED_JOBS",
                message: e
            }
        );
    }
}

const getJobById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await service.getJob(Number(id));
        res.send(result);
    } catch (e) {
        res.status(500).send(
            {
                error: "ERROR_GET_JOB_BY_ID",
                message: e
            }
        );
    }
}

const postJob = async (req: Request, res: Response) => {
    try {
        const { body } = req;
        const result = await service.registerJob(body);
        res.send(result);
    } catch (e) {
        res.status(500).send(
            {
                error: "ERROR_POST_JOB",
                message: e
            }
        );
    }
}

const putJob = async (req: Request, res: Response) => {
    try {
        const { body } = req;
        const { id } = req.params;
        const result = await service.updateJob(Number(id), body);
        res.send(result);
    } catch (e) {
        res.status(500).send(
            {
                error: "ERROR_PUT_JOB",
                message: e
            }
        );
    }
}

const disableJob = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await service.disableJob(Number(id));
        res.send(result);
    } catch (e) {
        res.status(500).send(
            {
                error: "ERROR_DISABLE_JOB",
                message: e
            }
        );
    }
}

const enableJob = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await service.enableJob(Number(id));
        res.send(result);
    } catch (e) {
        res.status(500).send(
            {
                error: "ERROR_ENABLE_JOB",
                message: e
            }
        );
    }

}

export {
    getAllJobs,
    getEnabledJobs,
    getJobById,
    postJob,
    putJob,
    disableJob,
    enableJob
}