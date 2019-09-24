<template>
  <div class="box1-group">
    <div class="list-title-bar">
      <div class="list-title">
        <span>星标分组</span>
      </div>
      <div class="list-tools">
        <i class="el-icon-document-copy"></i>
        <i class="el-icon-bottom"></i>
      </div>
    </div>
    <div class="group__tabs">
      <div class="group__tab-bar">
        <el-tabs>
          <el-tab-pane label="我参与的" name="first">
            <el-image :src="src" fit='fill' class="tiem-img">
              <div slot="placeholder" class="image-slot">
                加载中<span class="dot">...</span>
              </div>
            </el-image>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'box1',
  data () {
    return {
      src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
    }
  }
}
</script>

<style lang="less" scoped>
.box1-group {
  .list-title-bar {
    display: flex;
    justify-content: space-between;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    font-weight: 500;
    .list-tools i{
      margin: 0 10px;
      cursor:pointer;
    }
  }
  .group__tab-bar{
   .tiem-img{
     width: 224px;
     height: 122px;
   }
  }
}
</style>
