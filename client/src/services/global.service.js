import axios from 'axios'

const API_URL = '...api url'

export const AUTHORIZATION = 'Authorization'

export const APIInstance = axios.create({
  baseURL: `${API_URL}`,
})
