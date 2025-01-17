const FeedbackMessage = ({ feedback }) => {
    if (!feedback) return null;
  
    return (
      <p
        className={`fixed top-96 left-1/2 transform -translate-x-1/2 py-2 px-4 text-center font-semibold ${
          feedback === "Correct!" ? "bg-green-500 text-white" : "bg-red-500 text-white"
        } rounded-md shadow-md`}
      >
        {feedback}
      </p>
    );
  };
  
  export default FeedbackMessage;
  