import express from 'express';
import { getLessons, addFlashcard } from '../controller/lessonController.js';

const router = express.Router();

router.get('/lessons', getLessons);

router.post('/lessons/:id/flashcards', addFlashcard);


export default router;


















// router.post('/lessons', createLesson);
// router.get('/lessons/:id', getLessonById);
// router.put('/lessons/:id', updateLesson);
// router.delete('/lessons/:id', deleteLesson);

// // Routes for flashcards

// router.delete('/lessons/:id/flashcards/:flashcardId', deleteFlashcard);

// // Routes for quizzes
// router.post('/lessons/:id/quiz', addQuiz);
// router.delete('/lessons/:id/quiz/:quizId', deleteQuiz);


