import { Document } from "mongoose";

interface IProvider extends Document {
    name: string,
    firstSurname: string,
    secondSurname?: string,
    phone: string,
    status?: number,
}

export default IProvider;