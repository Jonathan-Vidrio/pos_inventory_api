import { Schema, model } from 'mongoose';
import IProvider from "../interfaces/provider";

const ProviderSchema = new Schema<IProvider>(
    {
        name: {
            type: String,
            required: true
        },
        firstSurname: {
            type: String,
            required: true
        },
        secondSurname: {
            type: String
        },
        phone: {
            type: String,
            required: true
        },
        status: {
            type: Number,
            default: 1
        }
    });

const ProviderModel = model('Provider', ProviderSchema);

export default ProviderModel;