<template>
  <div class="member-item posr">
    <div class="member-item__avatar posa flex_row">
      <el-avatar :size="36" :src="src"></el-avatar>
      <span class="avatar__name ellipsis1">
        <slot>詹姆斯11111111111111111111111111111111111111111111</slot>
      </span>
    </div>
    <div class="member-item__team posa" v-if="tream">
      <span>.</span>
      PHP研发组
    </div>
    <div class="member-item__yaoqing posa">
        <p>XX邀请,最后登录于 2019/09/26</p>
        <p>查看最近加入项目</p>
    </div>
    <span class="member-item__yyz posa" v-if="false">拥有者</span>
    <span class="member-item__yyz posa" v-else>
      <el-dropdown>
        <span class="el-dropdown-link">
          成员
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item disabled>双皮奶</el-dropdown-item>
          <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default:
        'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
    },
    tream: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="less" scoped>
.member-item {
  padding: 0 24px;
  height: 60px;
  cursor: pointer;
  user-select: none;
  .member-item__avatar {
    top: 0;
    left: 24px;
    bottom: 0;
    margin: auto;
    width: 200px;
    justify-content: start;
    .avatar__name {
      max-width: 70%;
      margin-left: 16px;
    }
  }

  .member-item__team {
    left: 250px;
    top: 50%;
    transform: translateY(-50%);
    width: 20%;
  }
  .member-item__yaoqing {
    width: 300px;
    top: 50%;
    transform: translateY(-50%);
    left: 400px;
    bottom: 0;
    margin: auto;
      p:last-child{
          color: #808080;
      }
      p:first-child{
          color: #a6b2c8;
      }
  }
  .member-item__yyz {
    top: 50%;
    transform: translateY(-50%);
    right: 24px;
  }

  &:hover {
    background-color: #f5f5f5;
  }
}
</style>
