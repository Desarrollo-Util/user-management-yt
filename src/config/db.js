import mongoose from 'mongoose';

const connectDB = (url) =>
    mongoose.connect(url).then(() => console.log('Database connected'));

export default connectDB;
