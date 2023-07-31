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

export const postCreatedSkill = async (postData: any) => {
  return post(ENDPOINTS.SKILL, postData);
};

export const postCreatedTopic = async (postData: any) => {
  return post(ENDPOINTS.TOPIC, postData);
};

export const postCreatedExam = async (postData: any) => {
  return post(ENDPOINTS.EXAM, postData);
};

export const postForgotPassword = async (data) => {
  return post(ENDPOINTS.FORGOTPASS, data);
};

export const postBlockUser = async (data) => {
  return post(`${ENDPOINTS.USER_BLOCK}`, data);
};

export const postUnblockUser = async (data) => {
  return post(`${ENDPOINTS.USER_UNBLOCK}`, data);
};

export const putResetPassword = async (data) => {
  return put(`${ENDPOINTS.RESETPASS}`, data);
};

export const putChangePassword = async (data) => {
  return put(`${ENDPOINTS.CHANGEPASS}`, data);
};

export const putDeleteSkill = async (putData: any) => {
  return put(ENDPOINTS.SKILL_DELETE_MULTIPLE, putData);
};

export const putDeleteTopic = async (putData: any) => {
  return put(ENDPOINTS.TOPIC_DELETE_MULTIPLE, putData);
};

export const putDeleteExam = async (putData: any) => {
  return put(ENDPOINTS.EXAM_DELETE_MULTIPLE, putData);
};

export const putEditExam = async (putData: any) => {
  return put(ENDPOINTS.EXAM, putData);
};

export const putEditSkill = async (putData: any) => {
  return put(ENDPOINTS.EXAM, putData);
};

export const putEditTopic = async (putData: any) => {
  return put(ENDPOINTS.TOPIC, putData);
};

export const putEditUser = async (putData: any) => {
  return put(ENDPOINTS.ADMIN_EDIT_USERS, putData);
};
