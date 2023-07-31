import ExamMiniTest from '@containers/Exam/ExamMiniTest';
import MainLayout from '@ui/MainLayout';

const MiniTestPage = () => {
  return (
    <MainLayout className={'exam-page'}>
      <ExamMiniTest />
    </MainLayout>
  );
};

export default MiniTestPage;
