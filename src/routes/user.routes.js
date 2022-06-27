import { Router } from 'express';

const userRouter = Router();

userRouter.post('/register');
userRouter.post('/login');
userRouter.get('/profile');
userRouter.patch('/update-data');
userRouter.patch('/update-email');
userRouter.patch('/update-password');
userRouter.delete('/unregister');

export default userRouter;
