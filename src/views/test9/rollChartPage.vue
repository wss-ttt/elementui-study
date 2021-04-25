<template>
  <div class="wrapper">
    <el-button type="button" @click="handleQuery(5)">5条数据</el-button>
    <el-button type="button" @click="handleQuery(7)">7条数据</el-button>
    <el-button type="button" @click="handleQuery(0)">无数据</el-button>
    <div class="info">
      当前索引: {{ currentIndex }}
      <br>
      当前名称: {{ xData[currentIndex] }}
    </div>
    <div class="box">
      <roll-chart ref="rollChart" :showLen="5" width="100%" height="100%" @roll="roll" highlight />
    </div>
  </div>
</template>

<script>
  import RollChart from '@/components/rollChart.vue'
  export default {
    components: {
      RollChart
    },
    props: {},
    data() {
      return {
        chartData: {},
        currentIndex: -1,
        xData: []
      }
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {
      this.handleQuery(5)
    },
    activated() {},
    deactivated() {},
    updated() {},
    destroyed() {},
    methods: {
      async handleQuery(count) {
        this.$refs['rollChart'].showLoading()
        const res = await this.getList(count)
        this.$refs['rollChart'].hideLoading()
        // 如果没有数据
        if (!res.length) {
          this.chartData = {}
          this.$refs['rollChart'].initChart(this.chartData)
          return
        }
        // 组装echarts数据
        const seriesData = []
        const seriesData2 = []
        this.xData = []
        res.forEach(item => {
          seriesData.push({
            value: [item.name, item.math]
          })
          seriesData2.push({
            value: [item.name, item.chinese]
          })
          this.xData.push(item.name)
        })
        console.log('xData', this.xData)
        this.chartData = {
          xAxis: {
            type: 'category', // 这个属性不能少 否则图表显示不出来
          },
          yAxis: {
            type: 'value' // 这个属性可以不写 因为y轴 默认的 type就是 'value'类型的
          },
          /* series: {
            type: 'bar',
            barWidth: '45',
            data: seriesData,
            // 高亮样式
            emphasis: {
              itemStyle: {
                color: '#1acd7e'
              }
            }
          }, */
          series: [{
            type: 'bar',
            // barWidth: '45',
            data: seriesData,
            // 高亮样式
            emphasis: {
              itemStyle: {
                color: '#1acd7e'
              }
            }
          }, {
            type: 'bar',
            // barWidth: '45',
            data: seriesData2,
            // 高亮样式
            emphasis: {
              itemStyle: {
                color: '#fb3'
              }
            }
          }] // 这个地方必须是数组
        }
        this.$refs['rollChart'].initChart(this.chartData)
      },
      getList(count) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const list = []
            for (let i = 0; i < count; i++) {
              list.push({
                id: i,
                name: '类别' + i,
                math: Math.round(Math.random() * 100),
                chinese: Math.round(Math.random() * 100)
              })
            }
            resolve(list)
          }, 2000)
        })
      },
      roll(data) {
        console.log('data', data)
        this.currentIndex = data.index
      }
    },
    filters: {}
  }

</script>
<style scoped lang="scss">
  .info {
    text-align: center;
    font-size: 24px;
  }

  .box {
    width: 100%;
    height: 400px;
    background: #ccc;
  }

</style>
