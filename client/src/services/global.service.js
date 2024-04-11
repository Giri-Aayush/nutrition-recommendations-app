import axios from 'axios'

export const AUTHORIZATION = 'Authorization'

export const APIInstance = axios.create({
  baseURL: `http://localhost:4000/api`,
})
