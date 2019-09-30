<template>
  <div class="header flex_row">
    <h2>
      所有成员 .
      <span>1</span>
    </h2>
    <div class="header__menus flex_row">
      <div class="header__menus__pl">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            <i class="el-icon-upload el-icon--right"></i>
            批量更新成员信息
          </span>
          <el-dropdown-menu slot="dropdown">
            <h4 class="b ">批量导入成员信息</h4>
            <el-dropdown-item divided>
                <el-upload
                    class="upload-demo"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :file-list="fileList">
                    下载当前成员列表 (.csv)
                    <!-- :on-change="handleChange" -->
                </el-upload>
            </el-dropdown-item>
            <el-dropdown-item >
                <el-upload
                    class="upload-demo"
                    ref="upload"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :file-list="fileList"
                    :auto-upload="false">
                    上传当前成员信息
                    <!-- <el-button slot="trigger" size="small" type="primary">选取文件</el-button> -->
                    <!-- <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button> -->
                    <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
                </el-upload>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="header__menus__add">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            <i class="el-icon-circle-plus el-icon--left"></i>
            添加成员
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>添加企业成员</el-dropdown-item>
            <el-dropdown-item>添加外部成员</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fileList: []
    }
  },
  methods: {
    submitUpload () {
      this.$refs.upload.submit()
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    }
  }
}
</script>
<style lang="less" scoped>
@active: #3da8f5;
.header {
  height: 76px;
  padding: 20px 20px 20px 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  h2 {
    font-size: 1.3em;
    span {
      font-size: 20px;
    }
  }
  .header__menus {
    & > div {
      margin-left: 20px;
      & span,
      & i {
        color: @active;
        cursor: pointer;
      }
    }
  }
}
.el-popper[x-placement^=bottom]{
    width: 200px;
    h4{
        text-align: center;
        font-size: 15px;
        padding:0 10px;
    }
}
</style>
