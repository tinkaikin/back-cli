<template>
  <div class="analytics__body__item">
    <div class="analytics__body__item__title">
      <span>期间完成任务</span>
      <div>
        <i class="el-icon-rank"></i>
        <i class="el-icon-more"></i>
      </div>
    </div>
    <div class="analytics__body__item__bar" ref="bar" style="width:590px;height:280px;"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'my-pei',
  data () {
    return {}
  },
  mounted () {
    this.drawCharts()
  },
  methods: {
    drawCharts () {
      const dom = this.$refs.bar
      const myEcharts = echarts.init(dom)
      const option = {
        color: ['#3398DB'],
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '直接访问',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220]
          }
        ]
      }
      myEcharts.setOption(option)
    }
  }
}
</script>

<style scoped lang='less'>
.analytics__body__item {
  float: left;
  border: 1px solid #ccc;
  width: 590px;
  height: 335px;
  margin-left: 20px;
  margin-bottom: 20px;
  background-color: #fff;
  box-sizing: border-box;
  &:nth-child(2n-1) {
    margin-left: 0;
  }
  &__title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    height: 50px;
    border-bottom: 1px solid #ccc;
    color: #8c8c8c;
    box-sizing: border-box;
    i {
      margin-left: 15px;
      cursor: pointer;
      font-size: 20px;
    }
  }
}
</style>
