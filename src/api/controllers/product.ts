import { Request, Response } from "express";
import * as service from "../services/product";

const getAllProducts = async (req: Request, res: Response) => {
    try {
        const result = await service.getProducts();
        res.send(result);
    } catch (e) {
        res.send('ERROR_GET_ALL_PRODUCTS');
    }
}

const getEnabledProducts = async (req: Request, res: Response) => {
    try {
        const result = await service.getEnabledProducts();
        res.send(result);
    } catch (e) {
        res.send('ERROR_GET_ENABLED_PRODUCTS');
    }
}

const getProductById = async (req: Request, res: Response) => {
    try {
        const { _id } = req.params;
        const result = await service.getProduct(_id);
        res.send(result);
    } catch (e) {
        res.send('ERROR_GET_PRODUCT_BY_ID');
    }
}

const postProduct = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const result = await service.registerProduct(data);
        res.send(result);
    } catch (e) {
        res.send('ERROR_POST_PRODUCT');
    }
}

const putProduct = async (req: Request, res: Response) => {
    try {
        const { _id } = req.params;
        const data = req.body;
        const result = await service.updateProduct(_id, data);
        res.send(result);
    } catch (e) {
        res.send('ERROR_PUT_PRODUCT');
    }
}

const disableProduct = async (req: Request, res: Response) => {
    try {
        const { _id } = req.params;
        const result = await service.disableProduct(_id);
        res.send(result);
    } catch (e) {
        res.send('ERROR_DISABLE_PRODUCT');
    }
}

const enableProduct = async (req: Request, res: Response) => {
    try {
        const { _id } = req.params;
        const result = await service.enableProduct(_id);
        res.send(result);
    } catch (e) {
        res.send('ERROR_ENABLE_PRODUCT');
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