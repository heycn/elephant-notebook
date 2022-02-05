<template>
  <div class="note-sidebar">
    <el-dropdown class="notebook-title" @click="handleCommand" placement="bottom">
      <span class="el-dropdown-link">
        我的笔记本
        <i class="iconfont icon-down" />
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item v-for="notebook in notebooks" :key="notebook" :command="notebook.id">
          {{ notebook.title }}
        </el-dropdown-item>
        <el-dropdown-item command="trash">回收站</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <span class="btn add-note">添加笔记</span>
    <div class="menu">
      <div>更新时间</div>
      <div>标题</div>
    </div>
    <ul class="notes">
      <li v-for="note in notes" :key="note">
        <router-link :to="`/note?noteId=${note.id}`">
          <span class="date">{{ note.updatedAtFriendly }}</span>
          <span class="title">{{ note.title }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import Notebooks from '@/apis/notebooks'

  export default {
    created() {
      Notebooks.getAll().then(res => {
        this.notebooks = res.data
      })
    },

    data() {
      return {
        notebooks: [],
        notes: [
          { id: 11, title: '第1个笔记', updatedAtFriendly: '刚刚' },
          { id: 12, title: '第2个笔记', updatedAtFriendly: '3分钟前' }
        ]
      }
    },

    methods: {
      handleCommand(data) {
        console.log(data)
      }
    }
  }
</script>

<style lang="less" scoped>
  @import url(../assets/css/note-sidebar.less);
</style>
