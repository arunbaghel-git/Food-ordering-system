import mongoose from "mongoose";
const connectDB = async ()=>{
    mongoose.connection.on('connected',()=>{
        console.log('db connected')
    })
        // Connect to MongoDB using URI stored in environment variables.
    await mongoose.connect(`${process.env.MONGODB_URI}/foodappdb`); 
}

export default connectDB