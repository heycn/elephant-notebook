<template>
  <div id="login">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        msg: '这是登录页面'
      }
    }
  }
</script>

<style scoped>
  h1 {
    color: red;
  }
</style>
