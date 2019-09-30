<template>
  <div class="skEdit-box">
    <el-button type="text" @click="dialogVisible = true">
      <slot>编辑</slot>
    </el-button>
    <!-- 弹框 -->
    <el-dialog
      title="自定义功能"
      :visible.sync="dialogVisible"
      width="822px"
      :before-close="handleClose"
    >
      <!-- 内容S -->
      <div class="sk-dialog">
        <div class="tin-style">
          <!-- 右边标题 -->
          <div class="tin-style__title k-style-1">
            <span>店铺装修:</span>
            <!-- 左边搜索 -->
            <div class="seatchBox">
              <div class="seatchBox_o">
                <!-- v-model="input4" -->
                <el-input placeholder="请输入内容">
                  <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
              </div>
            </div>
          </div>
          <div class="tin-style__content kai-style-1">
            <div class="t-style__item" v-for="n in 8" :key="n">
              <i class="el-icon-eleme" style="background-color: rgb(0, 191, 86);"></i>
              <i class="t-icon el-icon-circle-close"></i>
              <!-- <i class="t-icon el-icon-circle-plus-outline"></i> -->
              <span>发布商品</span>
            </div>
          </div>
          <p>最多选择8个哦</p>
        </div>
        <div class="d-content">
          <!-- 列表1 -->
          <div class="tin-style">
            <!-- 右边标题 -->
            <div class="tin-style__title">
              <span>店铺装修:</span>
            </div>
            <div class="tin-style__content">
              <div class="t-style__item" v-for="n in 8" :key="n">
                <i class="el-icon-eleme" style="background-color: rgb(0, 191, 86);"></i>
                <!-- <i class="t-icon el-icon-circle-close"></i> -->
                <i class="t-icon el-icon-circle-plus-outline"></i>
                <span>发布商品</span>
              </div>
            </div>
          </div>
          <!-- 列表1 -->
          <div class="tin-style">
            <!-- 右边标题 -->
            <div class="tin-style__title">
              <span>店铺装修:</span>
            </div>
            <div class="tin-style__content">
              <div class="t-style__item" v-for="n in 8" :key="n">
                <i class="el-icon-eleme" style="background-color: rgb(0, 191, 86);"></i>
                <!-- <i class="t-icon el-icon-circle-close"></i> -->
                <i class="t-icon el-icon-circle-plus-outline"></i>
                <span>发布商品</span>
              </div>
            </div>
          </div>
          <!-- 列表1 -->
          <div class="tin-style">
            <!-- 右边标题 -->
            <div class="tin-style__title">
              <span>店铺装修:</span>
            </div>
            <div class="tin-style__content">
              <div class="t-style__item" v-for="n in 8" :key="n">
                <i class="el-icon-eleme" style="background-color: rgb(0, 191, 86);"></i>
                <!-- <i class="t-icon el-icon-circle-close"></i> -->
                <i class="t-icon el-icon-circle-plus-outline"></i>
                <span>发布商品</span>
              </div>
            </div>
          </div>
          <!-- 列表1 -->
          <div class="tin-style">
            <!-- 右边标题 -->
            <div class="tin-style__title">
              <span>店铺装修:</span>
            </div>
            <div class="tin-style__content">
              <div class="t-style__item" v-for="n in 8" :key="n">
                <i class="el-icon-eleme" style="background-color: rgb(0, 191, 86);"></i>
                <!-- <i class="t-icon el-icon-circle-close"></i> -->
                <i class="t-icon el-icon-circle-plus-outline"></i>
                <span>发布商品</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 内容E -->
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确定(8)</el-button>
        <el-button @click="dialogVisible = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialogVisible: false
    }
  },
  methods: {
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    closeHandle () {
      console.log(123)
    },
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    }
  }
}
</script>

<style lang="less" scoped>
// 整体的弹框样式
.skEdit-box {
  & /deep/ .el-dialog__header {
    height: 50px;
    padding-bottom: 0;
    border-bottom: 1px solid #ccc;
    .el-dialog__title {
      font-size: 14px;
      line-height: 1;
      font-weight: 700;
      color: #333;
    }
  }
  .sk-dialog {
    margin: -10px 0 -30px;
  }
  & /deep/ .el-dialog__footer {
    padding: 20px;
  }
}

// 搜索
.seatchBox {
  text-align: right;
  .seatchBox_o {
    height: 30px;
    width: 190px;
    display: inline-block;
    & /deep/ input {
      height: 30px;
    }
    .el-input__icon {
      line-height: 30px;
    }
  }
}

// tin-style 共用的样式
.tin-style {
  .tin-style__title {
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .tin-style__content {
    width: 784px;
    height: 90px;
    padding-top: 12px;
  }
}
.tin-style .k-style-1 {
  margin-bottom: 8px;
  width: 784px;
}
.t-style__item {
  width: 98px;
  height: 62px;
  position: relative;
  text-align: center;
  display: inline-block;
  margin-bottom: 16px;
  i:first-child {
    display: block;
    width: 40px;
    height: 40px;
    margin: 0 auto;
    line-height: 40px;
    font-size: 30px;
  }
  .t-icon {
    position: absolute;
    top: -9px;
    right: 19px;
    font-size: 18px;
  }
  .el-icon-circle-close {
    color: red;
    // background-color: #fff;
    border-radius: 50%;
  }
  span {
    padding: 0 5px;
    margin-top: 8px;
    line-height: 14px;
  }
}

// kai-style 独立的样式
.tin-style .kai-style-1 {
  padding-top: 24px;
  background-color: #eee;
}
.tin-style{
  p{
    margin-left: 20px;
    font-size: 12px;
    color: #ff9f00;
    line-height: 17px;
  }
}

.d-content{
  width: 782px;
  height: 250px;
  overflow-y: auto;
  overflow-x: hidden;
  margin-top: 16px;
  .tin-style{
    height: 122px;
  }
}
</style>
