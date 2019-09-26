<template>
  <div class="main1">
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
          <div class="group__tabs-img code" style='background-image: url("https://mailimg.teambition.com/logos/cover-demo.jpg");'>
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
      title="选择项目模板"
      :visible.sync="dialogVisible"
      center
      width="975px"
      >
      <!-- :before-close="handleClose" -->
      <div class="container">
        <!-- 搜索框部分 -->
        <div class="container__top">
          <div class="seatch">
            <el-input prefix-icon="el-icon-search" v-model="seatchValue" placeholder="请输入内容"></el-input>
          </div>
          <div class="icontAtext">
            <i class="el-icon-folder-add"></i>
            <span>新建模板</span>
          </div>
          <div class="icontAtext">
            <i class="el-icon-connection"></i>
            <span>全部模板</span>
          </div>
        </div>
        <!-- 列表 -->
        <ul class="container__ul">
          <li class="add">
            <div class="top">
              <i class="el-icon-plus"></i>
            </div>
            <div class="bottom">
              <div class="bottom-1">新建普通项目</div>
              <div class="bottom-2">使用勾选框表示任务完成情况，可自由拖拽看板中的任务</div>
            </div>
          </li>
          <li class="add">
            <div class="top">
              <i class="el-icon-plus"></i>
            </div>
            <div class="bottom">
              <div class="bottom-1">新建工作流项目</div>
              <div class="bottom-2">使用任务状态表示任务完成情况，拖拽看板中的任务需要根据工作流的设置</div>
            </div>
          </li>
          <li class="template-card__cover" style='backgroundImage: url("https://striker.teambition.net/thumbnail/110j5f4de30506e2b1f81b34cdfd1e7fb796/w/600/h/300");'>
            <div class="top">
              <span>创建者：Teambition</span>
            </div>
            <div class="bottom">
              <div class="bottom-1">
                <span>产品进展</span>
                <div>
                  <span class="pro">PRO</span>
                  <span class="word">工作流</span>
                </div>
              </div>
              <div class="bottom-2">管理需求、缺陷、迭代的产品研发全流程</div>
            </div>
          </li>
          <li class="template-card__cover" style='backgroundImage: url("https://striker.teambition.net/thumbnail/110j5f4de30506e2b1f81b34cdfd1e7fb796/w/600/h/300");'>
            <div class="top">
              <span>创建者：Teambition</span>
            </div>
            <div class="bottom">
              <div class="bottom-1">
                <span>产品进展</span>
                <div>
                  <span class="pro">PRO</span>
                  <span class="word">工作流</span>
                </div>
              </div>
              <div class="bottom-2">管理需求、缺陷、迭代的产品研发全流程</div>
            </div>
          </li>
          <li class="template-card__cover" style='backgroundImage: url("https://striker.teambition.net/thumbnail/110j5f4de30506e2b1f81b34cdfd1e7fb796/w/600/h/300");'>
            <div class="top">
              <span>创建者：Teambition</span>
            </div>
            <div class="bottom">
              <div class="bottom-1">
                <span>产品进展</span>
                <div>
                  <span class="pro">PRO</span>
                  <span class="word">工作流</span>
                </div>
              </div>
              <div class="bottom-2">管理需求、缺陷、迭代的产品研发全流程</div>
            </div>
          </li>
          <li class="template-card__cover" style='backgroundImage: url("https://striker.teambition.net/thumbnail/110j5f4de30506e2b1f81b34cdfd1e7fb796/w/600/h/300");'>
            <div class="top">
              <span>创建者：Teambition</span>
            </div>
            <div class="bottom">
              <div class="bottom-1">
                <span>产品进展</span>
                <div>
                  <span class="pro">PRO</span>
                  <span class="word">工作流</span>
                </div>
              </div>
              <div class="bottom-2">管理需求、缺陷、迭代的产品研发全流程</div>
            </div>
          </li>
          <li class="template-card__cover" style='backgroundImage: url("https://striker.teambition.net/thumbnail/110j5f4de30506e2b1f81b34cdfd1e7fb796/w/600/h/300");'>
            <div class="top">
              <span>创建者：Teambition</span>
            </div>
            <div class="bottom">
              <div class="bottom-1">
                <span>产品进展</span>
                <div>
                  <span class="pro">PRO</span>
                  <span class="word">工作流</span>
                </div>
              </div>
              <div class="bottom-2">管理需求、缺陷、迭代的产品研发全流程</div>
            </div>
          </li>
          <li class="template-card__cover" style='backgroundImage: url("https://striker.teambition.net/thumbnail/110j5f4de30506e2b1f81b34cdfd1e7fb796/w/600/h/300");'>
            <div class="top">
              <span>创建者：Teambition</span>
            </div>
            <div class="bottom">
              <div class="bottom-1">
                <span>产品进展</span>
                <div>
                  <span class="pro">PRO</span>
                  <span class="word">工作流</span>
                </div>
              </div>
              <div class="bottom-2">管理需求、缺陷、迭代的产品研发全流程</div>
            </div>
          </li>
        </ul>
      </div>
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
      dialogVisible: false,
      seatchValue: ''
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
      background-color: #f7f7f7;
      background-position: 50%;
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 4px;
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
            color: #fff;
          }
          i{
            float: right;
            font-size: 18px;
            padding: 5px ;
            color: #ccc;
            opacity: 0;
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
      & .project-grid-card__header__top i {
        opacity: 1;
      }
    }

    .box-group{
      display: flex;
    }

  }
}

