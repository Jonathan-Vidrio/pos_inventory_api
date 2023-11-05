import IJob from "../interfaces/job";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getJobs = async () => {
    const result = await prisma.job.findMany({});
    return result;
}

const getJob = async (id: number) => {
    const result = await prisma.job.findUnique({
        where: {
            id: id
        }
    });
    return result;
}

const registerJob = async (data: IJob) => {
    const result = await prisma.job.create({
        data: {
            name: data.name,
            description: data.description,
            status: 1
        }
    });
    return result;
}

const updateJob = async (id: number, data: IJob) => {
    const result = await prisma.job.update({
        where: {
            id: id
        },
        data: {
            name: data.name,
            description: data.description
        }
    });
    return result;
}

const disableJob = async (id: number) => {
    const result = await prisma.job.update({
        where: {
            id: id
        },
        data: {
            status: 0
        }
    });
    return result;
}

export {
    getJobs,
    getJob,
    registerJob,
    updateJob,
    disableJob
}