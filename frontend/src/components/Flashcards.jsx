const Flashcards = ({ flashcards }) => {
    return (
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-white">Flashcards</h3>
        <ul className="space-y-4">
          {flashcards.map((flashcard, index) => (
            <li
              key={index}
              className="bg-gray-50 p-4 rounded-md border border-gray-200"
            >
              <strong className="text-gray-800">{flashcard.question}</strong> -{" "}
              <span className="text-gray-600">{flashcard.answer}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Flashcards;
  