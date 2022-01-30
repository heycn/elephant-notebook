// 用户请求接口

import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/x-www.form-urlencoded'
axios.defaults.baseURL = 'https://note-server.hunger-valley.com/' // 服务端线上地址
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

    type.toLowerCase() === 'get' ? (option.params = data) : (option.data = data)
    // if (type.toLowerCase() === 'get') {
    //   option.params = data
    // } else {
    //   option.data = data
    // }
    axios(option)
      .then(res => {
        res.status === 200 ? resolve(res.data) : reject(res.data)
        // if (res.status === 200) {
        //   resolve(res.data)
        // } else {
        //   reject(res.data)
        // }
      })
      .catch(err => {
        console.error({ msg: '请求失败' })
      })
  })
}
