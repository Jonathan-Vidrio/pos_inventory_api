import { Document } from "mongoose";

interface IClient extends Document {
    name: string,
    firstSurname: string,
    secondSurname?: string,
    address: string,
    phone: string,
    status?: number,
}

export default IClient;