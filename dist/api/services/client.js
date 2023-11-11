"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enableClient = exports.disableClient = exports.updateClient = exports.registerClient = exports.getClient = exports.getEnabledClients = exports.getClients = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getClients = async () => {
    const result = await prisma.client.findMany({});
    return result;
};
exports.getClients = getClients;
const getEnabledClients = async () => {
    const result = await prisma.client.findMany({
        where: {
            status: 1
        }
    });
    return result;
};
exports.getEnabledClients = getEnabledClients;
const getClient = async (id) => {
    const result = await prisma.client.findUnique({
        where: {
            id: id
        }
    });
    return result;
};
exports.getClient = getClient;
const registerClient = async (data) => {
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
};
exports.registerClient = registerClient;
const updateClient = async (id, data) => {
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
};
exports.updateClient = updateClient;
const disableClient = async (id) => {
    const result = await prisma.client.update({
        where: {
            id: id
        },
        data: {
            status: 0
        }
    });
    return result;
};
exports.disableClient = disableClient;
const enableClient = async (id) => {
    const result = await prisma.client.update({
        where: {
            id: id
        },
        data: {
            status: 1
        }
    });
    return result;
};
exports.enableClient = enableClient;
