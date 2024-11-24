import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        // Ensure that process.env.MONGODB_URI is set and valid
        if (!process.env.MONGODB_URI) {
            console.error("MongoDB URI is missing in environment variables!");
            process.exit(1);
        }

        const connection = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        
        // Log connection details
        console.log(`MongoDB connected successfully! DB Host: ${connection.connection.host}`);
    } catch (error) {
        // More detailed error message
        console.error("MongoDB connection error:", error.message);
        process.exit(1);
    }
};

export default connectDB;
