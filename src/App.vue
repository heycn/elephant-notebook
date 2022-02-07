<template>
  <div id="app">
    <sidebar />
    <router-view />
  </div>
</template>

<script>
  import sidebar from './components/Sidebar.vue'
  export default {
    name: 'App',
    components: {
      sidebar
    }
  }
</script>

<style>
  @import '//at.alicdn.com/t/font_3164871_p7c5ft5wn4j.css';
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html,
  body,
  #app {
    height: 100%;
  }
  body {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #f6f6f6;
  }
  a {
    text-decoration: none;
    color: #444;
  }
  ul,
  li {
    list-style: none;
  }
  .btn {
    color: #666;
    font-size: 12px;
    padding: 2px 4px;
    background: #fff;
    box-shadow: 0px 0px 2px 0px #ccc;
    border: none;
    cursor: pointer;
    display: inline-block;
  }
  #app {
    display: flex;
    align-items: stretch;
  }
</style>
