import express from 'express';
import cors from 'cors';
import Connection from './database/db.js';
import DefaultData from './default.js';
import Route from './routes/route.js';
// import dotenv from 'dotenv';


const app=express();
// dotenv.config();

app.use(cors());
app.use("/",Route);

// const user=process.env.DB_USERNAME;
// const pass=process.env.DB_PASSWORD;

// Connection(user,pass);

const PORT=8000;

app.listen(PORT,()=>console.log("server strated at ",PORT));

DefaultData();