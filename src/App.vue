<template>
  <div id="app">
    <!-- 顶部导航 -->
    <c-nav />
    <div id="main">
      <router-view />
    </div>
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

<style lang="less" scoped>
  @pc-min-width:1200px; // pc端 最小宽度
  #app{
    min-width: @pc-min-width;
    width: 100%;
  }
  #main{
    height: 100%;
  }

</style>
