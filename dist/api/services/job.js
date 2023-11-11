"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enableJob = exports.disableJob = exports.updateJob = exports.registerJob = exports.getJob = exports.getEnabledJobs = exports.getJobs = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getJobs = async () => {
    const result = await prisma.job.findMany({});
    return result;
};
exports.getJobs = getJobs;
const getEnabledJobs = async () => {
    const result = await prisma.job.findMany({
        where: {
            status: 1
        }
    });
    return result;
};
exports.getEnabledJobs = getEnabledJobs;
const getJob = async (id) => {
    const result = await prisma.job.findUnique({
        where: {
            id: id
        }
    });
    return result;
};
exports.getJob = getJob;
const registerJob = async (data) => {
    const result = await prisma.job.create({
        data: {
            name: data.name,
            description: data.description,
            salary: data.salary,
            status: data.status ?? 1,
        }
    });
    return result;
};
exports.registerJob = registerJob;
const updateJob = async (id, data) => {
    const result = await prisma.job.update({
        where: {
            id: id
        },
        data: {
            name: data.name,
            description: data.description,
            salary: data.salary,
        }
    });
    return result;
};
exports.updateJob = updateJob;
const disableJob = async (id) => {
    const result = await prisma.job.update({
        where: {
            id: id
        },
        data: {
            status: 0
        }
    });
    return result;
};
exports.disableJob = disableJob;
const enableJob = async (id) => {
    const result = await prisma.job.update({
        where: {
            id: id
        },
        data: {
            status: 1
        }
    });
    return result;
};
exports.enableJob = enableJob;
