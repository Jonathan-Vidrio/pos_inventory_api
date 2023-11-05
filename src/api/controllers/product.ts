import { Request, Response } from "express";

const getAllProducts = async (req: Request, res: Response) => {
    try {
    } catch (e) {
        res.send('ERROR_GET_ALL_PRODUCTS');
    }
}

const getProductById = async (req: Request, res: Response) => {
    try {
    } catch (e) {
        res.send('ERROR_GET_PRODUCT_BY_ID');
    }
}

const postProduct = async (req: Request, res: Response) => {
    try {
    } catch (e) {
        res.send('ERROR_POST_PRODUCT');
    }
}

const putProduct = async (req: Request, res: Response) => {
    try {
    } catch (e) {
        res.send('ERROR_PUT_PRODUCT');
    }
}

const disableProduct = async (req: Request, res: Response) => {
    try {
    } catch (e) {
        res.send('ERROR_DISABLE_PRODUCT');
    }
}

const deleteProduct = async (req: Request, res: Response) => {
    try {
        res.send('deleteProduct');
    } catch (e) {
        res.send('ERROR_DELETE_PRODUCT');
    }
}