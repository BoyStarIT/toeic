import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import QuizPlayZone from './QuizPlayZone';

export default function QuestionCard({ question, onUpdateQuestion }) {
  const onChoice = (choice) => {
    const newQuestion = {
      ...question,
      userAnswer: [choice],
    };
    onUpdateQuestion?.(newQuestion);
  };
  return (
    <div className="game-object-view-container">
      <div className="normal-root-container">
        <div
          className="game-object-view game-object-quiz"
          id="game-object-view-614be68d65d71f3a51f671ad"
        >
          <div className="question-index-container">
            <div className="question-index-wrap">
              <div className="game-object-question quiz-game-object-question">
                <div className="game-object-question-sound">
                  <ReactAudioPlayer
                    src={`https://storage.googleapis.com/${question.question.sound}`}
                    autoPlay={false}
                    controls
                  />
                </div>
                <div className="game-object-question-image">
                  <div className="game-image-widget-container" style={{ width: 300 }}>
                    <img
                      src={`https://storage.googleapis.com${question.question.image}`}
                      alt="https://storage.googleapis.com/kstoeic/images/5911589_1562638438001.png"
                      style={{ width: '100%' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <QuizPlayZone
            answer={question.answer}
            userAnswer={question.userAnswer}
            onChoice={onChoice}
          />
        </div>
      </div>
    </div>
  );
}
