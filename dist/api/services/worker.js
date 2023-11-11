"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enableWorker = exports.disableWorker = exports.updateWorker = exports.registerWorker = exports.getWorker = exports.getEnabledWorkers = exports.getWorkers = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getWorkers = async () => {
    const result = await prisma.worker.findMany();
    return result;
};
exports.getWorkers = getWorkers;
const getEnabledWorkers = async () => {
    const result = await prisma.worker.findMany({
        where: {
            status: 1
        },
        include: {
            job: true
        }
    });
    return result;
};
exports.getEnabledWorkers = getEnabledWorkers;
const getWorker = async (id) => {
    const result = await prisma.worker.findUnique({
        where: {
            id: id
        },
        include: {
            job: true
        }
    });
    return result;
};
exports.getWorker = getWorker;
const registerWorker = async (data) => {
    const result = await prisma.worker.create({
        data: {
            name: data.name,
            firstSurname: data.firstSurname,
            secondSurname: data.secondSurname ?? "",
            jobId: data.job,
            status: data.status ?? 1,
        }
    });
    return result;
};
exports.registerWorker = registerWorker;
const updateWorker = async (id, data) => {
    const result = await prisma.worker.update({
        where: {
            id: id
        },
        data: {
            name: data.name,
            firstSurname: data.firstSurname,
            secondSurname: data.secondSurname ?? "",
            jobId: data.job,
            status: data.status ?? 1,
        }
    });
    return result;
};
exports.updateWorker = updateWorker;
const disableWorker = async (id) => {
    const result = await prisma.worker.update({
        where: {
            id: id
        },
        data: {
            status: 0
        }
    });
    return result;
};
exports.disableWorker = disableWorker;
const enableWorker = async (id) => {
    const result = await prisma.worker.update({
        where: {
            id: id
        },
        data: {
            status: 1
        }
    });
    return result;
};
exports.enableWorker = enableWorker;
