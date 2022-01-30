import request from '@/helpers/request'

const URl = {
  REGISTER: '/auth/register',
  LOGIN: '/auth/login',
  LOGOUT: '/auth/logout',
  GET_INFO: '/auth'
}

export default {
  register({ username, password }) {
    return request(URl.REGISTER, 'POST', { username, password })
  },
  login({ username, password }) {
    return request(URl.LOGIN, 'POST', { username, password })
  },
  logout() { return request(URl.LOGOUT) },
  getInfo() { return request(URl.GET_INFO) }
}
