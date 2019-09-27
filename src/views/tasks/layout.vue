<template>
  <div class="tasks">
    <c-nav />
    <!-- 顶部的tabe标签 -->
    <div class='container'>
      <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="任务" name="first"><c-task /></el-tab-pane>
          <el-tab-pane label="分享" name="second">分享</el-tab-pane>
          <el-tab-pane label="文件" name="third">文件</el-tab-pane>
          <el-tab-pane label="日程" name="fourth">日程</el-tab-pane>
          <el-tab-pane label="群聊" name="fourth1">群聊</el-tab-pane>
          <el-tab-pane label="概览" name="fourth2">概览</el-tab-pane>
          <el-tab-pane label="统计" name="fourth3"><c-statistic /></el-tab-pane>
      </el-tabs>
      <div class="tab-right">
        <div class="user" @click="userCollapse">
          <i class="el-icon-user"></i><span>1</span>
        </div>
        <div class="mun"  @click="meuCollapse">
          <i class="el-icon-s-operation"></i><span>菜单</span>
        </div>
      </div>

      <!-- 用户的展示 -->
      <div class="show-collapse" v-show="isUserCollapse">
        <div class="show-collapse__title">
          <span>项目成员</span>
          <span class="el-icon-close show-collapse__close" @click="isUserCollapse=false"></span>
        </div>
        <div class="show-collapse__body">
          <div class="show-collapse__body__seatch">
            <el-input placeholder="请输入内容"></el-input>
          </div>
          <ul class="show-collapse__body__list">
            <li class="addUser">
              <i class="el-icon-circle-plus-outline"></i>
              <span>邀请新成员</span>
            </li>
            <li class="userName">
              <i class="el-icon-circle-plus-outline"></i>
              <div class="member-info">
                <p>张明明 <span class="el-icon-picture-outline-round"></span></p>
                <p class="member-email"> accounts_5d897e9a6cadd10013920e68@mail.teambition.com </p>
              </div>
            </li>
            <li class="line"></li>
            <li class="addUser">
              <i class="el-icon-circle-plus-outline"></i>
              <span>邀请新成员</span>
            </li>
          </ul>
        </div>
      </div>
      <!-- 菜单的展示 -->
      <div class="show-collapse" v-show="isMeuCollapse">
        <div class="show-collapse__title">
          <span>项目成员</span>
          <span class="el-icon-close show-collapse__close" @click="isMeuCollapse=false"></span>
        </div>
        <div class="show-collapse__body">
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CNav from '@/views/Nav'

import CTask from './view/task' // 任务组件
import CStatistic from './view/statistic' // 统计组件
export default {
  components: {
    CNav,
    CTask,
    CStatistic
  },
  data () {
    return {
      activeName: 'first',
      isUserCollapse: false,
      isMeuCollapse: false
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    userCollapse () {
      this.isUserCollapse = !this.isUserCollapse
      this.isMeuCollapse = false
    },
    meuCollapse () {
      this.isMeuCollapse = !this.isMeuCollapse
      this.isUserCollapse = false
    }
  }
}
</script>

<style lang="less" scoped>
.tasks,.container,.el-tabs,
.el-tabs /deep/ .el-tabs__content,
.el-tab-pane{
  height: 97%;
}

.el-tabs /deep/ .el-tabs__nav-scroll{
    padding: 0 20px 0 50px;
}
.container{
  position: relative;
  top: 50px;
  background-color: #e5e5e5;
  & /deep/ .el-tabs__content{
    overflow: auto;
  }
  .tab-right{
    position: absolute;
    display: flex;
    align-items: center;
    top: 0;
    right: 20px;
    height: 40px;
    cursor: pointer;
    &>div{
      margin-left:15px;
      i{
        padding: 0 10px;
        font-size: 16px;
      }
    }
    .mun{
      color: #409EFF;
    }
  }

  & /deep/ .el-tabs__header{
    margin: 0;
    background-color: #fff;
  }
  // 用户展示
  .show-collapse{
    position: absolute;
    top: 40px;
    right: 0;
    width:350px;
    height: 100%;
    // background-color: #fff;
    background-color: #f7f7f7;
    box-shadow: -3px 0 3px rgba(0,0,0,.1);
    transition: width .6s ease;
    padding: 20px 15px;
    .show-collapse__title{
      height: 30px;
      border-bottom: 1px solid #ccc;
      // padding: 0 80px;
      color: #262626;
      font-size: 15px;
      font-weight: 700;
      // z-index: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      text-align: center;
      .show-collapse__close{
        float: right;
        margin-top: 5px;
        font-size: 16px;
      }
    }
    .show-collapse__body{
      width: 100%;
      .show-collapse__body__seatch{
        width: 100%;
        height: 40px;
        margin: 15px 0;
      }
      .show-collapse__body__list{
        width: 100%;
        li{
          height: 50px;
          padding: 5px;
          font-size: 14px;
          i{
            font-size: 50px;
            margin-right: 10px;
            vertical-align: middle;
            color: #fff;
            background-color: #1b9aee;
            border-radius: 50%;
          }
        }
        .addUser{
          color:#1b9aee;
        }
        .userName{
          display: flex;
          .member-info{
            padding: 5px 0;
             overflow: hidden;
            p{
              padding: 0;
              margin: 0;
            }
            .member-email{
              font-size: 12px;
              text-overflow: ellipsis;
              white-space: nowrap;
              color: #8c8c8c;
              font-weight: 400;
            }
          }
        }
        .line{
          width: 100%;
          height: 1px;
          background-color: #ccc;
          padding: 0;
          margin: 5px 0;
        }
      }
    }
  }
}

</style>
