import { useEffect, useState } from "react";
import axios from "axios";
import LessonCard from "./components/LessonCard"

const App = () => {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const response = await axios.get("http://localhost:9000/api/lessons");
        setLessons(response.data);
      } catch (error) {
        console.error("Error fetching lessons:", error);
      }
    };

    fetchLessons();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-800 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-blue-500 mb-8">
        Language Learning Platform
      </h1>

      {lessons.map((lesson) => (
        <LessonCard key={lesson._id} lesson={lesson} />
      ))}
    </div>
  );
};

export default App;













































// import { useEffect, useState } from "react";
// import axios from "axios";
// import { shuffleArray } from "./utils/shuffleArray";

// const App = () => {
//   const [lessons, setLessons] = useState([]);
//   const [selectedAnswer, setSelectedAnswer] = useState("");
//   const [feedback, setFeedback] = useState(""); // Store feedback for the current question
//   const [currentQuizIndex, setCurrentQuizIndex] = useState(0); // Track the index of current quiz set
//   const [score, setScore] = useState(0); // Track score
//   const [shuffledOptions, setShuffledOptions] = useState([]);
//   const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

//   useEffect(() => {
//     const fetchLessons = async () => {
//       try {
//         const response = await axios.get("http://localhost:9000/api/lessons");
//         setLessons(response.data);
//       } catch (error) {
//         console.error("Error fetching lessons:", error);
//       }
//     };

//     fetchLessons();
//   }, []);

//   useEffect(() => {
//     if (feedback === "") {
//       setShuffledOptions([]); // Reset shuffled options if feedback is empty
//     }
//   }, [feedback]);

//   const handleAnswerSelection = (answer) => {
//     setSelectedAnswer(answer);
//   };

//   const handleSubmitAnswer = async (correctAnswer) => {
//     // Check if the answer is correct and update feedback
//     const isCorrect = selectedAnswer === correctAnswer;
//     setFeedback(isCorrect ? "Correct!" : `Incorrect. The correct answer is: ${correctAnswer}`);
  
//     // Update score if the answer is correct
//     if (isCorrect) {
//       setScore((prevScore) => prevScore + 100);
//     }

//     // Wait for 2 seconds before resetting feedback
//     await delay(2000);
//     setFeedback(""); // Reset feedback after 2 seconds

    // // Shuffle answers only after feedback disappears
    // const shuffled = shuffleArray(lessons[0].quiz[currentQuizIndex].options);
    // setShuffledOptions(shuffled);
  
//     // Move to the next question or show completion message
//     const nextIndex = currentQuizIndex + 1;
//     if (nextIndex < lessons[0]?.quiz.length) {
//       setCurrentQuizIndex(nextIndex);
//       setSelectedAnswer("");
      
//     } else {
//       setFeedback("You have completed all questions!");
      
//     }
//   };

//   // Determine which options to render based on feedback
//   const optionsToRender =
//     feedback === "" // Only shuffle options after feedback disappears
//       ? lessons[0]?.quiz[currentQuizIndex]?.options
//       : shuffledOptions.length > 0
//       ? shuffledOptions
//       : lessons[0]?.quiz[currentQuizIndex]?.options;

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-800 flex flex-col items-center justify-center">
//       <h1 className="text-3xl font-bold text-blue-500 mb-8">
//         Language Learning Platform
//       </h1>

//       {/* Display the score */}
//       <div className="text-xl font-semibold text-white mb-4">
//         Score: {score}
//       </div>

//       {lessons.map((lesson) => (
//         <div
//           key={lesson._id}
//           className="p-6 mb-6 max-w-3xl w-full"
//         >
//           <h2 className="text-2xl font-semibold text-white mb-4">
//             {lesson.title}
//           </h2>
//           <p className="text-gray-400 mb-4">{lesson.content}</p>

//           <div>
//             <h3 className="text-xl font-semibold text-white mb-4">Quiz</h3>
//             <div className="mb-6">
//               <h3 className="text-xl font-semibold text-white">
//                 Flashcards
//               </h3>
//               <ul className="space-y-4">
//                 {lesson.flashcards.map((flashcard, index) => (
//                   <li
//                     key={index}
//                     className="bg-gray-50  p-4 rounded-md border border-gray-200"
//                   >
//                     <strong className="text-gray-800">
//                       {flashcard.question}
//                     </strong>{" "}
//                     - <span className="text-gray-600">{flashcard.answer}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Render only the current question */}
//             {lesson.quiz[currentQuizIndex] && (
//               <div className="mb-4">
//                 <p className="text-[20px] text-white mb-4">
//                   <strong>{lesson.quiz[currentQuizIndex].question}</strong>
//                 </p>
//                 <ul className="space-y-2">
//                   {optionsToRender.map((option, i) => (
//                     <li key={i}>
//                       <button
//                         onClick={() => handleAnswerSelection(option)}
//                         className={`w-full py-2 px-4 rounded-md focus:outline-none ${
//                           selectedAnswer === option
//                             ? "bg-blue-700 text-white"
//                             : "bg-blue-500 text-white hover:bg-blue-600"
//                         }`}
//                       >
//                         {option}
//                       </button>
//                     </li>
//                   ))}
//                 </ul>

//                 <button
//                   onClick={() =>
//                     handleSubmitAnswer(
//                       lesson.quiz[currentQuizIndex].correctAnswer
//                     )
//                   }
//                   className={`mt-4 w-full py-2 rounded-md text-white focus:outline-none ${
//                     selectedAnswer
//                       ? "bg-green-500 hover:bg-green-600"
//                       : "bg-gray-400 cursor-not-allowed"
//                   }`}
//                   disabled={!selectedAnswer} // Disable button if no answer is selected
//                 >
//                   Submit Answer
//                 </button>
//                 {feedback && (
//                   <p
//                   className={`fixed top-64 left-1/2 transform -translate-x-1/2 py-2 px-4 text-center font-semibold ${
//                       feedback === "Correct!"
//                         ? "bg-green-500 text-white"
//                         : "bg-red-500 text-white"
//                     } rounded-md shadow-md`}
//                   >
//                     {feedback}
//                   </p>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default App;
