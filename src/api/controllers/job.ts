import { Request, Response } from "express";
import * as service from "../services/job";

const getAllJobs = async (req: Request, res: Response) => {
    try {
        const result = await service.getJobs();
        res.send(result);
    } catch (e) {
        res.status(500).send("ERROR_GET_ALL_JOBS");
    }
}

const getEnabledJobs = async (req: Request, res: Response) => {
    try {
        const result = await service.getEnabledJobs();
        res.send(result);
    } catch (e) {
        res.status(500).send("ERROR_GET_ENABLED_JOBS");
    }
}

const getJobById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await service.getJob(Number(id));
        res.send(result);
    } catch (e) {
        res.status(500).send("ERROR_GET_JOB_BY_ID");
    }
}

const postJob = async (req: Request, res: Response) => {
    try {
        const { body } = req;
        const result = await service.registerJob(body);
        res.send(result);
    } catch (e) {
        res.status(500).send("ERROR_POST_JOB");
    }
}

const putJob = async (req: Request, res: Response) => {
    try {
        const { body } = req;
        const { id } = req.params;
        const result = await service.updateJob(Number(id), body);
        res.send(result);
    } catch (e) {
        res.status(500).send("ERROR_PUT_JOB");
    }
}

const disableJob = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await service.disableJob(Number(id));
        res.send(result);
    } catch (e) {
        res.status(500).send("ERROR_DISABLE_JOB");
    }
}

const enableJob = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await service.enableJob(Number(id));
        res.send(result);
    } catch (e) {
        res.status(500).send("ERROR_ENABLE_JOB");
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