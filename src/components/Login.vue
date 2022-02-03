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

  Auth.getInfo().then(res => {
    console.log(res)
  })

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

        Auth.register({
          username: this.register.username,
          password: this.register.password
        })
          .then(() => {
            this.register.isError = false
            this.register.notice = ''
            Bus.$emit('userInfo', { username: this.login.username })
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

        Auth.login({
          username: this.login.username,
          password: this.login.password
        })
          .then(res => {
            this.login.isError = false
            this.login.notice = ''
            Bus.$emit('userInfo', { username: this.login.username })
            this.$router.push({ path: 'notebooks' })
            this.$message.success(res.msg)
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
    background-color: rgba(0, 0, 0, 0.7);
    display: table;
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
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.33);
    transition: all 0.25s;
    display: flex;

    .main {
      flex: 1;
      background: #36bc64 url(../assets/logo.png) center center no-repeat;
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