// 对话框标题样式
.main1{
  & /deep/ .el-dialog__header{
    height: 50px;
    box-sizing: border-box;
    padding: 15px 20px;
    border-bottom: 1px solid #e5e5e5;
  }
  & /deep/ .el-dialog__body{
    padding: 15px 30px;
    .container__top{
      width: 100%;
      display: flex;
      align-items: center;
      .seatch{
        height: 35px;
        width: 720px;
      }
      .icontAtext{
        width: 100px;
        height: 100%;
        text-align: center;
        line-height: 35px;
        color:#1b9aee;
        i{
          padding-right: 7px;
        }
      }
    }
    // 列表
    .container__ul{
      width: 100%;
      margin-top: 16px;
      display: flex;
      flex-wrap: wrap;
      padding: 0;
      .template-card__cover{
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: cover;
        color:#fff;
        &::after{
          content: "";
          display: block;
          transition-duration: .3s;
          transition-property: all;
          transition-timing-function: ease;
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          right: 0;
        }
      }
      .template-card__cover:hover{
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: cover;
        &::after{
          background: linear-gradient(0deg,rgba(55,55,55,.8),transparent);
        }
      }
      .template-card__cover:hover .top>span{
        opacity: 1;
      }
      li{
        list-style-type:none;
        width: 217px;
        height: 125px;
        margin-right: 15px;
        margin-bottom: 15px;
        background: #f7f7f7;
        color: grey;
        border-radius: 10px;
        padding: 12px 16px;
        box-sizing: border-box;
        position: relative;
        font-weight: 500;
        .top{
          i{
            font-size: 24px;
          }
          // 正常项目样式
          span{
            opacity: 0;
            display: inline-block;
            background: rgba(55,55,55,.54);
            border-radius: 4px;
            padding: 2px 4px;
            max-width: 100%;
            font-size: 12px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
        .bottom{
          position: absolute;
          bottom: 12px;
          left: 16px;
          right: 16px;
          z-index: 2;
          .bottom-1{
            display: flex;
            justify-content: space-between;
            height: 20px;
            line-height: 20px;
            font-size: 14px;
            font-weight: 500;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            transition: all .3s ease;
            .pro,.word{
              display: inline-block;
              border-radius: 4px;
              line-height: 20px;
              padding: 0 4px;
              margin-left: 4px;
              font-size: 12px;
              // border: 1px solid red;
            }
            .pro{
              background: #fff;
              color: #000;
            }
            .word{
              background: hsla(0,0%,100%,.2);
            }
          }
          .bottom-2{
            font-size: 12px;
            max-height: 0;
            opacity: 0;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            white-space: normal;
            -webkit-box-orient: vertical;
            transition: all .3s ease;
          }
        }
        &:hover{
          background: #bfbfbf;
          box-shadow: 0 4px 8px rgba(0,0,0,.1);
        }
        &:hover .bottom,&:hover .top{
          color: #fff;
        }
        &:hover .bottom-2{
          opacity: 1;
          max-height: 40px;
          margin-top: 4px;
        }
      }
      li:nth-child(4n){
        margin-right: 0;
        margin-bottom: 0;
      }

    }
  }

}
</style>
