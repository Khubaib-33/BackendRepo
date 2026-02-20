import "dotenv/config"
import mongoose from "mongoose";
import { DB_NAME } from "../constant.js"  

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connectDB;