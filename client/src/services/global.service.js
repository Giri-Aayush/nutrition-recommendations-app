import axios from 'axios'

const API_URL = 'http://localhost:4000/api'

export const AUTHORIZATION = 'Authorization'

export const APIInstance = axios.create({
  baseURL: `${API_URL}`,
})
