import { config } from "dotenv";

config();

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017";

const MARIADB_URI = process.env.MARIADB_URI || "mariadb://localhost:3306";

const PORT = process.env.PORT || 3000;

export {
    MONGO_URI,
    MARIADB_URI,
    PORT
}