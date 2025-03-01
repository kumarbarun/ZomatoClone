import dotenv from 'dotenv';
dotenv.config()

import connectionDB from './config/db.js';
import bodyParser from 'body-parser';
import cors from 'cors';

import { registerUser, getAllUsers } from './controllers/userSignup.js';
import { loggedIn } from './controllers/userLogin.js';

// intialize express
import express from 'express';
const app = express();

//mongoDB connection
connectionDB();

// cross origin resource sharing
app.use(cors())

//body parser file
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.use('/api/getData', getAllUsers);
app.use('/api/signup', registerUser);
app.use('/api/login', loggedIn);
// app.use('/contact', contactUs);


app.get("/", (req, res, next) => (
    res.status(200).send(
        {msg:"this is get request"}
    )
))

export default app;