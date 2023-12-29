import mongoose, { mongo } from "mongoose";

const connectMongoDB = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connected to MONGODB");
    } catch (error) {
        console.log(error);
    }
}

export default connectMongoDB;