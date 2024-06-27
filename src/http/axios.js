import axios from 'axios'

const gaodeHttp = axios.create({
  baseURL: 'https://restapi.amap.com/v3',
  timeout: 1000
})

const mockHttp = axios.create({
  baseURL: 'http://127.0.0.1:3000/',
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
  baseURL: 'http://127.0.0.1:3000/',
  headers: {
    'Content-Type': 'multipart/form-data'
  }
})



export { gaodeHttp, mockHttp, selfServer }
