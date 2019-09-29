<template>
  <div class="home">
      <!-- 顶部导航 -->
      <!-- <c-nav /> -->
      <el-container class="contauner">
        <el-aside width="296px">
          <!-- 左边导航 -->
          <c-aside />
        </el-aside>
        <!-- 主体部分 -->
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import CNav from '@/views/Nav'
import CAside from '@/views/Aside'

export default {
  name: 'home',
  components: {
    // CNav,
    CAside
  }
}
</script>
<style lang="less" scoped>
.home {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.el-container {
  width: 100%;
  height: 100%;
  .el-header{
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
  }
}
.contauner{
  max-width: 1640px;
  margin: auto;
  padding-top: 90px;
  .el-aside{
    margin-right: 100px;
  }
  .el-main{
    min-width: 800px;
    padding: 0;
  }
}
</style>
