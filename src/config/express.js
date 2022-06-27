import userRouter from '#Routes/user.routes.js';
import express from 'express';

const expressApp = express();

// Middlewares
expressApp.use(express.json());

// Routes
expressApp.use('/user', userRouter);

export default expressApp;
