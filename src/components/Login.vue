<!-- 登录注册页面 -->

<template>
  <div id="login">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="main"></div>
          <div class="form">
            <div class="loginAndRegister">
              <h3 @click="showRegister" title="还没有账户？3步就能创建哦~">创建账户</h3>
              <h3 @click="showLogin" title="已有账户？现在登录吧!">立即登录</h3>
            </div>
            <div v-show="isShowRegister" class="register">
              <input type="text" v-model="register.username" placeholder="用户名" />
              <input type="password" v-model="register.password" placeholder="密码" />
              <p v-bind:class="{ error: register.isError }">{{ register.notice }}</p>
              <div class="button" @click="onRegister" title="最后一步，点击创建!">创建</div>
            </div>
            <div v-show="isShowLogin" class="login">
              <input type="text" v-model="login.username" placeholder="输入用户名" />
              <input type="password" v-model="login.password" placeholder="密码" />
              <p v-bind:class="{ error: login.isError }">{{ login.notice }}</p>
              <div class="button" @click="onLogin" title="点击登录">登录</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        isShowLogin: true,
        isShowRegister: false,
        login: {
          username: '',
          password: '',
          notice: '请输入用户名和密码',
          isError: false // isError 是来控制 notice 是否展示 默认隐藏
        },
        register: {
          username: '',
          password: '',
          notice: '创建账号后，要记住用户名和密码哦~',
          isError: false // 和 login 里一样 控制 notice 是否展示
        }
      }
    },
    methods: {
      showRegister() {
        this.isShowRegister = true
        this.isShowLogin = false
      },
      showLogin() {
        this.isShowLogin = true
        this.isShowRegister = false
      },
      onRegister() {
        let result1 = this.validUsername(this.register.username)
        if (!result1.isValid) {
          this.register.isError = true
          this.register.notice = result1.notice
          return
        }
        let result2 = this.validPassword(this.register.password)
        if (!result2.isValid) {
          this.register.isError = true
          this.register.notice = result2.notice
          return
        }
        // TODO
        // 等接口写好之后再写提交
        this.register.isError = false
        this.register.notice = ''
        console.log('别tm再点提交啦!用户注册的接口还写好啊!')
      },
      onLogin() {
        let result1 = this.validUsername(this.login.username)
        if (!result1.isValid) {
          this.login.isError = true
          this.login.notice = result1.notice
          return
        }
        let result2 = this.validPassword(this.login.password)
        if (!result2.isValid) {
          this.login.isError = true
          this.login.notice = result2.notice
          return
        }
        // TODO
        // 等接口写好之后再写提交
        this.login.isError = false
        this.login.notice = ''
        console.log('别tm再点啦!接口还写好啊!')
      },
      validUsername(username) {
        return {
          isValid: /^[a-zA-Z_0-9\u4e00-\u9fa5]{3,15}$/.test(username),
          notice: '用户名必须是3~15个字符，且限于字母数字中文下划线'
        }
      },
      validPassword(password) {
        return {
          isValid: /^.{6,16}$/.test(password),
          notice: '密码长度必须为6~16个字符'
        }
      }
    }
  }
</script>
<style lang="less" scoped>
  .modal-mask {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: table;
    transition: opacity 0.3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    @media (max-width: 1200px) {
      width: 500px;
      height: 250px;
    }
    @media (max-width: 600px) {
      width: 270px;
      height: 250px;
      .main {
        display: none;
      }
    }
    width: 600px;
    height: 300px;
    margin: 0px auto;
    background-color: #f4f4f4;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.25s ease;
    font-family: Helvetica, Arial, sans-serif;
    display: flex;

    .main {
      flex: 1;
      background: #36bc64 url(../assets/logo.png) center center no-repeat;
      background-size: 50%;
    }
    .form {
      width: 270px;
      border-left: 1px solid #ccc;

      .loginAndRegister {
        display: flex;
        justify-content: center;
        h3 {
          color: #666;
          padding: 12px 24px;
          font-weight: normal;
          font-size: 16px;
          cursor: pointer;
        }

        h3:hover {
          color: #2bb964;
        }
      }

      .button {
        background-color: #2bb964;
        height: 36px;
        line-height: 36px;
        text-align: center;
        font-weight: 600;
        color: #fff;
        border-radius: 4px;
        margin-top: 18px;
        cursor: pointer;
      }

      .login,
      .register {
        padding: 10px 20px;
        border-top: 1px solid #eee;

        input {
          display: block;
          width: 100%;
          height: 35px;
          line-height: 35px;
          padding: 0 6px;
          border-radius: 4px;
          border: 1px solid #ccc;
          outline: none;
          font-size: 14px;
          margin-top: 10px;
        }
        input:focus {
          border: 2px solid #9dcaf8;
        }

        p {
          font-size: 12px;
          margin-top: 10px;
          color: #444;
        }
        .error {
          color: red;
        }
      }
      .login {
        border-top: 0;
      }
    }
  }
</style>
