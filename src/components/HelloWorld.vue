<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>这是啥</h2>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: '哦哦哦'
      }
    }
  }
</script>

<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }
</style>
