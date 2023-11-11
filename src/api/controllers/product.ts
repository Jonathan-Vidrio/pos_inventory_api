import { Request, Response } from "express";
import * as service from "../services/product";

const getAllProducts = async (req: Request, res: Response) => {
    try {
        const result = await service.getProducts();
        res.status(200).send(result);
    } catch (e) {
        res.status(500).send(
            {
                error: "ERROR_GET_ALL_PRODUCTS",
                message: e
            }
        );
    }
}

const getEnabledProducts = async (req: Request, res: Response) => {
    try {
        const result = await service.getEnabledProducts();
        res.status(200).send(result);
    } catch (e) {
        res.status(500).send(
            {
                error: "ERROR_GET_ENABLED_PRODUCTS",
                message: e
            }
        );
    }
}

const getProductById = async (req: Request, res: Response) => {
    try {
        const { _id } = req.params;
        const result = await service.getProduct(_id);
        res.status(200).send(result);
    } catch (e) {
        res.status(500).send(
            {
                error: "ERROR_GET_PRODUCT_BY_ID",
                message: e
            }
        );
    }
}

const postProduct = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const result = await service.registerProduct(data);
        res.status(200).send(result);
    } catch (e) {
        res.status(500).send(
            {
                error: "ERROR_POST_PRODUCT",
                message: e
            }
        );
    }
}

const putProduct = async (req: Request, res: Response) => {
    try {
        const { _id } = req.params;
        const data = req.body;
        const result = await service.updateProduct(_id, data);
        res.status(200).send(result);
    } catch (e) {
        res.status(500).send(
            {
                error: "ERROR_PUT_PRODUCT",
                message: e
            }
        );
    }
}

const disableProduct = async (req: Request, res: Response) => {
    try {
        const { _id } = req.params;
        const result = await service.disableProduct(_id);
        res.status(200).send(result);
    } catch (e) {
        res.status(500).send(
            {
                error: "ERROR_DISABLE_PRODUCT",
                message: e
            }
        );
    }
}

const enableProduct = async (req: Request, res: Response) => {
    try {
        const { _id } = req.params;
        const result = await service.enableProduct(_id);
        res.status(200).send(result);
    } catch (e) {
        res.status(500).send(
            {
                error: "ERROR_ENABLE_PRODUCT",
                message: e
            }
        );
    }
}

export {
    getAllProducts,
    getEnabledProducts,
    getProductById,
    postProduct,
    putProduct,
    disableProduct,
    enableProduct
}