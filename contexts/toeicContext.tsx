import { getheaderInfo } from '@api';
import { ROUTES } from '@constants';
import Config from '@root/config';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { Cookies } from 'react-cookie';
interface ToeicContextProps {
  topics: Array<TopicType>;
}
type TopicItemType = {
  topicId: string;
  topicName: string;
  slug: string;
};
type TopicType = {
  id: string;
  name: string;
  topics: Array<TopicItemType>;
};

export const ToeicContext = React.createContext<ToeicContextProps>({
  topics: [],
});

export const ToeicContextProvider = (props) => {
  const router = useRouter();
  const [topics, setTopics] = useState([]);

  const fetchHeaderInfo = async () => {
    try {
      const resp = await getheaderInfo();
      const error = resp.data?.error;
      const respData = resp.data?.responseData;
      if (error) {
        stop();
        // Message.error(error?.message ?? 'Something error! Try again later');
      } else {
        setTopics(respData);
      }
    } catch (error) {}
  };
  useEffect(() => {
    fetchHeaderInfo();
  }, []);
  useEffect(() => {
    const publicRouter = [ROUTES.WELCOME, ROUTES.SIGNIN, ROUTES.SIGNUP, ROUTES.FORGOTPASSWORD];
    const cookies = new Cookies();
    const accessToken = cookies.get(Config.AUTH_TOKEN_KEY);
    if (!publicRouter.includes(router.pathname) && !accessToken) {
      router.push(ROUTES.WELCOME);
      return;
    }
  });
  return (
    <ToeicContext.Provider
      value={{
        topics,
      }}
    >
      {React.Children.toArray(props.children)}
    </ToeicContext.Provider>
  );
};

export const useToeicContext = () => useContext(ToeicContext);
