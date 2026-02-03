import mongoose from "mongoose";
import { DB_NAME } from "../constants";

export const connectDB= async()=>{
  try{
   await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);
   console.log("Database connected");

  }
  catch(err){
    console.log("ERROR",err);
    process.exit(1);
  }
}