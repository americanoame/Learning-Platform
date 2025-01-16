import Lesson from '../model/lessonModel.js';

export const getLessons = async (req, res) => {
  try {
    const lessons = await Lesson.find();
    res.json(lessons);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



// Add flashcard to a lesson
export const addFlashcard = async (req, res) => {

  const { id } = req.params;

  try {
    // Find the lesson by ID
    const lesson = await Lesson.findById(id);
    if (!lesson) return res.status(404).json({ message: 'Lesson not found' });

    // Create and add the new flashcard
    const flashcard = { question: req.body.question, answer: req.body.answer };
    lesson.flashcards.push(flashcard);

    // Save the updated lesson and return the updated lesson object
    const updatedLesson = await lesson.save();
    res.json(updatedLesson);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};







































// // Create a new lesson
// export const createLesson = async (req, res) => {
//   const { title, content, flashcards, quiz } = req.body;
//   const lesson = new Lesson({ title, content, flashcards, quiz });
//   try {
//     const newLesson = await lesson.save();
//     res.status(201).json(newLesson);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };



// // Get lesson by ID
// export const getLessonById = async (req, res) => {

//   const { id } = req.params;

//   try {
//     const lesson = await Lesson.findById(id);
//     if (!lesson) return res.status(404).json({ message: 'Get Lesson by id was not found' });
//     res.json(lesson);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };



// // Update lesson
// export const updateLesson = async (req, res) => {

//   const { id } = req.params;

//   try {
//     const lesson = await Lesson.findById(id);

//     if (!lesson) return res.status(404).json({ message: 'Lesson was not Updated' });

//     lesson.title = req.body.title || lesson.title;
//     lesson.content = req.body.content || lesson.content;
//     lesson.flashcards = req.body.flashcards || lesson.flashcards;
//     lesson.quiz = req.body.quiz || lesson.quiz;

//     const updatedLesson = await lesson.save();

//     res.json(updatedLesson);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };



// // Delete lesson
// export const deleteLesson = async (req, res) => {

//   const { id } = req.params;

//   try {
//     // Delete the lesson by ID
//     const lesson = await Lesson.findByIdAndDelete(id);

//     // If the lesson doesn't exist, return a 404 error
//     if (!lesson) {
//       return res.status(404).json({ message: 'Lesson not found' });
//     }

//     // Return a success message
//     res.json({ message: 'Lesson deleted successfully' });
//   } catch (err) {
//     // Handle any errors that occur
//     res.status(500).json({ message: err.message });
//   }
// };










// // Delete flashcard from a lesson
// export const deleteFlashcard = async (req, res) => {

//   const { id, flashcardId } = req.params; 
  
//   try {
//     const lesson = await Lesson.findById(id);
    
//     if (!lesson) {
//       return res.status(404).json({ message: 'Lesson not found' });
//     }

//     // Find the flashcard to delete
//     const flashcardToDelete = lesson.flashcards.find(
//       flashcard => flashcard._id.toString() === flashcardId
//     );

//     if (!flashcardToDelete) {
//       return res.status(404).json({ message: `Flashcard with ID ${flashcardId} not found` });
//     }

//     // Proceed to remove the flashcard
//     lesson.flashcards = lesson.flashcards.filter(
//       flashcard => flashcard._id.toString() !== flashcardId
//     );

//     await lesson.save();
//     res.json({ message: 'Flashcard was deleted' }); // Send a success message
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };



// // Add quiz to a lesson
// export const addQuiz = async (req, res) => {
   
//   const {id} = req.params

//   try {
//     const lesson = await Lesson.findById(id);
//     if (!lesson) return res.status(404).json({ message: 'Quiz was not Added' });

//     const quiz = { question: req.body.question, options: req.body.options, correctAnswer: req.body.correctAnswer };
//     lesson.quiz.push(quiz);
//     const updatedLesson = await lesson.save();


    
//     res.json(updatedLesson);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };



// // Delete quiz from a lesson
// export const deleteQuiz = async (req, res) => {
//   const { id, quizId } = req.params;

//   try {
//     // Find the lesson by ID
//     const lesson = await Lesson.findById(id);
//     if (!lesson) {
//       return res.status(404).json({ message: 'Quiz was not deleted' });
//     }

//     // Filter out the quiz with the given quizId
//     lesson.quiz = lesson.quiz.filter(quiz => quiz._id.toString() !== quizId);

//     // Save the updated lesson
//     await lesson.save();

//     // Respond with success message
//     res.json({ message: 'Quiz was deleted successfully' });
//   } catch (err) {
//     // Handle errors
//     res.status(400).json({ message: err.message });
//   }
// };


  