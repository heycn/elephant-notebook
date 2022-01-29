<!-- 用户头像 -->

<template>
  <span :title="user.username">{{ slug }}</span>
</template>

<script>
  export default {
    data() {
      return {
        user: {
          username: 'chennan'
        },
        slug: 'C'
      }
    }
  }
</script>

<style scoped>
  span {
    display: inline-block;
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 42px;
    border-radius: 50%;
    border: 1px solid #f4f4f4;
    background: #999;
    color: #f4f4f4;
    text-shadow: 1px 0 1px #333;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 24px;
    margin-top: 16px;
    cursor: default;
  }
</style>
