import mongoose from "mongoose";
const connectDB = async ()=>{
    mongoose.connection.on('connected',()=>{
        console.log('db connected')
    })
    await mongoose.connect(`${process.env.MONGODB_URI}/foodappdb`); 
    console.log("Connected to:", mongoose.connection.db.databaseName);
}

export default connectDB