<!-- 列表页面 -->

<template>
  <div id="notebook-list">
    <h1>{{ msg }}</h1>
    <ul>
      <li><router-link to="/note/1">笔记本1</router-link></li>
      <li><router-link to="/note/2">笔记本2</router-link></li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: '这里是笔记本列表'
      }
    }
  }
</script>

<style scoped>
  h1 {
    color: aquamarine;
  }
</style>
