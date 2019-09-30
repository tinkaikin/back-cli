<template>
  <div class="organization">
    <!-- 成员管理主页面 1.整体布局 2.其他分成一个一个组件-->
    <el-card class="organization__aside">
      <div class="aside-item">
        <el-input placeholder="请输入内容" prefix-icon="el-icon-search">
          <!-- v-model="input2" -->
        </el-input>
      </div>
      <!-- tab -->
      <div class="aside-item posr">
        <!-- v-model="activeName" @tab-click="handleClick" -->
        <el-tabs v-model="activeName">
          <el-tab-pane label="组织架构" name="first">
            <!-- taba组织架构 -->
            <div class="aside-item">成员</div>
            <!--  -->
            <el-menu default-active="/organization" router>
              <el-menu-item index="/organization">
                <i class="el-icon-user-solid"></i>
                <span slot="title">所有成员</span>
              </el-menu-item>
              <el-menu-item index="/organization/3">
                <i class="el-icon-user"></i>
                <span slot="title">新加入的成员</span>
              </el-menu-item>
              <el-menu-item index="/organization/4">
                <i class="el-icon-setting"></i>
                <span slot="title">未分配部门的成员</span>
              </el-menu-item>
            </el-menu>
          </el-tab-pane>
          <el-tab-pane label="企业组织" name="second">
              <!-- taba企业组织 -->
            <div class="aside-item">成员</div>
            <el-menu default-active="2">
              <el-menu-item index="2">
                <i class="el-icon-user-solid"></i>
                <span slot="title">所有成员</span>
              </el-menu-item>
              <el-menu-item index="3" disabled>
                <i class="el-icon-user"></i>
                <span slot="title">新加入的成员</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
              </el-menu-item>
            </el-menu>
          </el-tab-pane>
        </el-tabs>
      </div>
    </el-card>
    <el-card class="organization__main">
        <router-view></router-view>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'first'
    }
  }
}
</script>

<style lang="less" scoped>
@max: 1116px; //板心
.organization {
  display: flex;
  min-width: @max;
  max-width: @max;
  width: @max;
  margin: 0 auto;
  padding: 86px 0 16px;
  height: 100%;
  justify-content: space-between;
  align-items: stretch;
  .organization__aside {
    width: 286px;
    margin-right: 16px;
    & /deep/ .el-card__body {
      padding: 16px;
    }
  }
  .aside-item {
    height: 40px;
    display: flex;
    align-items: center;
    .el-input {
      height: 38px;
      margin-bottom: 8px;
    }
    .el-tabs {
      padding: 0 12px;
      width: 100%;
      position: absolute;
      top: 0px;
      i {
        margin-right: 10px;
        font-size: 16px;
      }
    }
    .el-menu {
      border-right: none;
    }
    .el-menu-item {
      padding: 0 !important;
      height: 40px;
      line-height: 40px;
    }
  }

  .organization__main {
    flex: 1;
    & /deep/ .el-card__body{
        padding: 0;
    }
  }
}
</style>
