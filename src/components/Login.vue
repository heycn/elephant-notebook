<!-- 登录注册页面 -->

<template>
  <div id="login">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="main"></div>
          <div class="form">
            <div class="loginAndRegister">
              <h3 title="还没有账户？3步就能创建哦~">创建账户</h3>
              <h3 title="已有账户？现在登录吧!">立即登录</h3>
            </div>
            <div v-show="true" class="register">
              <input type="text" placeholder="用户名" />
              <input type="password" placeholder="密码" />
              <div class="button" title="最后一步，点击创建!">创建</div>
            </div>

            <div v-show="false" class="login">
              <input type="text" placeholder="输入用户名" />
              <input type="password" placeholder="密码" />
              <div class="button" title="点击登录">登录</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import NoteDetail from './NoteDetail.vue'
  export default {
    name: 'Login',
    components: { NoteDetail }
  }
</script>
<style lang="less">
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
        font-weight: bold;
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
