<template>
  <div>
    <div class="group box1-group">
      <!-- 标题部分是公共部分 -->
      <div slot="header" class="list-title-bar">
        <span>星标分组</span>
        <div class="list-tools">
          <i class="el-icon-document-copy"></i>
          <i class="el-icon-bottom"></i>
        </div>
      </div>
      <!-- 内容区域 -->
      <div class="group__tabs">
        <!-- tab-bar__1XL4  上面的标题 我参与的-->
        <div class="group__tab-bar">
          <span class="item">我参与的</span>
        </div>
        <div class="box-group">
          <div class="group__tabs-img code">
            <img :src="src" alt="">
            <div class="project-grid-card__header">
              <div class="project-grid-card__header__top">
                <span>示例代码</span>
                <i class="el-icon-star-off"></i>
                <i class="el-icon-setting"></i>
              </div>
            </div>
          </div>
          <div class="group__tabs-img plus"  @click="dialogVisible = true">
            <div class="plusIcon">
              <span class="el-icon-plus"></span>
            </div>
            <span>创建新项目</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 弹出框 -->
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'box1',
  data () {
    return {
      src:
        'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
      activeName: 'first',
      dialogVisible: false
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    testClik () {
      console.log('图片点击了')
      this.$router.push('/2')
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    }
  }
}
</script>

<style lang="less" scoped>
.group {
  .list-title-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    line-height: 40px;
    font-weight: 500;
    & > span {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 18px;
      line-height: 24px;
      font-weight: 500;
      color: #262626;
    }
    .list-tools i {
      margin: 0 10px;
      font-size: 16px;
      cursor: pointer;
    }
  }
  .group__tabs{
    height: 500px;
    .group__tab-bar{
      width: 100%;
      .item{
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 144px;
        height: 32px;
        padding-bottom: 12px;
        box-sizing: border-box;
        border-bottom: 4px solid #1b9aee;
        margin-bottom: 20px;
      }

    }
    .group__tabs-img{
      position: relative;
      width: 248px;
      height: 124px;
      border-radius: 10px;
      margin-right: 15px;
      overflow: hidden;
      cursor: pointer;
      .project-grid-card__header{
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        width: 192px;
        height: 88px;
        margin:auto;
        .project-grid-card__header__top{
          span{
            text-overflow: ellipsis;
            white-space: nowrap;
            display: inline-block;
            max-width: 100%;
            font-size: 16px;
            line-height: 24px;
            font-weight: 500;
            color: #ccc;
          }
          i{
            float: right;
            font-size: 18px;
            padding: 5px ;
            color: #ccc;
          }
        }
      }

      .plusIcon{
        margin: 24px 0 10px 0;
        span{
          font-size: 24px;
          color:#8c8c8c;
        }

      }
    }
    .plus{
      text-align: center;
      background-color: #f7f7f7;
      &>span{
          font-size: 16px;
          color:#8c8c8c;
        }
    }
    .plus:hover{
      background-color:rgba(27,154,238,.1);

      & span{
        color:#1b9aee;
      }
    }
    .code{
      transition: box-shadow .218s ease;
    }
    .code:hover{
      transform: translateY(-4px);
      box-shadow: 0 6px 12px rgba(38,38,38,.1);
    }
    .box-group{
      display: flex;
    }

  }
}
</style>
