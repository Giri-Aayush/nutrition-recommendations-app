import axios from 'axios'

export const AUTHORIZATION = 'Authorization'

export const APIInstance = axios.create({
  baseURL: `http://localhost:4000/api`,
})
export const ML_APIInstance = axios.create({
  baseURL: `https://b46c-103-15-228-94.ngrok-free.app`,
})
