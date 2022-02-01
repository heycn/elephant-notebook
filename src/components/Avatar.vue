<!-- 用户头像 -->

<template>
  <span :title="username">{{ initial }}</span>
</template>

<script>
  import Auth from '@/apis/auth'
  import Bus from '@/helpers/bus'

  export default {
    data() {
      return {
        username: ''
      }
    },

    created() {
      Bus.$on('userInfo', user => {
        this.username = user.username
      })

      Auth.getInfo().then(res => {
        if (res.isLogin) {
          this.username = res.data.username
        }
      })
    },

    computed: {
      initial() {
        return this.username.charAt(0)
      }
    }
  }
</script>

<style scoped>
  span {
    display: inline-block;
    width: 38px;
    height: 38px;
    text-align: center;
    line-height: 40px;
    border-radius: 50%;
    background: #eee;
    color: #353a5a;
    text-shadow: 1px 0 2px rgb(24, 18, 18);
    font-weight: 400;
    text-transform: uppercase;
    font-size: 22px;
    margin-top: 16px;
    cursor: default;
  }
</style>
