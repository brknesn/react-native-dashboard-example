import api from '../../../constants/Api'
import axiosInstance from '../../../http'

class OrderService {
  list() {
    return axiosInstance.get(`${api.orders}`)
  }

  print(id) {
    return axiosInstance.post(`${api.orders}/print`, { id })
  }
}
export default new OrderService()
