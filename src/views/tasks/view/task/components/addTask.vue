<template>
  <el-dialog title="提示"
  :visible.sync="dialogVisible"
  width="1200px"
  :before-close="handleClose"
  >
    <div class="task-centent">
        <div class="task-left">
            <div class="task-left__title">
                <div>
                    <el-input placeholder="请输入内容"></el-input>
                </div>
            </div>
            <div class="component-mount">
                <div class="component-mount__left">
                    <span class="el-icon-s-marketing"></span>
                    <span class="text">状态</span>
                </div>
                <div class="component-mount__right">
                    <div class="component-mount__cheacked">
                        <span class="el-icon-s-marketing"></span>
                        <span class="text">待处理</span>
                    </div>
                </div>
            </div>
            <div class="component-mount"></div>
            <div class="component-mount"></div>
            <div class="component-mount"></div>
            <div class="component-mount"></div>
            <div class="component-mount"></div>
            <div class="component-mount"></div>
            <div class="component-mount">
                <span class="el-icon-s-order"></span>
                <span class="text">子任务</span>
            </div>
            <div class="component-mount creator-toggler">
                <span class="el-icon-plus"></span>
                <span class="text">添加子任务</span>
            </div>
        </div>
        <div class="task-right">45</div>
    </div>
  </el-dialog>
</template>

<script>
export default {
  props: {
    dialogVisible: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  data () {
    return {
    }
  },
  methods: {
    handleClose (done) {
      this.$emit('dialogVisible', false)
    }
  }
}
</script>

<style lang="less" scoped>
.task-centent{
    display: flex;
    height: 630px;
    margin: -20px;
    border-top: 1px solid #ccc;
    .task-left{
        width: 760px;
        border-right: 1px solid #ccc;
        padding: 20px 20px 0 30px;
        .task-left__title{
            width: 655px;
            height: 40px;
            font-weight: 500;
            font-size: 20px;
            border-radius: 4px;
            line-height: 40px;
            background-color: #ccc;

        }
        // .task-left__anchor{

        // }
        .component-mount{
            width: 100%;
            display: flex;
            align-items: center;
            height: 36px;
            margin:12px 0;
            line-height: 36px;
            font-size:16px;
            color: #ccc;
            background-color: rgba(38,38,38,.05);
            .text{
                padding-left: 10px;
            }
            .component-mount__left{
                width: 127px;
            }
            .component-mount__right{
                padding: 0 5px;
                background-color: rgba(38,38,38,.05);
                .component-mount__cheacked{
                    width: 80px;
                }
            }
        }
        .creator-toggler{
            border: 1px solid #ccc;
            padding: 2px 0 2px 12px;
            box-sizing: border-box;
            color: #1b9aee;
            font-weight: 700;
        }
    }
    .task-right{
        flex: 1;
    }
}
</style>
