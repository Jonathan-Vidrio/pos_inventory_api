import { Request, Response } from "express";
import *  as service from "../services/provider";

const getAllProviders = async (req: Request, res: Response) => {
    try {
        const result = await service.getProviders();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send(
            {
                error: "ERROR_GET_ALL_PROVIDERS",
                message: error
            }
        );
    }
}

const getEnabledProviders = async (req: Request, res: Response) => {
    try {
        const result = await service.getEnabledProviders();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send(
            {
                error: "ERROR_GET_ENABLED_PROVIDERS",
                message: error
            }
        );
    }
}

const getProvider = async (req: Request, res: Response) => {
    try {
        const result = await service.getProvider(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send(
            {
                error: "ERROR_GET_PROVIDER_BY_ID",
                message: error
            }
        );
    }
}

const postProvider = async (req: Request, res: Response) => {
    try {
        const result = await service.registerProvider(req.body);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send(
            {
                error: "ERROR_POST_PROVIDER",
                message: error
            }
        );
    }
}

const putProvider = async (req: Request, res: Response) => {
    try {
        const result = await service.updateProvider(req.params.id, req.body);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send(
            {
                error: "ERROR_PUT_PROVIDER",
                message: error
            }
        );
    }
}

const disableProvider = async (req: Request, res: Response) => {
    try {
        const result = await service.disableProvider(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send(
            {
                error: "ERROR_DISABLE_PROVIDER",
                message: error
            }
        );
    }
}

const enableProvider = async (req: Request, res: Response) => {
    try {
        const result = await service.enableProvider(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send(
            {
                error: "ERROR_ENABLE_PROVIDER",
                message: error
            }
        );
    }
}

export {
    getAllProviders,
    getEnabledProviders,
    getProvider,
    postProvider,
    putProvider,
    disableProvider,
    enableProvider,
}