<template>
  <div class="analytics">
    <div class="analytics__title">
      <div class="analytics__title__text">项目统计</div>
      <div class="analytics__title__addBtn">
        <i class="el-icon-circle-plus-outline"></i>新建报表
      </div>
    </div>
    <div class="analytics__body clearfix">
      <my-pei />
      <my-pie-doughnut />
      <my-line-log />
      <my-pei />
      <my-pei />
      <my-pei />
      <my-pei />
      <my-pei />
    </div>
  </div>
</template>

<script>
import MyPei from './echarts/my-pei'
import MyPieDoughnut from './echarts/my-pie-doughnut'
import MyLineLog from './echarts/my-line-log'
export default {
  name: 'my-bar',
  components: {
    MyPei,
    MyPieDoughnut,
    MyLineLog
  },
  data () {
    return {}
  }
}
</script>

<style scoped lang='less'>
.analytics {
  position: absolute;
  // max-width: 1200px;
  // min-width: 1200px;
  // overflow: auto;
  width: 1200px;
  left: 0;
  right: 0;
  margin: 0 auto;
  height: 100%;
  .analytics__title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 48px;
    margin: 20px auto 8px;
    font-size: 16px;
    color: #262626;
    .analytics__title__text {
      font-size: 16px;
    }
    .analytics__title__addBtn {
      color: #1b9aee;
      cursor: pointer;
      i {
        margin-right: 8px;
      }
      &:hover {
        color: #0171c2;
      }
    }
  }
  .analytics__body {
    width: 100%;
    height: 100%;

    // display: flex;
    // flex-wrap: wrap;
  }
  .clearfix:after {
    /*伪元素是行内元素 正常浏览器清除浮动方法*/
    content: "";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
  .clearfix {
    *zoom: 1; /*ie6清除浮动的方式 *号只有IE6-IE7执行，其他浏览器不执行*/
  }
}
</style>
