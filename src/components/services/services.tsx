import { API_URL } from "../../routes/constants";

import axios from "axios";

export const getToken = () => {
  return window.localStorage.getItem("token");
};

// Login
export const userLogin = async (data: any) => {
  return axios.post(API_URL + "/user/login",data)
};

export const userSignUp = async (data: any) => {
  return axios.post(API_URL + "/user/signup", data);
};

export const updateUserDetails = async (data: any) => {
  return axios.post(API_URL + "/userDetails", data);
};

export const updateUser = async (data: any) => {
  return axios.put(API_URL + "updateUser", data, {
    headers: { Authorization: getToken() || "{}" },
  });
};

export const updatepetDetails = async (data: any) => {
  return axios.post(API_URL + "/petDetails", data);
};

export const updatepetdetails = async (data: any) => {
  console.log("coming here");
  return axios.put(API_URL + "updatePetDetails", data);
};
export const updateMedicalRecord = async (data: any) => {
  return axios.post(API_URL + "/updateMedicalRecord", data);
};
export const updateDeworm = async (data: any) => {
  return axios.put(API_URL + "updateDeworm", data);
};
