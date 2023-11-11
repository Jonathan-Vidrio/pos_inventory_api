import { Request, Response } from "express";
import * as service from "../services/job";

const getAllJobs = async (req: Request, res: Response) => {
    try {
        const result = await service.getJobs();
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(
            {
                error: "ERROR_GET_ALL_JOBS" ,
            message: error
            }
        );
    }
}

const getEnabledJobs = async (req: Request, res: Response) => {
    try {
        const result = await service.getEnabledJobs();
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(
            {
                error: "ERROR_GET_ENABLED_JOBS",
                message: error
            }
        );
    }
}

const getJobById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await service.getJob(Number(id));
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(
            {
                error: "ERROR_GET_JOB_BY_ID",
                message: error
            }
        );
    }
}

const postJob = async (req: Request, res: Response) => {
    try {
        const { body } = req;
        const result = await service.registerJob(body);
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(
            {
                error: "ERROR_POST_JOB",
                message: error
            }
        );
    }
}

const putJob = async (req: Request, res: Response) => {
    try {
        const { body } = req;
        const { id } = req.params;
        const result = await service.updateJob(Number(id), body);
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(
            {
                error: "ERROR_PUT_JOB",
                message: error
            }
        );
    }
}

const disableJob = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await service.disableJob(Number(id));
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(
            {
                error: "ERROR_DISABLE_JOB",
                message: error
            }
        );
    }
}

const enableJob = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await service.enableJob(Number(id));
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(
            {
                error: "ERROR_ENABLE_JOB",
                message: error
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