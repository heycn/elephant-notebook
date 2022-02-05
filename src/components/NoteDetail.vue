<!-- 笔记详情页面 -->

<template>
  <div id="note" class="detail">
    <NoteSidebar />
    <div class="note-detail">
      <div class="note-empty" v-show="!curNote.id">请选择笔记</div>
      <div class="note-detail-ct" v-show="curNote.id">
        <div class="note-bar">
          <span> 创建日期: {{ curNote.createdAtFriendly }}</span>
          <span> 更新日期: {{ curNote.updatedAtFriendly }}</span>
          <span> {{ statusText }}</span>
          <span class="iconfont icon-delete" @click="deleteNote"></span>
          <span class="iconfont icon-fullscreen" @click="isShowPreview = !isShowPreview"></span>
        </div>
        <div class="note-title">
          <input
            type="text"
            v-model:value="curNote.title"
            @input="updateNote"
            @keydown="statusText = '正在输入...'"
            placeholder="输入标题"
          />
        </div>
        <div class="editor">
          <textarea
            v-show="isShowPreview"
            v-model:value="curNote.content"
            @input="updateNote"
            @keydown="statusText = '正在输入...'"
            placeholder="输入内容, 支持 markdown 语法"
          ></textarea>
          <div class="preview markdown-body" v-html="previewContent" v-show="!isShowPreview"></div>
        </div>
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
        msg: '笔记本详情列表'
      }
    },

    created() {
      Auth.getInfo().then(res => {
        if (!res.isLogin) {
          this.$router.push({ path: '/login' })
        }
      })
    }
  }
</script>

<style scoped>
  @import url(../assets/css/note-detail.less);

  #note {
    display: flex;
    align-items: stretch;
    background: #fff;
    flex: 1;
  }
</style>
