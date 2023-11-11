import { Request, Response } from "express";
import * as service from "../services/client";

const getAllClients = async (req: Request, res: Response) => {
    try {
        const result = await service.getClients();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send(
            {
                error: "ERROR_GET_ALL_CLIENTS",
                message: error
            }
        );
    }
}

const getEnabledClients = async (req: Request, res: Response) => {
    try {
        const result = await service.getEnabledClients();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send(
            {
                error: "ERROR_GET_ENABLED_CLIENTS",
                message: error
            }
        );
    }
}

const getClient = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await service.getClient(Number(id));
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send(
            {
                error: "ERROR_GET_CLIENT_BY_ID",
                message: error
            }
        );
    }
}

const postClient = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const result = await service.registerClient(data);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send(
            {
                error: "ERROR_POST_CLIENT",
                message: error
            }
        );
    }
}

const putClient = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const result = await service.updateClient(Number(id), data);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send(
            {
                error: "ERROR_PUT_CLIENT",
                message: error
            }
        );
    }
}

const disableClient = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await service.disableClient(Number(id));
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send(
            {
                error: "ERROR_DISABLE_CLIENT",
                message: error
            }
        );
    }
}

const enableClient = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await service.enableClient(Number(id));
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send(
            {
                error: "ERROR_ENABLE_CLIENT",
                message: error
            }
        );
    }
}

export {
    getAllClients,
    getEnabledClients,
    getClient,
    postClient,
    putClient,
    disableClient,
    enableClient
}

