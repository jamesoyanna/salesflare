 import axios from 'axios';
 export const axiosInstance = axios.create({
   baseURL: 'https://salesflare-dashboard.herokuapp.com/api/',
 });
 
 
 export const API_BASE_URL = 'https://salesflare-dashboard.herokuapp.com/api/';
// export const ACCESS_TOKEN_NAME = "x-auth-token";
// export const DOWNLOAD_BASE_URL = "http://localhost:8888/download/";
//export const API_BASE_URL = 'use this when deploy';
export const ACCESS_TOKEN_NAME = 'x-auth-token';
export const DOWNLOAD_BASE_URL = '';
