import { Document } from "mongoose";

interface IJob extends Document {
    name: string,
    description: string,
    status?: number,
}

export default IJob;