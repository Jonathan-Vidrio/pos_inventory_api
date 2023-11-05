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

export {
    getAllCategories,
    getCategoryById,
    postCategory,
}