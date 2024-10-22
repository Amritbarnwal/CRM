import { useState } from 'react';
import { Timer } from './components/Timer';
import { Question } from './components/Question';
import './styles.css';

// Array of questions
const questionsData = [
  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
    correctAnswer: 'Paris'
  },
  {
    question: 'What is the largest planet in our solar system?',
    options: ['Earth', 'Jupiter', 'Mars', 'Venus'],
    correctAnswer: 'Jupiter'
  },
  {
    question: 'What is the chemical symbol for water?',
    options: ['HO', 'H2O', 'H2O2', 'O2'],
    correctAnswer: 'H2O'
  }
];

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeUp, setTimeUp] = useState(false);
  const [showResult, setShowResult] = useState(null);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);  // Track answered questions

  const handleTimeUp = () => {
    setTimeUp(true);
    alert('Time is up! Reload the page to try again.');
  };

  const handleSubmit = (isCorrect) => {
    setShowResult(isCorrect ? 'Correct!' : 'Incorrect!');
    setAnsweredQuestions((prev) => [...prev, currentQuestionIndex]);  // Mark the question as answered
  };

  const handleNextQuestion = () => {
    setShowResult(null); // Reset the result message
    if (currentQuestionIndex < questionsData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1); // Move to the next question
    } else {
      alert('You have completed all the questions!');
    }
  };

  const isAnswered = answeredQuestions.includes(currentQuestionIndex); // Check if question is already answered

  return (
    <div className="app-container">
      <Timer onTimeUp={handleTimeUp} />
      {!timeUp && (
        <>
          <Question
            questionData={questionsData[currentQuestionIndex]}
            onSubmit={handleSubmit}
            isAnswered={isAnswered}  // Pass if the question has been answered
          />
          {showResult && (
            <div className="result">
              {showResult}
              <button onClick={handleNextQuestion}>
                {currentQuestionIndex < questionsData.length - 1
                  ? 'Next Question'
                  : 'Finish'}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
