import { useLoading } from '@hooks';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ExamResult from './ExamResult';
import ExamStart from './ExamStart';
import ExamView from './ExamView';
import { listQuestions } from './mockData';
import Config from '@root/config';
import { Message, reactLocalStorage } from '@utils';
import { getListCard } from '@api';

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
        const _listData = respData?.cards?.map((question) => {
          const userAnswer = localStorageExam?.find((exam) => exam.id === question.id);
          return {
            ...question,
            answer: {
              ...question.answer,
              allAnswer: [...question.answer.choices, ...question.answer.texts].sort(sortAnswer),
            },
            ...(userAnswer?.length > 0 ? { userAnswer: userAnswer } : {}),
          };
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

  // const onClickRouterPush = (exam) => {
  //   router.push(`/study/${topicId}/${exam.id}`);
  // };

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
