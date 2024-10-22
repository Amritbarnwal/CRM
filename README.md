# Questionnaire Web App

A simple and interactive questionnaire web application built using React and Vite. The app features a 1-minute timer, multiple-choice questions, and provides instant feedback on user answers.

## Features

- **1-Minute Timer**: Countdown timer displayed at the top of the page.
- **Multiple-Choice Questions**: Users can select from four options for each question.
- **Feedback on Answers**: Correct answers are highlighted in green, while incorrect selections are marked in red.
- **Next Question Navigation**: Users can proceed to the next question after submitting their answer.
- **Popup on Timeout**: A message appears when the timer runs out, prompting the user to reload the page if they want to retake the questionnaire.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Vite**: Fast build tool and development server for modern web applications.
- **CSS**: Styles for the application.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   git clone https://github.com/your-username/my-questionnaire-app.git

2. Navigate to the project directory:

   cd my-questionnaire-app

3. Install the dependencies:

   npm install

4. Start the development server:

   npm run dev

5. Open your browser and navigate to http://localhost:3000.

## Folder Structure

my-questionnaire-app/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── Timer.jsx
│   │   ├── Question.jsx
│   │   └── OptionButton.jsx
│   ├── App.jsx
│   ├── styles.css
│   └── main.jsx
│
├── package.json
├── vite.config.js
└── README.md

## Code Structure

- **Timer.jsx**: Component that manages the countdown timer.
- **Question.jsx**: Displays the current question and handles user interaction.
- **OptionButton.jsx**: Represents each option button in the questionnaire.
- **App.jsx**: Main application component that integrates all components and manages state.

## Styling

The application uses CSS for styling, creating a clean and user-friendly interface with a modern dark theme.



