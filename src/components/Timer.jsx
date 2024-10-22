import { useEffect, useState } from 'react';

export const Timer = ({ onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timerId);
    } else {
      onTimeUp();  
    }
  }, [timeLeft]);

  return <div className="timer">Time Left: {timeLeft}s</div>;
};
