<template>
  <div id="sidebar">
    <div class="icons">
      <router-link to="/note/1" title="笔记"> <i class="iconfont icon-note"></i> </router-link>
      <router-link to="/notebooks" title="笔记本"> <i class="iconfont icon-notebook"></i> </router-link>
      <router-link to="/trash/2" title="回收站"> <i class="iconfont icon-trash"></i> </router-link>
    </div>
    <div class="logout" @click="onLogout">
      <i class="iconfont icon-logout"></i>
    </div>
  </div>
</template>

<style scoped>
  #sidebar {
    position: relative;
    max-width: 56px;
    text-align: center;
    background: #353a5a;
  }

  .icons {
    margin-top: 16px;
  }

  .icons a {
    padding: 6px 0;
    display: block;
  }

  .icons .router-link-active {
    background: #4a4e6b;
  }

  .logout {
    position: absolute;
    bottom: 20px;
    widows: 100%;
    text-align: center;
    cursor: pointer;
  }

  .iconfont {
    color: #fff;
  }
</style>
