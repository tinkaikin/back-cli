<template>
  <div class="top-nav">
    <div class="top-nav__log">放置log</div>
    <div class="top-nav__seatch">
      <el-input v-model="input" placeholder="请输入内容"></el-input>
    </div>
    <div class="top-nav__oth">
      <el-dropdown>
        <span class="el-dropdown-link">
          用户信息/图标
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-plus">升级</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-plus" divided>创建企业</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
          <el-dropdown-item icon="el-icon-check" divided>账号设置</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-check">账号设置</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-check" divided>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      input: ''
    }
  }
}
</script>

<style lang="less" scoped>
.top-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  // border-bottom: 1px solid #000;
  // box-shadow: 0 0 0 .2px;
  margin: 0 -20px;
  padding: 0 20px;
  box-shadow: 0px 0px 10px #ccc;
  &__log {
    width: 100px;
  }
  &__seatch {
    border-radius: 30px;
    overflow: hidden;
    border: 1px solid #8c8c8c;
    width: 252px;
    height: 40px;
    margin: 8px;
  }
  .el-input {
    color: #8c8c8c;
    font-size: 14px;
  }
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
