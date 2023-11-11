import { Request, Response } from "express";
import * as workerService from "../services/worker";

const getWorkers = async (req: Request, res: Response) => {
    try {
        const result = await workerService.getWorkers();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send(
            {
                error: "ERROR_GET_ALL_WORKERS",
                message: error
            }
        );
    }
}

const getEnabledWorkers = async (req: Request, res: Response) => {
    try {
        const result = await workerService.getEnabledWorkers();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send(
            {
                error: "ERROR_GET_ENABLED_WORKERS",
                message: error
            }
        );
    }
}

const getWorker = async (req: Request, res: Response) => {
    try {
        const result = await workerService.getWorker(parseInt(req.params.id));
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send(
            {
                error: "ERROR_GET_WORKER_BY_ID",
                message: error
            }
        );
    }
}

const postWorker = async (req: Request, res: Response) => {
    try {
        const result = await workerService.registerWorker(req.body);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send(
            {
                error: "ERROR_POST_WORKER",
                message: error
            }
        );
    }
}

const putWorker = async (req: Request, res: Response) => {
    try {
        const result = await workerService.updateWorker(parseInt(req.params.id), req.body);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send(
            {
                error: "ERROR_PUT_WORKER",
                message: error
            }
        );
    }
}

const disableWorker = async (req: Request, res: Response) => {
    try {
        const result = await workerService.disableWorker(parseInt(req.params.id));
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send(
            {
                error: "ERROR_DISABLE_WORKER",
                message: error
            }
        );
    }
}

const enableWorker = async (req: Request, res: Response) => {
    try {
        const result = await workerService.enableWorker(parseInt(req.params.id));
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send(
            {
                error: "ERROR_ENABLE_WORKER",
                message: error
            }
        );
    }
}

export {
    getWorkers,
    getEnabledWorkers,
    getWorker,
    postWorker,
    putWorker,
    disableWorker,
    enableWorker,
}