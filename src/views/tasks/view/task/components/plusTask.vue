<template>
  <!-- 封装一个 添加任务的组件  一个+号 有独立的功能-->
  <div class="plus-task">
    <div class="task-card-body add" @click="isPlusTask = true">
      <i class="el-icon-plus"></i>
    </div>
    <!-- 添加页面 -->
    <el-dialog title="提示" :visible.sync="isPlusTask" width="600px" :before-close="handleClose">
      <div class="plus-content">
        <!-- 下拉选项 -->
        <div class="xiala">
          <img src width="30" height="30" alt />
          <span>12312</span>
          <i class="el-icon-arrow-down"></i>
        </div>
        <!-- 任务标题 textaer  v-model="form.desc"-->
        <div class="textarea">
          <el-input placeholder="任务标题" type="textarea"></el-input>
        </div>
        <!-- 这将是一个组件 -->
        <div class="task-component"></div>
        <!-- 更多 -->
        <div class="gengduo">
          <i class="el-icon-more"></i>
          <span>更多</span>
        </div>
        <!-- 参与者 -->
        <div class="canyuz">
          <div class="canyuz__box">
            <div class="canyuUser">
              参与者 . 1
              <i class="el-icon-question"></i>
            </div>
            <div class="canyuImg">
              <div class="img"></div>
              <img src alt />
              <button>+</button>
            </div>
          </div>
        </div>
        <!-- 底部 -->
        <div class="footer">
          <div class="gongkai">
            <div class="gonkai_cod">
              <i class="el-icon-pie-chart"></i>
              <span>公开模式</span>
            </div>
            <div class="gonkai_c">所有成员可见</div>
          </div>
          <div class="right">
            <div class="next">完成并创建下一个</div>
            <div class="wancheng" @click="wanchengFn">完成</div>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isPlusTask: false
    }
  },
  methods: {
    // 关闭弹框前触发的回调
    handleClose (data) {
      console.log(data)
      this.isPlusTask = false
    },
    // 点击完成触发回调
    wanchengFn () {
      this.isPlusTask = false
    }
  }
}
</script>

<style lang="less" scoped>
.task-card-body {
  width: 100%;
  // height: 45px;
  line-height: 45px;
  background-color: #fff;
  padding-left: 15px;
  box-sizing: border-box;
  white-space: normal;
  border-radius: 4px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  margin-top: 10px;
  overflow: hidden;
  position: relative;
  .close {
    line-height: 30px;
    margin-bottom: 10px;
    text-indent: 2em;
    span {
      font-size: 12px;
      padding: 3px 6px;
      color: #fff;
      background-color: #e62412;
      border-radius: 2px;
    }
  }
  .hoverColor {
    position: absolute;
    top: 0;
    left: 0px;
    width: 0px;
    height: 100%;
    transition: width 218ms ease-in;
  }
  &:hover .hoverColor {
    width: 10px;
    background-color: #8c8c8c;
  }
  .orangeColor {
    width: 5px;
    background-color: #fa8c15;
  }
  .warningColor {
    width: 5px;
    background-color: #e62412;
  }
  &:hover .orangeColor {
    width: 10px;
    background-color: #fa8c15;
  }
  &:hover .warningColor {
    width: 10px;
    background-color: #e62412;
  }
  .is-checked /deep/ .el-checkbox__inner {
    background-color: #8c8c8c;
    border-color: #8c8c8c;
    opacity: 0.5;
  }
  .is-checked /deep/ .el-checkbox__label {
    color: #8c8c8c;
    opacity: 0.5;
  }
}
.add {
  text-align: center;
  height: 28px;
  line-height: 28px;
  cursor: pointer;
  i {
    font-size: 16px;
  }
}
// 弹框的样式
.plus-task /deep/ .el-dialog__header {
  text-align: center;
}
.plus-content {
  margin: -20px;
  border-top: 1px solid #ccc;
  padding: 0 15px;
  .xiala {
    display: flex;
    align-items: center;
    height: 30px;
    margin: 12px 0;
    img {
      width: 30px;
      height: 30px;
      background-color: #ccc;
    }
    span {
      margin: 0 10px;
    }
  }
  .textarea {
    height: 80px;
    & /deep/ textarea {
      height: 80px;
    }
  }
  .task-component {
    height: 70px;
    border-bottom: 1px solid #ccc;
  }
  .gengduo {
    height: 60px;
    display: flex;
    align-items: center;
    span {
      margin-left: 10px;
    }
  }
  .canyuz {
    display: flex;
    align-items: center;
    height: 100px;
    margin: 0 -15px;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    .canyuz__box {
      height: 60px;
      width: 100%;
      margin: 0 15px;
      .canyuUser {
        color: #595959;
        font-weight: 700;
        height: 20px;
        margin-bottom: 10px;
      }
      .canyuImg {
        display: flex;
        height: 30px;
        .img {
          border-radius: 50%;
          width: 30px;
          height: 30px;
          background-color: red;
        }
        button {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          margin-left: 10px;
          border: none;
          background-color: #1b9aee;
          font-size: 24px;
          font-weight: 500;
          line-height: 30px;
          color: #fff;
        }
      }
    }
  }
  .footer {
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .gongkai {
      height: 40px;

      .gonkai_cod {
        height: 20px;
        display: flex;
        align-items: center;
        span {
          padding-left: 10px;
          font-size: 12px;
        }
      }
      .gonkai_c {
        padding-left: 20px;
        height: 20px;
        line-height: 20px;
        font-size: 12px;
      }
    }
    .right {
      display: flex;
      align-items: center;
      text-align: center;
      .next {
        border-radius: 5px;
        width: 136px;
        height: 40px;
        line-height: 40px;
        color: #bfbfbf;
        border: 1px solid #bfbfbf;
        cursor: pointer;
        margin-right: 10px;
      }
      .wancheng {
        border-radius: 5px;
        width: 100px;
        height: 40px;
        line-height: 40px;
        border: 1px solid #d9d9d9;
        cursor: pointer;
        color: #fff;
        background-color: #d9d9d9;
      }
    }
  }
}
</style>
