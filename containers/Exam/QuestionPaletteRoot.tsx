import { useEffect, useState } from 'react';

type QuestionPaletteRootProps = {
  listQuestion?: any[];
  children?: React.ReactNode;
};
const QuestionPaletteRoot: React.FC<QuestionPaletteRootProps> = ({
  listQuestion,
}: QuestionPaletteRootProps) => {
  const goToQuestion = (id) => {
    const question = document.getElementById(`review-${id}`);
    if (!question) return;
    window.scrollTo({
      top: question.offsetTop,
      behavior: 'smooth',
    });
  };

  const newAnswerCount = listQuestion.filter((question) => !question?.userAnswer?.[0]).length;
  const correctAnswerCount = listQuestion.filter(
    (question) =>
      question?.userAnswer?.[0] && question?.userAnswer?.[0] === question?.answer?.texts?.[0]
  ).length;
  const incorrectAnswerCount = listQuestion.length - newAnswerCount - correctAnswerCount;
  return (
    <div className="jss27 question-palette-root">
      <div className="current-topic-label question-palette-game-title">Test 1</div>
      <div className="question-palette-main">
        <div className="question-palette-header">
          <div className="question-palette-title">Question Palette</div>
        </div>
        <div className="question-palette-body">
          <div className="questions-list questions-list-custom" id="question-list-scroll">
            <div className="question-list-row" style={{ gridTemplateColumns: 'repeat(8, 1fr)' }}>
              {listQuestion?.map((question, index) => (
                <button
                  className={`question-item question-palette-item-custom ${
                    question?.userAnswer?.length > 0
                      ? question?.userAnswer?.[0] === question?.answer?.texts?.[0]
                        ? 'p-item-correct'
                        : 'p-item-incorrect'
                      : ''
                  }`}
                  tabIndex={0}
                  type="button"
                  id={`pallete-item-${question._id}`}
                  onClick={() => goToQuestion(question._id)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
          <div className="question-stat-progress">
            <div className="jss28">
              <div className="questions-stat-item">
                <svg
                  width={10}
                  height={11}
                  viewBox="0 0 10 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="0.5" width={10} height={10} rx={3} fill="#4caf50" />
                </svg>
                <span className="questions-stat-item-text">
                  {correctAnswerCount}/{listQuestion?.length} Correct
                </span>
              </div>
              <div className="questions-stat-item">
                <svg
                  width={10}
                  height={11}
                  viewBox="0 0 10 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="0.5" width={10} height={10} rx={3} fill="#FF5252" />
                </svg>
                <span className="questions-stat-item-text">
                  {incorrectAnswerCount}/{listQuestion?.length} Incorrect
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="question-palette-footer question-palette-footer-custom" />
      </div>
    </div>
  );
};

export default QuestionPaletteRoot;
