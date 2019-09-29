<template>
  <el-menu
      router
      default-active="/dashboard"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#fff"
      text-color="#262626"
      active-text-color="#1b9aee"
    >
      <el-menu-item index="/dashboard">
        <i class="el-icon-menu"></i>
        <span slot="title">概况</span>
      </el-menu-item>
      <el-menu-item index="/">
        <i class="el-icon-menu"></i>
        <span slot="title">我的星标</span>
      </el-menu-item>
      <el-menu-item index="/2">
        <i class="el-icon-menu"></i>
        <span slot="title">历史查看</span>
      </el-menu-item>
      <el-menu-item index="/3">
        <i class="el-icon-menu"></i>
        <span slot="title">全部项目</span>
      </el-menu-item>
      <!-- 隐藏和显示 -->
      <template v-if="develop">
        <el-menu-item index="/4">
          <i class="el-icon-menu"></i>
          <span slot="title">我的参与</span>
        </el-menu-item>
        <el-menu-item index="/5">
          <i class="el-icon-menu"></i>
          <span slot="title">企业公开</span>
        </el-menu-item>
        <el-menu-item index="/6">
          <i class="el-icon-menu"></i>
          <span slot="title">未分组项目</span>
        </el-menu-item>
        <el-menu-item index="/7">
          <i class="el-icon-menu"></i>
          <span slot="title">已归档项目</span>
        </el-menu-item>
        <el-menu-item index="/8">
          <i class="el-icon-menu"></i>
          <span slot="title">回收站</span>
        </el-menu-item>
      </template>

      <el-menu-item @click="selectChage">
        <i :class="!develop?'el-icon-arrow-down':'el-icon-arrow-up'"></i>
        <span slot="title">{{ !develop? '更多':'收起'}}</span>
      </el-menu-item>
    </el-menu>
</template>

<script>
export default {
  data () {
    return {
      develop: false
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    selectChage () {
      this.develop = !this.develop
      console.log(this.develop)
    }
  }
}
</script>

<style lang="less" scoped>
.el-menu{
    // position: absolute;
    // top: 60px;
    // left: 0;
    height:100%;
    border-right:none;
    .is-active{
      background-color: rgba(27,154,238,.1)!important;
    }
    .el-menu-item, .el-submenu__title{
      height: 40px;
      line-height: 40px;
    }
}
</style>
