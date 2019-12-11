<template>
  <div class="line-chart" :id="id" :style="{height:height,width:width}"></div>
</template>

<script>
import echarts from 'echarts'
import uuidv1 from 'uuid/v1'
import _ from 'lodash'
let oBox = null
export default {
  components: {},
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
    },
    active: {
      type: Boolean
    }
  },
  data() {
    return {
      // 默认为小图的基础配置
      baseConfig: {
        xAxis: {
          type: 'category'
          // name: '时间',
        },
        grid: {
          top: 100,
          right: 80,
          bottom: 30,
          left: 80
        }
      },
      myChart: null,
      // oBox:null,
      id: '',
      isNoData: false // true:说明没有数据 false:说明是有数据
    }
  },
  created() {
    let id = uuidv1()
    this.id = id
  },
  mounted() {
    oBox = document.getElementById(this.id)
    this.myChart = echarts.init(oBox)
  },
  beforeDestroy() {
    if (!this.myChart) {
      return
    }
    this.myChart.dispose()
    this.myChart = null
  },
  destroyed() {},
  methods: {
    initChart() {
      console.log('这个我执行了没')
      /* let oBox = document.getElementById(this.id)
      this.myChart = echarts.init(oBox) */
      console.log(oBox)
      this.myChart = echarts.init(oBox)
      this.isNoData = this.data.xAxis.data.length ? false : true
      // if (this.isEmptyObject(this.data)) {
      if (this.isNoData) {
        // 数据为空
        oBox.removeAttribute('_echarts_instance_')
        oBox.innerHTML =
          '<div style="text-align:center;font-size:24px;position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);font-weight: bold;">暂无数据</div>'
      } else {
        // 数据不为空
        let option = _.cloneDeep(this.baseConfig)
        // 动态配置项--开始
        option.xAxis.data = this.data.xAxis.data
        option.yAxis = this.data.yAxis
        option.series = this.data.series
        // 合并参数
        // let option = Object.assign({},this.baseConfig,this.data)
        // 动态配置项--结束
        // 1 首先需要清空上一次的数据
        this.myChart.clear()
        // 2 再来设置
        this.myChart.setOption(option)
        this.myChart.resize()
        window.addEventListener('resize', () => {
          this.myChart.resize()
        })
      }
    },
    isEmptyObject(obj) {
      return Object.keys(obj).length === 0
    },
    // 图表初始的图表样子
    setInit(data){
      let option = _.cloneDeep(this.baseConfig)
      option.xAxis.name = data.xAxis.name
      option.yAxis = data.yAxis
      if(!echarts.getInstanceByDom(oBox)){
        this.myChart = echarts.init(oBox)
      }
      this.myChart.clear()
      this.myChart.setOption(option)
      this.myChart.resize()
    },
    showLoading(){
      this.myChart.showLoading(loading)
    },
    hideLoading(){
      this.myChart.hideLoading()
    }
  },
  computed: {
    sidebarFold: {
      get() {
        return this.$store.state.common.sidebarFold
      }
    }
  },
  watch: {
    /* data: {
      handler(newVal, oldVal) {
        this.initChart()
      },
      deep: true
    }, */
    sidebarFold: {
      handler(newVal, oldVal) {
        // 当前激活
        if (this.active) {
          // 当数据为空的时候 不需要重绘图表
          if (this.isNoData) return
          this.myChart && this.myChart.resize()
        }
      }
    },
    /* active: {
      handler(newVal, oldVal) {
        newVal && this.myChart.resize()
      }
    } */
  }
}
</script>
<style scoped>
.line-chart {
  position: relative;
  /* background-color: cornflowerblue; */
}
</style>