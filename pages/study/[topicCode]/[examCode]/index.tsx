import Exam from '@containers/Exam/Exam';
import MainLayout from '@ui/MainLayout';
import { GetServerSideProps } from 'next';

const ExamPage = ({ topicCode, examCode }) => {
  console.log('1111', {
    topicCode,
    examCode,
  });
  return (
    <MainLayout>
      <Exam />
    </MainLayout>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const topicCode = context?.query?.topicCode;
  const examCode = context?.query?.examCode;
  return {
    props: {
      topicCode,
      examCode,
    },
  };
};
export default ExamPage;
