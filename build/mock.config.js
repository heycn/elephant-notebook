// 无缝切换 生产环境和开发环境baseURL

const fs = require('fs')
const path = require('path')

const mockBaseURL = 'https://note-server.hunger-valley.com' // 本地测试地址 https://localhost:3000/
const realBaseURL = 'https://note-server.hunger-valley.com' // 线上地址

exports.config = function({ isDev = true } = { isDev: true }) {
  let fileTxt = `
  module.exports = {
    baseURL: '${isDev ? mockBaseURL : realBaseURL}'
  }
  `
  fs.writeFileSync(path.join(__dirname, '../src/helpers/config-baseURL.js'), fileTxt)
}
