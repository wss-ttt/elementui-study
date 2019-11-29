<template>
  <div class="line-chart" :id="id" :style="{height:height,width:width}"></div>
</template>

<script>
import echarts from 'echarts'
import uuidv1 from 'uuid/v1'
export default {
  props: {
    data: {
      type: Object,
      default() {
        return {}
      }
    },
    width: {
      type: String,
      default: '200px'
    },
    height: {
      type: String,
      default: '200px'
    }
  },
  data() {
    return {
      baseConfig: {
        title: {
          text: '折线图'
        },
        xAxis: {
          type: 'category',
          // data: [],   // 这个其实可以不需要
          name:'学科'
        },
        yAxis: {
          type: 'value',
          name:'成绩'
        },
        // series: []    // 这个其实可以不需要
      },
      id: ''
    }
  },
  computed: {},
  components: {},
  created() {
    let id = uuidv1()
    this.id = id
  },
  mounted() {
    this.initChart()
  },
  destroyed() {},
  watch: {
    data: {
      handler(newVal, oldVal) {
        console.log('这个执行了没')
        this.initChart()
      },
      deep: true
    }
  },
  methods: {
    initChart() {
      let oBox = document.getElementById(this.id)
      let myChart = echarts.init(oBox)
      if (this.isEmptyObject(this.data)) {
        // 数据为空
        oBox.removeAttribute('_echarts_instance_')
        oBox.innerHTML = '暂无数据'
      } else {
        // 数据不为空
        let option = this.baseConfig
        option.xAxis.data = this.data.xAxis.data
        option.series = this.data.series
        // 合并对象 这种方法不行
        // let option = Object.assign({},this.baseConfig,this.data)
        myChart.setOption(option)
        window.addEventListener('resize', () => {
          myChart.resize()
        })
      }
    },
    isEmptyObject(obj) {
      return Object.keys(obj).length === 0
    }
  }
}
</script>
<style scoped>
.line-chart {
  border: 1px solid #ccc;
}
</style>