import axios from 'axios'

const gaodeHttp = axios.create({
  baseURL: 'https://restapi.amap.com/v3',
  timeout: 1000
})

const mockHttp = axios.create({
  baseURL: 'http://127.0.0.1:4523/m1/4261823-0-default',
  timeout: 1000
})

export {
  gaodeHttp,
  mockHttp
}