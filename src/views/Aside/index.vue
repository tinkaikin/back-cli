<template>
  <el-menu
      router
      default-active="/"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#fff"
      text-color="#262626"
      active-text-color="#1b9aee">
      <!-- <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu> -->
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
      <!-- <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item> -->
    </el-menu>
</template>

<script>
export default {
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
.el-menu{
    // position: absolute;
    // top: 60px;
    // left: 0;
    height:100%;
}
</style>
