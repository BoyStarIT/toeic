import API from '../axiosInstance';
import { ENDPOINTS } from '@constants';

const { get, post, put } = API;

export const doLogin = async (postData: any) => {
  return post(ENDPOINTS.LOGIN, postData);
};

export const doLogout = async () => {
  return post(ENDPOINTS.LOGOUT);
};

export const postRegister = async (postData: any) => {
  return post(ENDPOINTS.REGISTER, postData);
};

export const putForgotPassword = async (data) => {
  return put(`${ENDPOINTS.FORGOTPASS}`, data);
};

export const postVerify = async (data) => {
  return post(`${ENDPOINTS.VERIFY}`, data);
};

export const putActivate = async (id) => {
  return put(`${ENDPOINTS.ACTIVATE}/${id}`);
};

export const putResetPassword = async (data) => {
  return put(`${ENDPOINTS.RESETPASS}`, data);
};

export const putChangePassword = async (data) => {
  return put(`${ENDPOINTS.CHANGEPASS}`, data);
};
