const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
const connectDB = async (req,res)=>{
    try {
    await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log(error.message);
        return res
      .status(500).json(error.message);
    }
};

module.exports = connectDB;