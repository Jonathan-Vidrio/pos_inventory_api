import IProvider from "../interfaces/provider";
import ProviderModel from "../models/provider";

const getProviders = async () => {
    const result = await ProviderModel.find({});
    return result;
}

const getEnabledProviders = async () => {
    const result = await ProviderModel.find({ status: 1 });
    return result;
}

const getProvider = async (_id: string) => {
    const result = await ProviderModel.findOne({ _id: _id });
    return result;
}

const registerProvider = async (data: IProvider) => {
    const result = await ProviderModel.create(data);
    return result;
}

const updateProvider = async (_id: string, data: IProvider) => {
    const result = await ProviderModel.findByIdAndUpdate(
        { _id: _id },
        data,
        { new: true }
    );
    return result;
}

const disableProvider = async (_id: string) => {
    const result = await ProviderModel.findByIdAndUpdate(
        { _id: _id },
        { status: 0 },
        { new: true }
    );
    return result;
}

const enableProvider = async (_id: string) => {
    const result = await ProviderModel.findByIdAndUpdate(
        { _id: _id },
        { status: 1 },
        { new: true }
    );
    return result;
}

export {
    getProviders,
    getEnabledProviders,
    getProvider,
    registerProvider,
    updateProvider,
    disableProvider,
    enableProvider,
}
