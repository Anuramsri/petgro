import { API_URL } from "../../routes/constants";

import axios from 'axios'

export const getToken = () =>{
    return window.localStorage.getItem('token');
}


// Login
export const userLogin = async (data:any)=>{
    console.log(data)
    return axios.post(API_URL + "/login",data)
}

export const userSignUp =  async (data:any) => {
    console.log(data)
    return axios.post(API_URL + "/register", data)
}


export const userDetails = async (data:any) => {
    return axios.post(API_URL + "/userDetails", data, {headers:{Authorization:getToken() || '{}'}})
}

export const updateUserdetails =  async (data:any) => {
    return axios.put(API_URL+ "updateUserDetails", data, {headers:{Authorization:getToken() || '{}'}})
}

export const petDetails = async (data:any) => {
    return axios.post(API_URL+ "/petDetails", data, {headers:{Authorization:getToken() || '{}'}})
}

export const updatepetdetails =  async (data:any) => {
    return axios.put(API_URL+ "updatePetDetails", data, {headers:{Authorization:getToken() || '{}'}})
}

