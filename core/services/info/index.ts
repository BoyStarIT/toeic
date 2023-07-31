import API from '../axiosInstance';
import { ENDPOINTS } from '@constants';

const { get } = API;

export const getheaderInfo = async () => {
  return get(ENDPOINTS.SKILL_HEADER);
};

export const getListExam = async (id) => {
  return get(`${ENDPOINTS.TOPIC_EXAM}/${id}`);
};

export const getListCard = async (id) => {
  return get(`${ENDPOINTS.EXAM_CARD}/${id}`);
};
export const getListCardMiniTest = async () => {
  return get(ENDPOINTS.MINI_TEST_CARD);
};
