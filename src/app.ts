import express from "express"
import cors from "cors";

import { PORT } from "./utils/constants"
import { connectMongoDb } from "./config/mongoose/mongoDb";
import router from "./api/routes";

const app = express();

connectMongoDb().then(() => {
    console.log("MongoDB is connected");
});

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})