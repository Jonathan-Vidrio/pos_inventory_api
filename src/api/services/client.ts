import IClient from "../interfaces/client";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getClients = async () => {
    const result = await prisma.client.findMany({});
    return result;
}

const getEnabledClients = async () => {
    const result = await prisma.client.findMany({
        where: {
            status: 1
        }
    });
    return result;
}

const getClient = async (id: number) => {
    const result = await prisma.client.findUnique({
        where: {
            id: id
        }
    });
    return result;
}

const registerClient = async (data: IClient) => {
    const result = await prisma.client.create({
        data: {
            name: data.name,
            firstSurname: data.firstSurname,
            secondSurname: data.secondSurname ?? "",
            address: data.address,
            phone: data.phone,
            status: data.status ?? 1,
        }
    });
    return result;
}

const updateClient = async (id: number, data: IClient) => {
    const result = await prisma.client.update({
        where: {
            id: id
        },
        data: {
            name: data.name,
            firstSurname: data.firstSurname,
            secondSurname: data.secondSurname ?? "",
            address: data.address,
            phone: data.phone,
            status: data.status ?? 1,
        }
    });
    return result;
}

const disableClient = async (id: number) => {
    const result = await prisma.client.update({
        where: {
            id: id
        },
        data: {
            status: 0
        }
    });
    return result;
}

const enableClient = async (id: number) => {
    const result = await prisma.client.update({
        where: {
            id: id
        },
        data: {
            status: 1
        }
    });
    return result;
}

export {
    getClients,
    getEnabledClients,
    getClient,
    registerClient,
    updateClient,
    disableClient,
    enableClient
}