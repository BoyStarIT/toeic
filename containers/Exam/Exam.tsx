import { useLoading } from '@hooks';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ExamResult from './ExamResult';
import ExamStart from './ExamStart';
import ExamView from './ExamView';
import { listQuestions } from './mockData';

type ExamStatusType = 'initial' | 'starting' | 'reviewing';
const Exam = ({ topicCode, examCode }) => {
  const router = useRouter();
  const [{ isLoading }, { start, stop }] = useLoading();

  const [listData, setListData] = useState([]);

  const fetchListCard = async () => {
    start();
    try {
      const _listData = listQuestions.map((question) => {
        return {
          ...question,
          answer: {
            ...question.answer,
            allAnswer: [...question.answer.choices, ...question.answer.texts].sort(sortAnswer),
          },
        };
      });
      setListData(_listData);

      //   const resp: any = await getListCard(examCode);
      //   const error = resp.data.error;
      //   const respData = resp.data?.responseData;
      //   if (error) {
      //     stop();
      //     Message.error(error?.message ?? 'Something error!');
      //   } else {
      //     console.log('respData', respData);
      //     Message.success('Successfully!');
      //     setListData(respData);
      //   }
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

  console.log('listData', listData);

  // const onClickRouterPush = (exam) => {
  //   router.push(`/study/${topicId}/${exam.id}`);
  // };

  useEffect(() => {
    fetchListCard();
  }, [router]);

  const [examStatus, setExamStatus] = useState<ExamStatusType>('initial');
  const [listQuestion, setListQuestion] = useState([]);

  const onSetExamStatus = (status: ExamStatusType) => {
    setExamStatus(status);
  };

  const onUpdateListQuestion = (questions) => {
    setListQuestion(questions);
  };
  useEffect(() => {
    setListQuestion(listQuestions);
  }, []);
  return (
    <div className="main-exam">
      {examStatus === 'reviewing' && <ExamResult listQuestion={listQuestion} />}
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
