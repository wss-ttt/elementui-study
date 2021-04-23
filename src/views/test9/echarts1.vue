<template>
  <div class="wrapper">
    <el-button type="button" @click="handleQuery">查询</el-button>
    <div class="box">
      <v-chart ref="chart" width="100%" height="100%" />
    </div>
  </div>
</template>

<script>
  import VChart from '@/components/chart.vue'
  export default {
    components: {
      VChart
    },
    props: {},
    data() {
      return {
        chartData: {}
      }
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {
      this.handleQuery()
    },
    activated() {},
    deactivated() {},
    updated() {},
    destroyed() {},
    methods: {
      async handleQuery() {
        // 显示loading
        this.$refs['chart'].showLoading()
        const res = await this.getList()
        // 隐藏loading
        this.$refs['chart'].hideLoading()
        // 如果数据为空
        if (!res.length) {
          this.chartData = {}
          this.$refs['chart'].initChart(this.chartData)
          return
        }
        // 如果数据不为空
        // 组装echarts数据
        const seriesData = []
        res.forEach(item => {
          seriesData.push({
            value: [item.name, item.score] // 注意: 将x轴的数据也放在series中
          })
        })
        this.chartData = {
          xAxis: {
            type: 'category', // 这个属性不能少 否则图表显示不出来
          },
          yAxis: {
            type: 'value' // 这个属性可以不写 因为y轴 默认的 type就是 'value'类型的
          },
          series: {
            type: 'line',
            data: seriesData
          }
        }
        this.$refs['chart'].initChart(this.chartData)
      },
      getList() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const list = [{
              id: 1,
              name: '乔峰',
              score: Math.round(Math.random() * 100)
            }, {
              id: 2,
              name: '小龙女',
              score: Math.round(Math.random() * 100)
            }, {
              id: 3,
              name: '杨过',
              score: Math.round(Math.random() * 100)
            }]
            resolve(list)
          }, 2000)
        })
      }
    },
    filters: {}
  }

</script>
<style scoped lang="scss">
  .box {
    width: 100%;
    height: 400px;
    background: #ccc;
  }

</style>
