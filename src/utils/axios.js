import axios from 'axios'
import {
  getToken,
  removeToken
} from './auth'


const API = axios.create({
  timeout: 0,
  //   baseURL: "/foo",
  baseURL: process.env.VUE_APP_URL,
  headers: {
    'content-type': 'application/json; charset=UTF-8',
    'Accept': 'application/json'
  }
})

// 请求拦截
API.interceptors.request.use((config) => {
  const {
    url
  } = config
  if (
    url.startsWith('/user') &&
    !url.startsWith('/user/login')
  ) {
    // 添加请求头
    // config.headers.token = getToken()
  }
  return config

}, (err) => {
  console.log(err)
})

// 响应拦截
API.interceptors.response.use((response) => {
  const {
    status
  } = response.data
  if (status === 400) {
    // 此时，说明 token 失效，直接移除 token 即可
    removeToken()
  }
  return response

}, (err) => {
  console.log(err)
})

export default API
