<template>
  <div class="home">
    <el-container>
      <el-header>
        <!-- 顶部导航 -->
        <c-nav />
      </el-header>
      <el-container>
        <el-aside width="200px">
          <!-- 左边导航 -->
          <c-aside />
        </el-aside>
        <!-- 主体部分 -->
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import CNav from '@/views/Nav'
import CAside from '@/views/Aside'

export default {
  name: 'home',
  components: {
    CNav,
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
// .el-header {
//   background-color: red;
// }
.el-container {
  height: 100%;
}
</style>
