import axios from 'axios'
import api from './constants/Api'

const axiosInstance = axios.create({
  baseURL: api.baseUrl,
  headers: { 'content-type': 'application/json' },
})

export default axiosInstance
