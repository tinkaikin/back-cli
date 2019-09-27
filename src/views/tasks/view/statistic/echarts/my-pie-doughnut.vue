<template>
  <div class="analytics__body__item">
    <div class="analytics__body__item__title">
      <span>任务按执行者分布</span>
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
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          x: 'left',
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 335, name: '直接访问' },
              { value: 310, name: '邮件营销' },
              { value: 234, name: '联盟广告' },
              { value: 135, name: '视频广告' },
              { value: 1548, name: '搜索引擎' }
            ]
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
