<template>
  <div class="top-nav">
    <!-- 左边 -->
    <div class="top-nav__log">放置log</div>
    <!-- 中间搜索框 -->
    <div class="top-nav__seatch">
      <div class="search-bar-mask" v-show="!isInputChage" @click="isInputChage=!isInputChage">
        <span class="el-icon-search"></span>
        <span class="search-bar-mask-text">搜索 小明的企业</span>
      </div>
       <div class="search-bar-mask select-input" v-show="isInputChage">
        <span class="el-icon-search"></span>
        <!-- 要添加一个 属性获取聚焦 根据  isInputChage 的值来添加-->
        <input type="text" class="top-nav__input" placeholder="搜索 小明的企业" @blur="isInputChage=!isInputChage">
      </div>

    </div>
    <!-- 右边其他 -->
    <div class="top-nav__bar-right">
      <div class="bar-right-newAdd">
        <span class="el-icon-circle-plus-outline"></span>
      </div>
      <div class="bar-right-my">我的</div>
      <div class="bar-right-icon">
        <span class="el-icon-goods"></span>
        <span class="el-icon-bell"></span>
        <span class="el-icon-document"></span>
        <span class="el-icon-question"></span>
      </div>
      <div class="upgrade-button">邀请</div>
      <div class="user-info" style="backgroundImage: url('https://tcs.teambition.net/thumbnail/111lb1d086704ec8f63c8d7abab719c86b33/w/100/h/100');"></div>
      <!-- <el-dropdown>
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
      </el-dropdown> -->
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      input: '',
      isInputChage: false
    }
  }
}
</script>

<style lang="less" scoped>
.top-nav {
  position: fixed;
  z-index: 999;
  background-color: #fff;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 -20px;
  padding: 0 16px;
  height: 48px;
  box-shadow: 0px 0px 10px #ccc;
  &__log {
    width: 100px;
  }
  &__seatch {
    position: relative;
    display: flex;
    justify-content: space-around;
    width: 280px;
    height: 32px;
    border-radius: 37px;
    background-color: #f7f7f7;
    .search-bar-mask{
      position: absolute;
      top: 6px;
      max-width: 200px;
      height: 20px;
      padding: 0 12px;
      color: #8c8c8c;
      user-select: none;
      .search-bar-mask-text{
        margin-left: 8px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      &.select-input{
        margin-left: -30px;
      }
    }
    .top-nav__input{
      padding-left:8px;
      outline: none;
      border: none;
      background:transparent;
      flex-grow: 1;
      font-size: 14px;
      color:#8c8c8c;
    }
  }
  &__bar-right{
    display: flex;
    color: #8c8c8c;
    .bar-right-newAdd{
      // width: 116px;
      display: flex;
      align-items: center;
      // height: 100%;
      min-width: 0;
      span{
        margin: 0 16px;
        color: #32b6ff;
        cursor: pointer;
        font-size: 18px;
      }
    }
    .bar-right-my{
      width: 60px;
      border-left: 1px solid #ccc;
      border-right: 1px solid #ccc;
      text-align: center;
      line-height: 28px;
    }
    .bar-right-icon span{
      padding: 0 15px;
      cursor: pointer;
      line-height: 28px;
      font-size: 18px;
    }
    .upgrade-button{
      display: flex;
      align-items: center;
      border-radius: 16px;
      height: 20px;
      font-size: 12px;
      padding: 4px 12px;
      margin-right: 12px;
      color: #fff;
      background: linear-gradient(to bottom right,#4276ff,#32b6ff);
      box-shadow: 0 0 2px 0 rgba(36,100,147,.2);
      cursor: pointer;
    }
    .user-info{
      width: 28px;
      height: 28px;
      border-radius: 50%;
      // display: flex;
      // align-items: center;
      background-color: #fff;
      background-size: cover;
      background-repeat: no-repeat;
      cursor: pointer;
    }
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
