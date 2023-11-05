import { Document, Types } from "mongoose";

interface IWorker extends Document {
    name: string,
    firstSurname: string,
    secondSurname?: string,
    salary: number,
    job: Types.ObjectId,
    status?: number,
}

export default IWorker;