import mongoose from "mongoose";
import { MONGO_URI } from "../../utils/constants";

const connectMongoDb = async () => {
    try {
        await mongoose.connect(MONGO_URI);
    } catch (e) {
        console.log(e);
    }
}

export {
    connectMongoDb
}