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

const getJobById = async (req: Request, res: Response) => {
    try {
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
    } catch (e) {
        res.status(500).send("ERROR_PUT_JOB");
    }
}

const deleteJob = async (req: Request, res: Response) => {
    try {
    } catch (e) {
        res.status(500).send("ERROR_DELETE_JOB");
    }
}

export {
    getAllJobs,
    getJobById,
    postJob,
    putJob,
    deleteJob
}