<!-- 侧边栏 -->

<template>
  <div id="sidebar">
    <avatar />
    <div class="icons">
      <router-link to="/note" title="笔记本"> <i class="iconfont icon-note"></i> </router-link>
      <router-link to="/notebooks" title="列表页"> <i class="iconfont icon-notebook"></i> </router-link>
      <router-link to="/trash" title="回收站"> <i class="iconfont icon-trash"></i> </router-link>
    </div>
    <div class="logout">
      <i class="iconfont icon-logout" @click="onLogout" title="退出当前登录"></i>
    </div>
  </div>
</template>

<script>
  import avatar from '@/components/Avatar.vue'
  import { mapActions } from 'vuex'

  export default {
    components: {
      avatar
    },

    methods: {
      ...mapActions(['logout']),

      onLogout() {
        this.logout({ path: '/login' })
      }
    }
  }
</script>

<style lang="less" scoped>
  #sidebar {
    position: relative;
    min-width: 78px;
    text-align: center;
    background: #353a5a;

    .icons {
      margin-top: 16px;

      a {
        padding: 18px 0;
        display: block;
      }
    }

    .router-link-active {
      background: #4a4e6b;
    }

    .logout {
      position: absolute;
      bottom: 32px;
      width: 100%;
      text-align: center;
      cursor: pointer;
    }
    .iconfont {
      color: #fff;
    }
  }
</style>
