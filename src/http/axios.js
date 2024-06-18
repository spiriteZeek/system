import axios from 'axios'

const gaodeHttp = axios.create({
  baseURL: 'https://restapi.amap.com/v3',
  timeout: 1000
})

const mockHttp = axios.create({
  baseURL: 'http://127.0.0.1:4523/m1/4261823-0-default',
  timeout: 1000
})

mockHttp.interceptors.request.use(
  (config) => {
    const localToken = localStorage.getItem('token')
    if (config.url !== '/login' && localToken) {
      config.headers['token'] = localToken
    }
  return config
  }
) 

const selfServer = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    zgy: 'hahaha'
  }
})



export { gaodeHttp, mockHttp, selfServer }
