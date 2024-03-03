import axios from 'axios';

export const apiAxiosInstance = (baseUrl: string) => {
  const requestHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }

  const instance = axios.create({
    baseURL: baseUrl,
    withCredentials: true,
    headers: requestHeaders,
  })

  instance.interceptors.response.use(
    async (config) => {
      return config
    },
    async (error) => {
      const errors: any[] = []
      const status = error.response?.status || 500
      const message = error.response?.statusText || 'Request rejected'

      return Promise.reject({
        status: status,
        message: message,
        errors: errors,
      })
    },
  )

  return instance
}
