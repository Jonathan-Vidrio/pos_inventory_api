import { Request, Response } from 'express';
import * as service from "../services/category";

const getAllCategories = async (req: Request, res: Response) => {
    try {
        const result = await service.getCategories();
        res.send(result);
    } catch (e) {
        res.status(500).send("ERROR_GET_ALL_CATEGORIES");
    }
}

const getEnabledCategories = async (req: Request, res: Response) => {
    try {
        const result = await service.getEnabledCategories();
        res.send(result);
    } catch (e) {
        res.status(500).send("ERROR_GET_ENABLED_CATEGORIES");
    }
}

const getCategoryById = async (req: Request, res: Response) => {
    try {
        const { _id } = req.params;
        const result = await service.getCategory(_id);
        res.send(result);
    } catch (e) {
        res.status(500).send("ERROR_GET_CATEGORY_BY_ID");
    }
}

const postCategory = async (req: Request, res: Response) => {
    try {
        const { body } = req;
        const result = await service.registerCategory(body);
        res.send(result);
    } catch (e) {
        res.status(500).send("ERROR_POST_CATEGORY");
    }
}

const putCategory = async (req: Request, res: Response) => {
    try {
        const { body } = req;
        const { _id } = req.params;
        const result = await service.updateCategory(_id, body);
        res.send(result);
    } catch (e) {
        res.status(500).send("ERROR_PUT_CATEGORY");
    }
}

const disableCategory = async (req: Request, res: Response) => {
    try {
        const { _id } = req.params;
        const result = await service.disableCategory(_id);
        res.send(result);
    } catch (e) {
        res.status(500).send("ERROR_DISABLE_CATEGORY");
    }
}

const enableCategory = async (req: Request, res: Response) => {
    try {
        const { _id } = req.params;
        const result = await service.enableCategory(_id);
        res.send(result);
    } catch (e) {
        res.status(500).send("ERROR_ENABLE_CATEGORY");
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