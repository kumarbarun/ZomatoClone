import mongoose from 'mongoose';

const connectionDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB connected Successfully");
        
    } catch(error) {
        console.error("MongoDB Connection Failed.", error.message);
        // process.exit(1);
    }
}

export default connectionDB;