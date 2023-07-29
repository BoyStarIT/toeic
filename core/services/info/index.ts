import API from '../axiosInstance';
import { ENDPOINTS } from '@constants';

const { get } = API;

export const getheaderInfo = async () => {
  return get(ENDPOINTS.SKILL_HEADER);
};
