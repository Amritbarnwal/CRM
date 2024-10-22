import React from 'react';

export const OptionButton = ({ option, isSelected, isSubmitted, isCorrect, onClick }) => {
  const getBackgroundColor = () => {
    if (isSubmitted) {
      if (isCorrect) return 'green';
      if (isSelected) return 'red';
    }
    return isSelected ? 'lightblue' : 'white';
  };

  return (
    <li
      onClick={onClick}
      style={{ backgroundColor: getBackgroundColor(), padding: '10px', cursor: 'pointer' }}
    >
      {option}
    </li>
  );
};
