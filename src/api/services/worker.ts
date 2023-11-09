import IWorker from "../interfaces/worker";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getWorkers = async () => {
    const result = await prisma.worker.findMany();
    return result;
}

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
}

const getWorker = async (id: number) => {
    const result = await prisma.worker.findUnique({
        where: {
            id: id
        },
        include: {
            job: true
        }
    });
    return result;
}

const registerWorker = async (data: IWorker) => {
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
}

const updateWorker = async (id: number, data: IWorker) => {
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
}

const disableWorker = async (id: number) => {
    const result = await prisma.worker.update({
        where: {
            id: id
        },
        data: {
            status: 0
        }
    });
    return result;
}

const enableWorker = async (id: number) => {
    const result = await prisma.worker.update({
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
    getWorkers,
    getEnabledWorkers,
    getWorker,
    registerWorker,
    updateWorker,
    disableWorker,
    enableWorker,
}