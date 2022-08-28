import axiosInstance from '../http'

export default function setupAxios(store) {
  axiosInstance.interceptors.request.use(
    (config) => {
      const {
        auth,
      } = store.getState()
      if (auth.token) {
        config.headers.Authorization = `Bearer ${auth.token}`
      }
      console.log(auth, config)
      return config
    },
    (err) => console.log(err),
  )
}
