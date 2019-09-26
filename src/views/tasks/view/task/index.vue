<template>
  <el-container class="task">
    <!-- 左边nav -->
    <el-aside :width="isCollapse? '300px':'0'">
      <el-menu
        router
        default-active="/task"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <div class="seatch">
          <el-input placeholder="请输入内容"></el-input>
        </div>
        <div class="title title-b">
          <span>任务分组</span>
          <i class="el-icon-plus"></i>
        </div>
        <el-menu-item index="/task">
          <div>
            <span slot="title">任务 . 1/6</span>
          </div>
          <!-- 任务 - 弹框 -->
          <div class="dropdown-menu">
            <el-dropdown trigger="click">
              <i class="el-icon-more"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
                <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-check">蚵仔煎</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-menu-item>
        <div class="separator__smNA"></div>
        <div class="title title-b">
          <span>视图</span>
          <i class="el-icon-plus"></i>
        </div>
        <!-- 跳转所有任务 -->
        <el-menu-item index="/all">
          <div>
            <i class="el-icon-document"></i>
            <span slot="title">所有任务</span>
          </div>
          <div class="dropdown-menu">
            <el-dropdown>
              <i class="el-icon-more"></i>
            </el-dropdown>
          </div>
        </el-menu-item>
        <!-- 跳转今天的任务 -->
        <el-menu-item index="/today">
          <div>
            <i class="el-icon-setting"></i>
            <span slot="title">今天的任务</span>
          </div>
          <div class="dropdown-menu">
            <el-dropdown>
              <i class="el-icon-more"></i>
            </el-dropdown>
          </div>
        </el-menu-item>
        <!-- 跳转未完成的任务 -->
        <el-menu-item index="/unfinished">
          <div>
            <i class="el-icon-full-screen"></i>
            <span slot="title">未完成的任务</span>
          </div>
          <div class="dropdown-menu">
            <el-dropdown>
              <i class="el-icon-more"></i>
            </el-dropdown>
          </div>
        </el-menu-item>
        <!-- 跳转已完成的任务 -->
        <el-menu-item index="/finished">
          <div>
            <i class="el-icon-copy-document"></i>
            <span slot="title">已完成的任务</span>
          </div>
          <div class="dropdown-menu">
            <el-dropdown>
              <i class="el-icon-more"></i>
            </el-dropdown>
          </div>
        </el-menu-item>
        <!-- 跳转待认领的任务 -->
        <el-menu-item index="/await">
          <div>
            <i class="el-icon-user"></i>
            <span slot="title">待认领的任务</span>
          </div>
          <div class="dropdown-menu">
            <el-dropdown>
              <i class="el-icon-more"></i>
            </el-dropdown>
          </div>
        </el-menu-item>
        <!-- 跳转我执行的任务 -->
        <el-menu-item index="/performance">
          <div>
            <i class="el-icon-star-off"></i>
            <span slot="title">我执行的任务</span>
          </div>
          <div class="dropdown-menu">
            <el-dropdown>
              <i class="el-icon-more"></i>
            </el-dropdown>
          </div>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <!-- 中间部分 -->
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
import ElDropdown from './components/el-dropdown'
export default {
  components: {
    ElDropdown
  },
  data () {
    return {
      isCollapse: true // true为展开，false为隐藏 todo
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="less" scoped>
.el-main {
  padding: 15px 20px;
  background-color: #f7f7f7;
}
.task {
  height: 100%;
}
.el-menu {
  height: 100%;
  .el-menu-item {
    height: 40px;
    line-height: 40px;
    display: flex;
    justify-content: space-between;
    position: relative;
    .dropdown-menu {
      position: absolute;
      top: 0;
      right: 20px;
    }
  }
  .seatch,
  .title {
    width: 260px;
    height: 40px;
    margin: 10px 20px;
    line-height: 40px;
  }
  .title-b{
    display: flex;
    justify-content: space-between;
  }
  .seatch {
    margin-top: 20px;
  }
  .title {
    span {
      font-weight: 700;
      color: #262626;
    }
  }
}

.el-icon-plus {
  font-size: 16px;
  margin-top: 15px;
  fill: #8c8c8c;
  color: #8c8c8c;
}

.separator__smNA {
  width: 260px;
  height: 1px;
  background-color: #ccc;
  margin: 10px auto 0;
}
</style>
