<template>
  <div class="router-task">
    <!-- 顶部 -->
    <div class="title">
      <div class="title-right">
        <i class="el-icon-s-fold"></i>任务
      </div>
      <div class="title-left">
      <!-- 下拉选项框 -->
        <el-dropdown trigger="click">
          <span>看板 <i class="el-icon-arrow-down"></i></span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item disabled>双皮奶</el-dropdown-item>
            <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <el-dropdown trigger="click">
          <span>排序 <i class="el-icon-arrow-down"></i></span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
            <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-check">蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <el-dropdown trigger="click">
          <span>筛选 <i class="el-icon-arrow-down"></i></span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
            <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-check">蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <el-dropdown trigger="click">
          <span class="el-icon-more"></span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
            <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-check">蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <!-- 内容区域 -->
    <div class="workspace">
      <div class="workspace__item">
        <div class="workspace__item__title">
            <div>
              <span class="text">待处理</span>
              <span class="number">2</span>
            </div>
            <i class="el-icon-more"></i>
        </div>
        <div class="workspace__item-center">
          <!-- 一个小模块 -->
          <div class="task-card-body" @click.stop="handleDialog">
            <el-checkbox >这是分配给同伴的任务</el-checkbox>
            <!-- 普通颜色 -->
            <div class="hoverColor"></div>
            <!-- 橙色 -->
            <!-- <div class="hoverColor orangeColor"></div> -->
            <!-- 红色 -->
            <!-- <div class="hoverColor warningColor"></div> -->
          </div>
          <!-- 添加的模块 -->
          <div class="task-card-body add">
            <i class="el-icon-plus"></i>
          </div>
        </div>
      </div>
      <div class="workspace__item">
        <div class="workspace__item__title">
            <div>
              <span class="text">进行中</span>
              <span class="number">3</span>
            </div>
            <i class="el-icon-more"></i>
        </div>
        <div class="workspace__item-center">
          <!-- 一个小模块 -->
          <div class="task-card-body" @click.stop="handleDialog">
            <el-checkbox >橙色表示：紧急的任务</el-checkbox>
            <!-- 普通颜色 -->
            <!-- <div class="hoverColor"></div> -->
            <!-- 橙色 -->
            <div class="hoverColor orangeColor"></div>
            <!-- 红色 -->
            <!-- <div class="hoverColor warningColor"></div> -->
          </div>
          <!-- 一个小模块 -->
          <div class="task-card-body" @click.stop="handleDialog">
            <el-checkbox >红色表示：非常紧急的任务</el-checkbox>
            <!-- 普通颜色 -->
            <!-- <div class="hoverColor"></div> -->
            <!-- 橙色 -->
            <!-- <div class="hoverColor orangeColor"></div> -->
            <!-- 红色 -->
            <div class="hoverColor warningColor"></div>
          </div>
          <!-- 截至的模块 -->
          <div class="task-card-body" @click.stop="handleDialog">
            <el-checkbox >这条任务已经逾期了</el-checkbox>
            <!-- 普通颜色 -->
            <div class="hoverColor"></div>
            <!-- 橙色 -->
            <!-- <div class="hoverColor orangeColor"></div> -->
            <!-- 红色 -->
            <!-- <div class="hoverColor warningColor"></div> -->
            <div class="close" >
              <span>周一截止</span>
            </div>
          </div>
          <!-- 添加的模块 -->
          <div class="task-card-body add">
            <i class="el-icon-plus"></i>
          </div>
        </div>
      </div>
      <div class="workspace__item">3</div>
    </div>
    <add-task :dialogVisible='dialogVisible' @dialogVisible='callback'></add-task>
  </div>
</template>

<script>
import addTask from '../components/addTask'
export default {
  components: {
    addTask
  },
  data () {
    return {
      dialogVisible: false
    }
  },
  methods: {
    // 弹出任务详情框
    handleDialog () {
      this.dialogVisible = true
    },
    // 接收到关闭弹出框
    callback (value) {
      this.dialogVisible = value
    }
  }
}
</script>

<style lang="less" scoped>
.router-task{
  height: 90%;
  .title{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 0 0 auto;
    height: 40px;
    color: #8c8c8c;
    i{
      font-size: 20px;
      vertical-align: middle;
    }
    span{
      vertical-align: middle;
    }
    .title-right{
      i{
        margin-right: 10px;
      }
    }
    .title-left{
      span{
        padding: 0 15px;
        cursor: pointer;
      }
    }
  }
  .workspace{
    width: 100%;
    height: 100%;
    display: flex;
    margin-top: 10px;
    .workspace__item{
      width: 275px;
      margin-right: 20px;
      .workspace__item__title{
        display: flex;
        justify-content: space-between;
        .text{
          font-size: 14px;
          font-weight: 700;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .number{
          flex-shrink: 0;
          font-size: 12px;
          color: #595959;
          margin-left: 12px;
        }
        i{
          color: #bfbfbf;
          cursor: pointer;
          padding: 5px;
          font-size: 16px;
        }
      }
      .workspace__item-center{
        width: 100%;
        .task-card-body{
          width: 100%;
          // height: 45px;
          line-height: 45px;
          background-color: #fff;
          padding-left: 15px;
          box-sizing: border-box;
          white-space: normal;
          border-radius: 4px;
          box-shadow: 0 1px 2px 0 rgba(0,0,0,.1);
          margin-top: 10px;
          overflow: hidden;
          position: relative;
          .close{
            line-height: 30px;
            margin-bottom: 10px;
            text-indent: 2em;
            span{
              font-size: 12px;
              padding: 3px 6px;
              color: #fff;
              background-color: #e62412;
              border-radius: 2px;
            }
          }
          .hoverColor{
            position: absolute;
            top: 0;
            left: 0px;
            width: 0px;
            height: 100%;
            transition: width 218ms ease-in;
          }
          &:hover .hoverColor{
            width: 10px;
            background-color: #8c8c8c;
          }
          .orangeColor{
            width: 5px;
            background-color: #fa8c15;
          }
          .warningColor{
            width: 5px;
            background-color: #e62412;
          }
          &:hover .orangeColor{
            width: 10px;
            background-color: #fa8c15;
          }
          &:hover .warningColor{
            width: 10px;
            background-color: #e62412;
          }
          .is-checked /deep/ .el-checkbox__inner{
            background-color:  #8c8c8c;
            border-color:  #8c8c8c;
            opacity: .5;
          }
          .is-checked /deep/ .el-checkbox__label{
            color: #8c8c8c;
            opacity: .5;
          }
        }
        .add{
          text-align: center;
          height: 28px;
          line-height: 28px;
          cursor: pointer;
          i{
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>
