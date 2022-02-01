// 从服务器获取数据

import request from '@/helpers/request'

const URL = {
  GET: '/notebooks',
  ADD: '/notebooks',
  UPDATE: '/notebooks/:id',
  DELETE: '/notebooks/:id'
}

export default {
  getAll() {
    return request(URL.GET)
  },

  updateNotebooks(notebookId, { title = '' } = { title: '' }) {
    return request(URL.UPDATE.replace(':id', notebookId), 'PATCH', { title })
  },

  deleteNotebook(notebookId) {
    return request(URL.DELETE.replace(':id', notebookId), DELETE)
  },

  addNotebook({ title = '' } = { title: '' }) {
    return request(URL.ADD, 'POST', { title })
  }
}
