import QuizSection from "../components/QuizSection";
import Flashcards from "../components/Flashcards";

const LessonCard = ({ lesson }) => {
  return (
    <div className="p-6 mb-6 max-w-3xl w-full">
      <h2 className="text-2xl font-semibold text-white mb-4">{lesson.title}</h2>
      <p className="text-gray-400 mb-4">{lesson.content}</p>

       <Flashcards flashcards={lesson.flashcards} />
      <QuizSection quiz={lesson.quiz} /> 
    </div>
  );
};

export default LessonCard;
