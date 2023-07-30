import { Button } from '@ui';
import ExamLayout from './ExamLayout';
import QuestionCard from './QuestionCard';
import TopicListView from './TopicListView';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useState } from 'react';

const ExamStart = ({ listQuestion, onUpdateListQuestion }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const onUpdateQuestion = (newQuestion, index) => {
    const newListQuestion = [...listQuestion];
    newListQuestion[index] = newQuestion;
    onUpdateListQuestion?.(newListQuestion);
  };

  const onNextQuestion = () => {
    setCurrentQuestionIndex((prev) => (prev === listQuestion.length - 1 ? prev : prev + 1));
  };
  const onPreviousQuestion = () => {
    setCurrentQuestionIndex((prev) => (prev === 0 ? prev : prev - 1));
  };

  return (
    <ExamLayout listQuestion={listQuestion}>
      <div id="game-view-container" className="game-view-container-main">
        <div id="main-game-view" className="">
          <div id="main-game-scroll-panel" className="main-game-object">
            <QuestionCard
              question={listQuestion[currentQuestionIndex]}
              onUpdateQuestion={(newQuestion) =>
                onUpdateQuestion(newQuestion, currentQuestionIndex)
              }
              key={`QuestionCard-${listQuestion[currentQuestionIndex]._id}`}
            />
            {listQuestion[currentQuestionIndex]?.userAnswer?.length > 0 && (
              <div
                className={`slide-button-box ${
                  currentQuestionIndex === 0 ? 'first-question' : ''
                } ${currentQuestionIndex === listQuestion.length - 1 ? 'last-question' : ''}`}
              >
                {currentQuestionIndex !== 0 && (
                  <Button shape="round" onClick={onPreviousQuestion}>
                    <LeftOutlined />
                    {' Previous'}
                  </Button>
                )}
                {currentQuestionIndex !== listQuestion.length - 1 && (
                  <Button shape="round" onClick={onNextQuestion}>
                    {'Next '}
                    <RightOutlined />
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <TopicListView />
    </ExamLayout>
  );
};

export default ExamStart;
