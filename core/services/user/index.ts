import API from '../axiosInstance';
import { ENDPOINTS } from '@constants';

const { get } = API;

export const getWallet = async () => {
  return get(ENDPOINTS.USER_WALLET);
};