<template>
  <div class="analytics__body__item">
    <div class="analytics__body__item__title">
      <span>任务燃尽图</span>
      <div>
        <i class="el-icon-rank"></i>
        <i class="el-icon-more"></i>
      </div>
    </div>
    <div ref="bar" style="width:590px;height:280px;"></div>
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
        title: {
          text: '对数轴示例',
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c}'
        },
        legend: {
          left: 'left',
          data: ['2的指数', '3的指数']
        },
        xAxis: {
          type: 'category',
          name: 'x',
          splitLine: { show: false },
          data: ['一', '二', '三', '四', '五', '六', '七', '八', '九']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        yAxis: {
          type: 'log',
          name: 'y'
        },
        series: [
          {
            name: '3的指数',
            type: 'line',
            data: [1, 3, 9, 27, 81, 247, 741, 2223, 6669]
          },
          {
            name: '2的指数',
            type: 'line',
            data: [1, 2, 4, 8, 16, 32, 64, 128, 256]
          },
          {
            name: '1/2的指数',
            type: 'line',
            data: [1 / 2, 1 / 4, 1 / 8, 1 / 16, 1 / 32, 1 / 64, 1 / 128, 1 / 256, 1 / 512]
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
