import express from "express";
import {getData} from "../controller/news-controller.js";

const route=express.Router();

route.get('/news',getData);



export default route;


// ,getData