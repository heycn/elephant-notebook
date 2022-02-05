<!-- 笔记详情页面 -->

<template>
  <div id="note" class="detail">
    <NoteSidebar :curNote="curNote" @update:notes="val => (notes = val)" />
    <div class="note-detail">
      <div class="note-bar">
        <span> 创建日期：{{ curNote.createdAtFriendly }}</span>
        <span> 更新日期：{{ curNote.updatedAtFriendly }}</span>
        <span> {{ curNote.statusText }} </span>
        <span class="iconfont icon-delete"></span>
        <span class="iconfont icon-fullscreen"></span>
      </div>
      <div class="note-title">
        <input type="text" :value="curNote.content" placeholder="输入标题" />
      </div>
      <div class="editor">
        <textarea v-show="true" :value="curNote.content" placeholder="输入内容，支持 Markdown 语法"></textarea>
        <div class="preview markdown-body" v-html="html" v-show="false"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import Auth from '@/apis/auth'
  import NoteSidebar from '@/components/NoteSidebar.vue'

  export default {
    components: {
      NoteSidebar
    },

    data() {
      return {
        curNote: {},
        notes: []
      }
    },

    created() {
      Auth.getInfo().then(res => {
        if (!res.isLogin) {
          this.$router.push({ path: '/login' })
        }
      })
    },

    beforeUpdate(to, from, next) {
      this.curNote = this.notes.find(note => note.id == to.query.noteId)
      next()
    }
  }
</script>

<style lang="less" scoped>
  @import url(../assets/css/note-detail.less);

  #note {
    display: flex;
    align-items: stretch;
    background: #fff;
    flex: 1;
  }
</style>
