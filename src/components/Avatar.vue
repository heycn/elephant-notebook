<!-- 用户头像 -->

<template>
  <span :title="username">{{ initial }}</span>
</template>

<script>
  import Auth from '@/apis/auth'

  export default {
    data() {
      return {
        username: ''
      }
    },

    created() {
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
    width: 36px;
    height: 36px;
    text-align: center;
    line-height: 36px;
    border-radius: 50%;
    background: #eee;
    color: #353a5a;
    text-shadow: 1px 0 2px rgb(24, 18, 18);
    font-weight: 400;
    text-transform: uppercase;
    font-size: 24px;
    margin-top: 16px;
    cursor: default;
  }
</style>
