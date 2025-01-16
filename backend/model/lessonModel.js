import mongoose from 'mongoose';

const flashcardSchema = new mongoose.Schema({
  question: String,
  answer: String,
});

const quizSchema = new mongoose.Schema({
  question: String,
  options: [String],
  correctAnswer: String,
});

const lessonSchema = new mongoose.Schema({
  title: String,
  content: String,
  flashcards: [flashcardSchema],
  quiz: [quizSchema],
});


export default mongoose.model('Lesson', lessonSchema);
