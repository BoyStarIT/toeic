import { useLoading } from '@hooks';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ExamResult from './ExamResult';
import ExamStart from './ExamStart';
import ExamView from './ExamView';
import { listQuestions } from './mockData';
import Config from '@root/config';
import { Message, reactLocalStorage, sortAnswer } from '@utils';
import { getListCard, postCollectExam } from '@api';

type ExamStatusType = 'initial' | 'starting' | 'reviewing';
const Exam = ({ topicCode, examCode }) => {
  const router = useRouter();
  const [{ isLoading }, { start, stop }] = useLoading();

  const [examStatus, setExamStatus] = useState<ExamStatusType>('initial');
  const [listQuestion, setListQuestion] = useState([]);

  const fetchListCard = async () => {
    start();
    try {
      const resp: any = await getListCard(examCode);
      const error = resp.data.error;
      const respData = resp.data?.responseData;
      if (error) {
        stop();
        Message.error(error?.message ?? 'Something error!');
      } else {
        const localStorageExam = reactLocalStorage.getArray(Config.EXAM_KEY);
        let questionNo = 0;
        const _listData = respData?.cards?.map((card) => {
          const localExamCard = localStorageExam?.find((exam) => exam?.id === card?.id);
          const isQuestionGroup = card?.answer?.choices?.length === 0;
          if (isQuestionGroup) {
            const _childCards = card?.childCards.map((childCard) => {
              const localExamChildCard = localExamCard?.childCards?.find(
                (exam) => exam.id === childCard?.id
              );
              questionNo = questionNo + 1;
              return {
                ...childCard,
                answer: {
                  ...childCard?.answer,
                  allAnswer: [
                    ...(childCard?.answer?.choices ?? []),
                    ...(childCard?.answer?.texts ?? []),
                  ].sort(sortAnswer),
                },
                questionNo: questionNo,
                ...(localExamChildCard?.userAnswer?.length > 0
                  ? { userAnswer: localExamChildCard?.userAnswer }
                  : {}),
              };
            });
            return {
              ...card,
              childCards: _childCards,
              isQuestionGroup: true,
            };
          } else {
            questionNo = questionNo + 1;
            return {
              ...card,
              answer: {
                ...card?.answer,
                allAnswer: [...(card?.answer?.choices ?? []), ...(card?.answer?.texts ?? [])].sort(
                  sortAnswer
                ),
              },
              questionNo: questionNo,
              ...(localExamCard?.userAnswer?.length > 0
                ? { userAnswer: localExamCard?.userAnswer }
                : {}),
            };
          }
        });

        setListQuestion(_listData);
        reactLocalStorage.setObject(Config.EXAM_KEY, _listData);
      }
    } catch (err) {
      console.log('onSubmit-error :>> ', err.toString());
    } finally {
      stop();
    }
  };

  const onCollectionExam = async () => {
    try {
      const topicId = router.query.topicCode;
      if (!topicId) {
        return;
      }
      let correct = 0;
      let incorrect = 0;
      let newAnswer = 0;
      listQuestion.forEach((question) => {
        if (question?.answer?.choices?.length === 0) {
          question?.childCards.forEach((childCard) => {
            if (!childCard?.userAnswer?.[0].length) {
              newAnswer = newAnswer + 1;
            } else if (
              childCard?.userAnswer?.[0] &&
              childCard?.userAnswer?.[0] === childCard?.answer?.texts?.[0]
            ) {
              correct = correct + 1;
            } else {
              incorrect = incorrect + 1;
            }
          });
        } else {
          if (!question?.userAnswer?.[0].length) {
            newAnswer = newAnswer + 1;
          } else if (
            question?.userAnswer?.[0] &&
            question?.userAnswer?.[0] === question?.answer?.texts?.[0]
          ) {
            correct = correct + 1;
          } else {
            incorrect = incorrect + 1;
          }
        }
      });
      const progress = (correct / (correct + incorrect + newAnswer)) * 100;
      const params = {
        progress: progress.toFixed(0),
        status: 1,
        examId: examCode,
      };
      const resp: any = await postCollectExam(params);
      const error = resp.data.error;
      if (error) {
        stop();
        Message.error(error?.message ?? 'Something error!');
      }
    } catch (err) {
      console.log('onSubmit-error :>> ', err.toString());
    } finally {
      stop();
    }
  };

  useEffect(() => {
    fetchListCard();
  }, [router]);

  const onSetExamStatus = async (status: ExamStatusType) => {
    if (status === 'reviewing') {
      await onCollectionExam();
    }
    setExamStatus(status);
  };

  const onUpdateListQuestion = (questions) => {
    setListQuestion(questions);
    reactLocalStorage.setObject(Config.EXAM_KEY, questions);
  };

  return (
    <div className="main-exam">
      {examStatus === 'reviewing' && (
        <ExamResult
          listQuestion={listQuestion}
          onUpdateListQuestion={onUpdateListQuestion}
          onSetExamStatus={onSetExamStatus}
        />
      )}
      {examStatus === 'initial' && (
        <ExamView listQuestion={listQuestion} onSetExamStatus={onSetExamStatus} />
      )}
      {examStatus === 'starting' && (
        <ExamStart
          listQuestion={listQuestion}
          onUpdateListQuestion={onUpdateListQuestion}
          onSetExamStatus={onSetExamStatus}
        />
      )}
    </div>
  );
};

export default Exam;
