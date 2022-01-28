 import axios from 'axios';
 export const axiosInstance = axios.create({
   baseURL: 'http://localhost:8888/api/',
 });
 
 
 export const API_BASE_URL = "http://localhost:8888/api/";
// export const ACCESS_TOKEN_NAME = "x-auth-token";
// export const DOWNLOAD_BASE_URL = "http://localhost:8888/download/";
//export const API_BASE_URL = 'use this when deploy';
export const ACCESS_TOKEN_NAME = 'x-auth-token';
export const DOWNLOAD_BASE_URL = '';
