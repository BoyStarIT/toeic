import { Col, Progress, Row } from 'antd';
import { ContentWrapper } from './Exam.style';
import { RightOutlined } from '@ant-design/icons';
import ExamResult from './ExamResult';
import { useEffect, useState } from 'react';
import ExamStart from './ExamStart';
import ExamView from './ExamView';
import { listQuestions } from './mockData';

type ExamStatusType = 'initial' | 'starting' | 'reviewing';
const Exam = () => {
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
        <ExamStart listQuestion={listQuestion} onUpdateListQuestion={onUpdateListQuestion} />
      )}
    </div>
  );
};

export default Exam;
