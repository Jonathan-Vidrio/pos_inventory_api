import { Request, Response } from 'express';
import * as service from "../services/category";

const getAllCategories = async (req: Request, res: Response) => {
    try {
        const result = await service.getCategories();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send(
            {
                error: "ERROR_GET_ALL_CATEGORIES",
                message: error
            }
        );
    }
}

const getEnabledCategories = async (req: Request, res: Response) => {
    try {
        const result = await service.getEnabledCategories();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send(
            {
                error: "ERROR_GET_ENABLED_CATEGORIES",
                message: error
            }
        );
    }
}

const getCategoryById = async (req: Request, res: Response) => {
    try {
        const { _id } = req.params;
        const result = await service.getCategory(_id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send(
            {
                error: "ERROR_GET_CATEGORY_BY_ID",
                message: error
            }
        );
    }
}

const postCategory = async (req: Request, res: Response) => {
    try {
        const { body } = req;
        const result = await service.registerCategory(body);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send(
            {
                error: "ERROR_POST_CATEGORY",
                message: error
            }
        );
    }
}

const putCategory = async (req: Request, res: Response) => {
    try {
        const { body } = req;
        const { _id } = req.params;
        const result = await service.updateCategory(_id, body);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send(
            {
                error: "ERROR_PUT_CATEGORY",
                message: error
            }
        );
    }
}

const disableCategory = async (req: Request, res: Response) => {
    try {
        const { _id } = req.params;
        const result = await service.disableCategory(_id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send(
            {
                error: "ERROR_DISABLE_CATEGORY",
                message: error
            }
        );
    }
}

const enableCategory = async (req: Request, res: Response) => {
    try {
        const { _id } = req.params;
        const result = await service.enableCategory(_id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send(
            {
                error: "ERROR_ENABLE_CATEGORY",
                message: error
            }
        );
    }
}

export {
    getAllCategories,
    getEnabledCategories,
    getCategoryById,
    postCategory,
    putCategory,
    disableCategory,
    enableCategory,
}