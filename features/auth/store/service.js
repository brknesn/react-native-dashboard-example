import api from '../../../constants/Api'
import axiosInstance from '../../../http'

class AuthService {
  login(email, password) {
    return axiosInstance.post(`${api.login}`, { email, password })
  }
}
export default new AuthService()
