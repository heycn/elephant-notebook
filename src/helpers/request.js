// 用户请求接口

import axios from 'axios'
import baseURLConfig from './config-baseURL'
import { Message } from 'element-ui'

axios.defaults.headers.post['Content-Type'] = 'application/x-www.form-urlencoded'
axios.defaults.baseURL = baseURLConfig.baseURL // 生产环境和开发环境baseURL 无缝切换
axios.defaults.withCredentials = true

export default function request(url, type = 'GET', data = {}) {
  return new Promise((resolve, reject) => {
    let option = {
      url,
      method: type,
      validateStatus(status) {
        return (status >= 200 && status < 300) || status === 400
      }
    }

    type.toLowerCase() === 'get'
      ? (option.params = data)
      : (option.data = data)

    axios(option)
      .then(res => {
        if (res.status === 200) {
          resolve(res.data)
        } else {
          Message.error(res.data.msg)
          reject(res.data)
        }
      })
      .catch(err => {
        Message.error(res.data.msg)
        reject({ mes: '网络异常' })
      })
  })
}
