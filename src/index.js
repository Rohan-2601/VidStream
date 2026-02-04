import dotenv from 'dotenv'
import express from 'express'
import { connectDB } from './db/db.js'
import { app } from './app.js'

dotenv.config()
const startserver=()=>{
  try{
connectDB()
  }
  catch(err){
    console.log("mongodb conn err", err);

  }
}
startserver();
app.listen(process.env.PORT,()=>{
   console.log(`app is listening`)
});

