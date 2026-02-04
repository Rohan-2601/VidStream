import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export const connectDB= async()=>{
  try{
   await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);
   console.log("Database connected");

  }
  catch(err){
    console.log(" mongo connection ERROR",err);
    process.exit(1);
  }
}