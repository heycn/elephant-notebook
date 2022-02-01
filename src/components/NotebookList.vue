<!-- 笔记本列表页面 -->

<template>
  <div class="detail" id="notebook-list">
    <header>
      <a href="#" class="btn" @click="onCreate"><i class="iconfont icon-add"></i> 新建记事本</a>
    </header>
    <main>
      <div class="layout">
        <h3>笔记本列表(10)</h3>
        <div class="book-list">
          <a href="#" class="notebook">
            <div>
              <span class="iconfont icon-notebook"></span>
              笔记本标题1
              <span>3</span>
              <span class="action" @click="onEdit">编辑</span>
              <span class="action" @click="onDelete">删除</span>
              <span class="date">3天前</span>
            </div>
          </a>
          <a href="#" class="notebook">
            <div>
              <span class="iconfont icon-notebook"></span>
              笔记本标题1
              <span>1</span>
              <span class="action">编辑</span>
              <span class="action">删除</span>
              <span class="date">5天前</span>
            </div>
          </a>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import Auth from '@/apis/auth'

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
