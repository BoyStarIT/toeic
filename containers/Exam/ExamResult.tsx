import { useEffect, useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import ExamLayout from './ExamLayout';
import QuizPlayZone from './QuizPlayZone';
import { Progress } from 'antd';

const ExamResult = ({ listQuestion, onUpdateListQuestion, onSetExamStatus }) => {
  const onClickReview = () => {
    const question = document.getElementById(`review-${listQuestion?.[0]?._id}`);
    if (!question) return;
    window.scrollTo({
      top: question.offsetTop,
      behavior: 'smooth',
    });
  };

  const onClickContinue = () => {
    onSetExamStatus('starting');
  };
  const onClickAgain = () => {
    const newListQuestion = listQuestion.map((question) => {
      delete question.userAnswer;
      return question;
    });
    onUpdateListQuestion(newListQuestion);
    onSetExamStatus('starting');
  };

  const newAnswerCount = listQuestion.filter((question) => !question?.userAnswer?.[0]).length;
  const correctAnswerCount = listQuestion.filter(
    (question) =>
      question?.userAnswer?.[0] && question?.userAnswer?.[0] === question?.answer?.texts?.[0]
  ).length;
  const incorrectAnswerCount = listQuestion.length - newAnswerCount - correctAnswerCount;
  const percent = (correctAnswerCount / listQuestion.length) * 100;
  return (
    <ExamLayout listQuestion={listQuestion}>
      <div id="game-view-container" className="game-view-container-main">
        <div id="main-game-view" className="">
          <div id="main-game-scroll-panel" className="main-game-object">
            <div className="module-game-overview-component">
              <div className="main-game-overview-bgr">
                <span className="bubble-top-left" />
                <span className="small-bubble-left" />
                <span className="ellipse-left" />
                <span className="ellipse-right" />
                <span className="bubble-right" />
              </div>
              <div className="main-game-overview-data">
                <div className="main-progress">
                  <div className="main-progress-box" />
                  <div className="box-layer-2" />
                  <div className="box-layer-3">
                    <Progress
                      type="circle"
                      percent={percent}
                      width={130}
                      format={(percent) => <span>{percent.toFixed(0)}%</span>}
                    />
                  </div>
                </div>
                <div className="main-statistics">
                  <div className="main-statistics-questions-stat">
                    <div className="main-stats-data-questions-stat-item item-total">
                      <div
                        className="questions-stat-item-value"
                        style={{ color: 'rgb(132, 155, 182)' }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={12}
                          height={13}
                          viewBox="0 0 12 13"
                          fill="none"
                        >
                          <circle cx="6.28342" cy="6.48361" r="5.68967" fill="#849BB6" />
                        </svg>
                        {listQuestion.length}
                      </div>
                      <div className="questions-stat-item-label">Total</div>
                    </div>
                    <div className="main-stats-data-questions-stat-item item-correct">
                      <div
                        className="questions-stat-item-value"
                        style={{ color: 'rgb(130, 188, 36)' }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={12}
                          height={13}
                          viewBox="0 0 12 13"
                          fill="none"
                        >
                          <circle cx="6.28342" cy="6.48361" r="5.68967" fill="#82BC24" />
                        </svg>
                        {correctAnswerCount}
                      </div>
                      <div className="questions-stat-item-label">Correct</div>
                    </div>
                    <div className="main-stats-data-questions-stat-item item-incorrect">
                      <div
                        className="questions-stat-item-value"
                        style={{ color: 'rgb(255, 84, 84)' }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={12}
                          height={13}
                          viewBox="0 0 12 13"
                          fill="none"
                        >
                          <circle cx="6.28342" cy="6.48361" r="5.68967" fill="#FF5454" />
                        </svg>
                        {incorrectAnswerCount}
                      </div>
                      <div className="questions-stat-item-label">Incorrect</div>
                    </div>
                  </div>
                  <div className="main-statistics-questions-button">
                    {newAnswerCount === 0 ? (
                      <button
                        className="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButtonBase-root  css-1bya90x"
                        tabIndex={0}
                        type="button"
                        onClick={onClickReview}
                      >
                        REVIEW
                      </button>
                    ) : (
                      <button
                        className="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButtonBase-root  css-1bya90x"
                        tabIndex={0}
                        type="button"
                        onClick={onClickContinue}
                      >
                        CONTINUE
                      </button>
                    )}

                    <button
                      className="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButtonBase-root  css-lv9ort"
                      tabIndex={0}
                      type="button"
                      onClick={onClickAgain}
                    >
                      TRY AGAIN
                    </button>
                  </div>
                </div>
              </div>
              <div className="main-game-overview-question-categories">
                <div className="question-categories-title">
                  Press and Practice Your Category Again Below
                </div>
                <div className="question-categories-list">
                  <div className="MuiBox-root css-176iyts">
                    <div className="MuiBox-root css-tkw370">
                      <button
                        className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1vacozs"
                        tabIndex={0}
                        type="button"
                      >
                        {listQuestion.length}
                      </button>
                    </div>
                    <span className="MuiTypography-root MuiTypography-body1 css-gu1cw0">Total</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={36}
                    height={9}
                    viewBox="0 0 36 9"
                    fill="none"
                    className="divider-continue-box"
                    style={{ width: 36 }}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.48249 8.09296C2.3116 8.09296 0.551758 6.3331 0.551758 4.1622C0.551758 1.99131 2.3116 0.231445 4.48249 0.231445C5.93799 0.231445 7.20873 1.02255 7.88817 2.19824L28.595 2.19824C29.2744 1.02255 30.545 0.231445 32.0005 0.231445C34.1712 0.231445 35.9309 1.99131 35.9309 4.1622C35.9309 6.3331 34.1712 8.09296 32.0005 8.09296C30.5462 8.09296 29.2764 7.30312 28.5966 6.129L7.88653 6.129C7.20669 7.30312 5.93683 8.09296 4.48249 8.09296Z"
                      fill="#214D45"
                    />
                  </svg>
                  <div className="MuiBox-root css-176iyts">
                    <div className="MuiBox-root css-tkw370">
                      <button
                        className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-64idhc"
                        tabIndex={0}
                        type="button"
                      >
                        {newAnswerCount}
                      </button>
                    </div>
                    <span className="MuiTypography-root MuiTypography-body1 css-ivwblt">New</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={36}
                    height={9}
                    viewBox="0 0 36 9"
                    fill="none"
                    className="divider-continue-box"
                    style={{ width: 36 }}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.48249 8.09296C2.3116 8.09296 0.551758 6.3331 0.551758 4.1622C0.551758 1.99131 2.3116 0.231445 4.48249 0.231445C5.93799 0.231445 7.20873 1.02255 7.88817 2.19824L28.595 2.19824C29.2744 1.02255 30.545 0.231445 32.0005 0.231445C34.1712 0.231445 35.9309 1.99131 35.9309 4.1622C35.9309 6.3331 34.1712 8.09296 32.0005 8.09296C30.5462 8.09296 29.2764 7.30312 28.5966 6.129L7.88653 6.129C7.20669 7.30312 5.93683 8.09296 4.48249 8.09296Z"
                      fill="#214D45"
                    />
                  </svg>
                  <div className="MuiBox-root css-176iyts">
                    <div className="MuiBox-root css-tkw370">
                      <button
                        className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-16yci69"
                        tabIndex={0}
                        type="button"
                      >
                        {correctAnswerCount}
                      </button>
                    </div>
                    <span className="MuiTypography-root MuiTypography-body1 css-6kw39w">
                      Correct
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={36}
                    height={9}
                    viewBox="0 0 36 9"
                    fill="none"
                    className="divider-continue-box"
                    style={{ width: 36 }}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.48249 8.09296C2.3116 8.09296 0.551758 6.3331 0.551758 4.1622C0.551758 1.99131 2.3116 0.231445 4.48249 0.231445C5.93799 0.231445 7.20873 1.02255 7.88817 2.19824L28.595 2.19824C29.2744 1.02255 30.545 0.231445 32.0005 0.231445C34.1712 0.231445 35.9309 1.99131 35.9309 4.1622C35.9309 6.3331 34.1712 8.09296 32.0005 8.09296C30.5462 8.09296 29.2764 7.30312 28.5966 6.129L7.88653 6.129C7.20669 7.30312 5.93683 8.09296 4.48249 8.09296Z"
                      fill="#214D45"
                    />
                  </svg>
                  <div className="MuiBox-root css-176iyts">
                    <div className="MuiBox-root css-tkw370">
                      <button
                        className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1s5ncj6"
                        tabIndex={0}
                        type="button"
                      >
                        {incorrectAnswerCount}
                      </button>
                    </div>
                    <span className="MuiTypography-root MuiTypography-body1 css-js2k7p">
                      Incorrect
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="main-game-review-section" className="">
          {listQuestion.map((question, index) => (
            <div id={`review-${question?._id}`} key={question?._id}>
              <div className="question-index-title">Question {index + 1}</div>
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
                              src={`https://storage.googleapis.com/${question?.question?.sound}`}
                              autoPlay={false}
                              controls
                            />
                          </div>
                          <div className="game-object-question-image">
                            <div className="game-image-widget-container" style={{ width: 300 }}>
                              <img
                                src={`https://storage.googleapis.com${question?.question?.image}`}
                                alt="https://storage.googleapis.com/kstoeic/images/5911589_1562638438001.png"
                                style={{ width: '100%' }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <QuizPlayZone answer={question.answer} userAnswer={question.userAnswer} />
                  </div>
                </div>
              </div>
              <hr className="MuiDivider-root MuiDivider-fullWidth css-39bbo6" />
            </div>
          ))}
        </div>
      </div>
    </ExamLayout>
  );
};

export default ExamResult;
