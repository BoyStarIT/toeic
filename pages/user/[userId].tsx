import UserPage from '@containers/user';
import Config from '@root/config';
import MainLayout from '@ui/MainLayout';
import { reactLocalStorage } from '@utils';

const UserProfilePage = () => {
  const UserData = reactLocalStorage.getObject(Config.USER_KEY);

  return (
    <MainLayout className="user-page">
      <UserPage UserData={UserData} />
    </MainLayout>
  );
};
export default UserProfilePage;
