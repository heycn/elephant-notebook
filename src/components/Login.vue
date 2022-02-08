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
            <div v-bind:class="{ show: isShowRegister }" class="register">
              <input type="text" v-model="register.username" placeholder="创建用户名" />
              <input type="password" v-model="register.password" placeholder="设置密码" />
              <p v-bind:class="{ error: register.isError }">{{ register.notice }}</p>
              <div class="button" @click="onRegister" title="最后一步，点击创建!">创建</div>
            </div>
            <div v-bind:class="{ show: isShowLogin }" class="login">
              <input type="text" v-model="login.username" placeholder="输入用户名" />
              <input type="password" v-model="login.password" placeholder="输入密码" />
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
  import Auth from '@/apis/auth'
  import Bus from '@/helpers/bus'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    data() {
      return {
        isShowLogin: true,
        isShowRegister: false,
        login: {
          username: '',
          password: '',
          notice: '请输入用户名和密码',
          isError: false
        },
        register: {
          username: '',
          password: '',
          notice: '创建账号后，要记住用户名和密码哦~',
          isError: false
        }
      }
    },

    methods: {
      ...mapActions({
        loginUser: 'login',
        registerUser: 'register'
      }),

      showLogin() {
        this.isShowLogin = true
        this.isShowRegister = false
      },
      showRegister() {
        this.isShowRegister = true
        this.isShowLogin = false
      },
      onRegister() {
        if (!/^[\w\u4e00-\u9fa5]{3,15}$/.test(this.register.username)) {
          this.register.isError = true
          this.register.notice = '用户名3~15个字符，仅限于字母数字下划线中文'
          return
        }
        if (!/^.{6,16}$/.test(this.register.password)) {
          this.register.isError = true
          this.register.notice = '密码长度为6~16个字符'
          return
        }

        this.registerUser({
          username: this.register.username,
          password: this.register.password
        })
          .then(() => {
            this.register.isError = false
            this.register.notice = ''
            this.$router.push({ path: 'notebooks' })
          })
          .catch(res => {
            this.register.isError = true
            this.register.notice = res.msg
          })
      },

      onLogin() {
        if (!/^[\w\u4e00-\u9fa5]{3,15}$/.test(this.login.username)) {
          this.login.isError = true
          this.login.notice = '用户名3~15个字符，仅限于字母数字中文下划线'
          return
        }
        if (!/^.{6,16}$/.test(this.login.password)) {
          this.login.isError = true
          this.login.notice = '密码长度为6~16个字符'
          return
        }

        this.loginUser({
          username: this.login.username,
          password: this.login.password
        })
          .then(() => {
            this.login.isError = false
            this.login.notice = ''
            this.$router.push({ path: 'notebooks' })
          })
          .catch(res => {
            this.login.isError = true
            this.login.notice = res.msg
          })
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
    background: rgba(0, 0, 0, 0.7);
    display: table;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    @media (max-width: 800px) {
      width: 250px;
      height: 250px;
      .main {
        display: none;
      }
    }
    width: 500px;
    height: 250px;
    margin: 0px auto;
    background-color: #f4f4f4;
    border-radius: 2px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.33);
    transition: all 0.25s;
    display: flex;

    .main {
      flex: 1;
      background: #0694f9 url(../assets/logo.png) center center no-repeat;
      background-size: 50%;
    }
    .form {
      width: 270px;
      border-left: 1px solid #ccc;
      overflow: hidden;
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
          color: #0694f9;
        }
      }

      .button {
        background-color: #0694f9;
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
        padding: 0px 20px;
        border-top: 1px solid #eee;
        overflow: hidden;
        height: 0;
        overflow: hidden;
        transition: all 0.25s;
        &.show {
          height: 180px;
        }
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
