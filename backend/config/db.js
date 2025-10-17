import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || "mongodb+srv://birhanabate17_db_user:gz6Ce6vk3Jhohcxi@cluster0.54vurld.mongodb.net/musicapp");
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    
  } catch (error) {
    console.log(error);
    
  }
}

export default connectDB;