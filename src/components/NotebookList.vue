<!-- 笔记本列表页面 -->

<template>
  <div class="detail" id="notebook-list">
    <header>
      <a href="#" class="btn" @click="onCreate"><i class="iconfont icon-add"></i> 新建记事本</a>
    </header>
    <main>
      <div class="layout">
        <h3>笔记本列表({{ notebooks.length }})</h3>
        <div class="book-list">
          <router-link v-for="notebook in notebooks" to="/note/1" class="notebook">
            <div>
              <span class="iconfont icon-notebook"></span>
              {{ notebook.title }}
              <span>{{ notebook.noteCounts }}</span>
              <span class="action">编辑</span>
              <span class="action">删除</span>
              <span class="date">3天前</span>
            </div>
          </router-link>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import Auth from '@/apis/auth'
  import Notebooks from '@/apis/notebooks'

  export default {
    data() {
      return {
        notebooks: []
      }
    },

    created() {
      Auth.getInfo().then(res => {
        if (!res.isLogin) {
          this.$router.push({ path: '/login' })
        }
        this.notebooks = res.data
      })

      Notebooks.getAll().then(res => {
        this.notebooks = res.data
      })
    },

    methods: {
      onCreate() {
        console.log('创建')
      },
      onEdit() {
        console.log('编辑')
      },
      onDelete() {
        console.log('删除')
      }
    }
  }
</script>

<style lang="less" scoped>
  @import url(../assets/css/notebook-list.less);
</style>
