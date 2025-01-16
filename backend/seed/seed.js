import dotenv from 'dotenv';




dotenv.config({ path: '../.env' });

console.log(process.env.MONGO_URI); 


import mongoose from 'mongoose';
import lessonData from "./lessonData.js"
import connectDB from "../config/db.js"
import Lesson from "../model/lessonModel.js"

connectDB();


const seedDatabase = async () => {
    try {
      // Clear existing data
      await Lesson.deleteMany();
      console.log('Existing data cleared');
  
      // Insert new lessons data
      await Lesson.insertMany(lessonData);
      console.log('Database seeded with new lessons');
  
      // Close database connection gracefully
      await mongoose.connection.close();
      console.log('MongoDB connection closed');
  
      // Exit the process
      process.exit();
    } catch (err) {
      console.error('Error seeding the database: ', err);
  
      // Close database connection on error
      await mongoose.connection.close();
      console.log('MongoDB connection closed due to error');
  
      process.exit(1); // Exit with error code
    }
  };
  
  seedDatabase();
  