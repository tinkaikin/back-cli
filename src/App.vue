<template>
  <div id="app">
    <!-- 顶部导航 -->
    <c-nav />
    <router-view />
  </div>
</template>
<script>
import CNav from './views/Nav/index'
export default {
  components: {
    CNav
  }
}
</script>

<style lang="less">

</style>
