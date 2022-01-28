<!-- 回收站详情页 -->

<template>
  <div id="trash-detail">
    <h1>{{ msg }} : {{ $route.params.noteId }}</h1>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: '回收站详情页'
      }
    }
  }
</script>

<style scoped>
  h1 {
    color: burlywood;
  }
</style>
