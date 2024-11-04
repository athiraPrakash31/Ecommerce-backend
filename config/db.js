import mongoose from "mongoose";
import 'dotenv/config'

const connectionString = process.env.DATABASE;

const db= mongoose.connect(connectionString).then(() => {
    console.log("Mongodb atlas connection established");
})
.catch((error) => {
    console.log("Mongodb atlas connection error", error);
})

export default db;