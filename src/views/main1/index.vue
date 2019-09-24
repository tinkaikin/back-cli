<template>
  <el-card>
    <div class="box1-group">
      <!-- 头部 -->
      <div slot="header" class="list-title-bar">
        <span>标题12121</span>
        <div class="list-tools">
          <i class="el-icon-document-copy"></i>
          <i class="el-icon-bottom"></i>
        </div>
      </div>
      <!-- 内容区域 -->
      <div class="group__tabs">
        <div class="group__tab-bar">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="我参与的1" name="first">
              <el-image :src="src" class="tiem-img" @click="testClik">
                <div slot="placeholder" class="image-slot">
                  加载中
                  <span class="dot">...</span>
                </div>
              </el-image>
            </el-tab-pane>
            <el-tab-pane label="我参与的2" name="second">
              <el-image :src="src2" class="tiem-img">
                <div slot="placeholder" class="image-slot">
                  加载中
                  <span class="dot">...</span>
                </div>
              </el-image>
            </el-tab-pane>
            <el-tab-pane label="我参与的3" name="third">
              <el-image :src="src3" class="tiem-img">
                <div slot="placeholder" class="image-slot">
                  加载中
                  <span class="dot">...</span>
                </div>
              </el-image>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'box1',
  data () {
    return {
      src:
        'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
      src2:
        'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      src3: '',
      activeName: 'first'
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    testClik () {
      console.log('图片点击了')
      this.$router.push('/2')
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
    font-size: 20px;
    font-weight: 500;
    .list-tools i {
      margin: 0 10px;
      cursor: pointer;
    }
  }
  .group__tab-bar {
    .tiem-img {
      width: 224px;
      height: 122px;
    }
  }
}
</style>
