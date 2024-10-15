import axios from 'axios'

const myBaseURL = 'http://localhost:3030'

const service = axios.create({
  baseURL: myBaseURL,
  timeout: 60 * 1000,
})

service.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    return Promise.reject(error)
  },
)

export default service
