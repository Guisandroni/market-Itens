import mongoose from "mongoose";

export const conectDB = async () => {

    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Mongodb Connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(`Error:${error.message}`);

        process.exit(1)
    }
}