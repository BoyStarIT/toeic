import { getListCardMiniTest } from '@api';
import { useLoading } from '@hooks';
import Config from '@root/config';
import { Message, reactLocalStorage } from '@utils';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import ExamResult from './ExamResult';
import ExamStart from './ExamStart';
import ExamView from './ExamView';

type ExamStatusType = 'initial' | 'starting' | 'reviewing';

const ExamMiniTest = () => {
  const router = useRouter();
  const [{ isLoading }, { start, stop }] = useLoading();

  const [examStatus, setExamStatus] = useState<ExamStatusType>('initial');
  const [listQuestion, setListQuestion] = useState([]);

  const answerInfos = useMemo(() => {
    const flatListQuestion = listQuestion.reduce((acc, question) => {
      if (question?.isQuestionGroup) {
        const newCards = question.childCards.map((childCard, index) => {
          return {
            ...question,
            ...childCard,
            childCardIndex: index,
          };
        });
        const newAcc = [...acc, ...newCards];
        return newAcc;
      } else {
        const newAcc = [...acc, question];
        return newAcc;
      }
    }, []);
    const newAnswerCount = flatListQuestion.filter((question) => !question?.userAnswer?.[0]).length;
    const correctAnswerCount = flatListQuestion.filter(
      (question) =>
        question?.userAnswer?.[0] && question?.userAnswer?.[0] === question?.answer?.texts?.[0]
    )?.length;
    const incorrectAnswerCount = flatListQuestion?.length - newAnswerCount - correctAnswerCount;
    return {
      total: newAnswerCount + correctAnswerCount + incorrectAnswerCount,
      newAnswerCount,
      correctAnswerCount,
      incorrectAnswerCount,
    };
  }, [listQuestion]);

  const fetchListCard = async () => {
    start();
    try {
      const resp: any = await getListCardMiniTest();

      const error = resp.data.error;
      const respData = resp.data?.responseData;
      if (error) {
        stop();
        Message.error(error?.message ?? 'Something error!');
      } else {
        // const localStorageExam = reactLocalStorage.getArray(Config.EXAM_KEY);
        let questionNo = 0;
        const _listData = respData?.cards?.map((card) => {
          // const localExamCard = localStorageExam?.find((exam) => exam?.id === card?.id);
          const isQuestionGroup = card?.answer?.choices?.join('')?.length === 0;
          if (isQuestionGroup) {
            const _childCards = card?.childCards.map((childCard) => {
              // const localExamChildCard = localExamCard?.childCards?.find(
              //   (exam) => exam.id === childCard?.id
              // );
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
                // ...(localExamChildCard?.userAnswer?.length > 0
                //   ? { userAnswer: localExamChildCard?.userAnswer }
                //   : {}),
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
              // ...(localExamCard?.userAnswer?.length > 0
              //   ? { userAnswer: localExamCard?.userAnswer }
              //   : {}),
            };
          }
        });

        setListQuestion(_listData);
        // reactLocalStorage.setObject(Config.EXAM_KEY, _listData);
      }
    } catch (err) {
      console.log('onSubmit-error :>> ', err.toString());
    } finally {
      stop();
    }
  };

  const sortAnswer = (a, b) => {
    // Remove the double quotes and parentheses from the values for comparison
    const aValue = a.replace(/["()]/g, '');
    const bValue = b.replace(/["()]/g, '');

    // Compare the values
    if (aValue < bValue) {
      return -1;
    } else if (aValue > bValue) {
      return 1;
    } else {
      return 0;
    }
  };

  useEffect(() => {
    fetchListCard();
  }, [router]);

  const onSetExamStatus = (status: ExamStatusType) => {
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
          answerInfos={answerInfos}
        />
      )}
      {examStatus === 'initial' && (
        <ExamView
          listQuestion={listQuestion}
          onSetExamStatus={onSetExamStatus}
          answerInfos={answerInfos}
        />
      )}
      {examStatus === 'starting' && (
        <ExamStart
          listQuestion={listQuestion}
          onUpdateListQuestion={onUpdateListQuestion}
          onSetExamStatus={onSetExamStatus}
          answerInfos={answerInfos}
        />
      )}
    </div>
  );
};

export default ExamMiniTest;
