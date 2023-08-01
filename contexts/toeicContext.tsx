import { getheaderInfo } from '@api';
import React, { useContext, useEffect, useState } from 'react';

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
