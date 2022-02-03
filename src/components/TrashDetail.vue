<!-- 回收站详情页 -->

<template>
  <div id="trash-detail">
    <h1>noteId : {{ $route.query.noteId }}</h1>
  </div>
</template>

<script>
  import Auth from '@/apis/auth'

  export default {
    data() {
      return {
        msg: '回收站详情页'
      }
    },

    created() {
      Auth.getInfo()
        .then(res => {
          if (!res.isLogin) {
            this.$router.push({ path: '/login'})
          }
        })
    }
  }
</script>

<style scoped>
  h1 {
    color: rgb(255, 145, 145);
  }
</style>
