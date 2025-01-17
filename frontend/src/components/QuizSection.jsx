import { useEffect, useState } from "react";
import { shuffleArray } from "../utils/shuffleArray";
import FeedbackMessage from "../components/FeedbackMessage";

const QuizSection = ({ quiz }) => {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [shuffledOptions, setShuffledOptions] = useState([]);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    if (quiz[currentQuizIndex]) {
      // Shuffle the options for the current question
      setShuffledOptions(shuffleArray(quiz[currentQuizIndex].options));
    }
  }, [currentQuizIndex, quiz]);

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleSubmitAnswer = async (correctAnswer) => {
    const isCorrect = selectedAnswer === correctAnswer;
    setFeedback(
      isCorrect
        ? "Correct!"
        : `Incorrect. The correct answer is: ${correctAnswer}`
    );

    // Update score if the answer is correct
    if (isCorrect) {
      setScore((prevScore) => prevScore + 100);
    }

    // Wait for 2 seconds before resetting feedback
    await delay(2000);
    setFeedback(""); // Reset feedback after 2 seconds

    // Move to the next question or show completion message
    const nextIndex = currentQuizIndex + 1;
    if (nextIndex < quiz.length) {
      setCurrentQuizIndex(nextIndex);
      setSelectedAnswer("");
    } else {
      setFeedback("You have completed all questions!");
    }
  };

  return (
    <div>
      <h3 className="text-xl font-semibold text-white mb-4">Quiz</h3>
      <div className="text-xl font-semibold text-white mb-4">
        Score: {score}
      </div>
      {quiz[currentQuizIndex] && (
        <div className="mb-4">
          <p className="text-[20px] text-white mb-4">
            <strong>{quiz[currentQuizIndex].question}</strong>
          </p>
          <ul className="space-y-2">
            {shuffledOptions.map((option, i) => (
              <li key={i}>
                <button
                  onClick={() => handleAnswerSelection(option)}
                  className={`w-full py-2 px-4 rounded-md focus:outline-none ${
                    selectedAnswer === option
                      ? "bg-blue-700 text-white"
                      : "bg-blue-500 text-white hover:bg-blue-600"
                  }`}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={() =>
              handleSubmitAnswer(quiz[currentQuizIndex].correctAnswer)
            }
            className={`mt-4 w-full py-2 rounded-md text-white focus:outline-none ${
              selectedAnswer
                ? "bg-green-500 hover:bg-green-600"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={!selectedAnswer}
          >
            Submit Answer
          </button>
          <FeedbackMessage feedback={feedback} />
        </div>
      )}
    </div>
  );
};

export default QuizSection;
