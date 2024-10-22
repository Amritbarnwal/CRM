import { useState, useEffect } from 'react';
import { OptionButton } from './OptionButton';

export const Question = ({ questionData, onSubmit, isAnswered }) => {
  const { question, options, correctAnswer } = questionData;
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setSelectedOption(null);
    setIsSubmitted(false);
  }, [questionData]);

  const handleSubmit = () => {
    setIsSubmitted(true);
    onSubmit(selectedOption === correctAnswer);
  };

  return (
    <div className="question-container">
      <h2>{question}</h2>
      <ul>
        {options.map((option, index) => (
          <OptionButton
            key={index}
            option={option}
            isSelected={selectedOption === option}
            isSubmitted={isSubmitted || isAnswered}  
            isCorrect={option === correctAnswer}
            onClick={() => !isSubmitted && !isAnswered && setSelectedOption(option)}  
          />
        ))}
      </ul>
      {!isSubmitted && !isAnswered && (  // submit button only if not submitted/answered
        <button onClick={handleSubmit}>
          Submit
        </button>
      )}
    </div>
  );
};
