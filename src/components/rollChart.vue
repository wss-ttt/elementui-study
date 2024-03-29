<template>
  <div :id="id" class="roll-chart" :style="{height:height,width:width}" />
</template>

<script>
  import echarts from 'echarts'
  import uuidv1 from 'uuid/v1'
  // 这里引入一个全局的echart配置
  import echartsSettings from '@/echarts-settings'
  const {
    loading
  } = echartsSettings
  export default {
    components: {},
    props: {
      // 默认展示的个数
      showLen: {
        type: Number,
        default: 5
      },
      width: {
        type: String,
        default: '200px'
      },
      height: {
        type: String,
        default: '200px'
      },
      autoResize: {
        type: Boolean,
        default: true
      },
      // 默认间隔时间为 2000毫秒 = 2s
      interval: {
        type: Number,
        default: 2000
      },
      // 是否需要高亮
      highlight: {
        type: Boolean,
        default:false
      }
    },
    data() {
      return {
        id: '',
        oBox: null, // 保存dom元素
        myChart: null, // 保存echarts实例
        hasData: false, // true:说明有数据 false:说明没有数据
        newSeriesData: [],
        dataLen: 0, // 数据的长度
        start: 0,
        end: this.showLen,
        option: {},
        timer: null,
        highlightTimer: null,
        isArray: false, // series是否是数组 
        index: 0
      }
    },
    computed: {},
    watch: {},
    created() {
      this.id = uuidv1() // 保证id是唯一的
    },
    mounted() {
      // 1.获取dom元素
      this.oBox = document.getElementById(this.id)
      // 2.实例化echarts
      this.myChart = echarts.init(this.oBox)
    },
    activated() {},
    deactivated() {},
    updated() {},
    destroyed() {
      if (!this.myChart) {
        return
      }
      // 1.销毁echarts实例对象
      this.myChart.dispose()
      this.myChart = null
      // 2.移除resize事件(因为这个事件是全局的)
      window.removeEventListener('resize', this.chartResize)
    },
    methods: {
      initChart(option) {
        // 1.重置操作
        // 清除定时器(切换过程中,会不断产生定时器)
        clearInterval(this.timer)
        // 清除高亮的定时器
        clearInterval(this.highlightTimer)
        // 重置 start和end值(否则有问题)
        this.start = 0
        this.end = this.showLen
        // index 重置到0(否则在tab切换过程的中没有从0开始)
        this.index = 0
        // 2.判断myChart实例是否存在,不存在的话重新实例化
        if (!this.myChart) {
          this.myChart = echarts.init(this.oBox)
        }
        // 3.判断是否有数据
        this.hasData = !this.isEmptyObject(option)
        // 4.有数据的情况
        if (this.hasData) {
          // 获取图表配置数据
          this.option = option
          // 获取到series中的data数据
          const series = option.series
          this.isArray = Object.prototype.toString.call(series) === '[object Array]' || false
          let seriesData = null
          if (this.isArray) {
            seriesData = []
            // 如果是数组 -> 可能有多个series
            series.forEach(item => {
              seriesData.push(item.data)
            })
            // 获取数据的长度
            this.dataLen = seriesData[0].length
          } else {
            // 如果不是数组 -> 说明只有一个series
            seriesData = series['data']
            // 获取数据的长度
            this.dataLen = seriesData.length
          }
          // 5.数据的长度大于要显示的长度 -> 此时就需要滚动展示
          if (this.dataLen > this.showLen) {
            // 6.滚动展示
            this.initRollChart(seriesData)
            // 高亮显示
            this.highlight && this.handleRollHighlight()
          } else {
            // 7.静态展示
            this.initStaticChart()
            // 高亮显示
            if(this.highlight) {
              this.handleStaticHighlight()
              this.highlightTimer = setInterval(this.handleStaticHighlight, this.interval)
            }
          }
          window.addEventListener('resize', this.chartResize)
        } else {
          // 8.没有数据的情况
          this.oBox.removeAttribute('_echarts_instance_')
          this.oBox.innerHTML =
            '<div class="no-data" style="text-align:center;font-size:30px;position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);font-weight: bold;">暂无数据</div>'
          // 同时 把myChart 置为空对象
          this.myChart = null
        }
      },
      // 滚动展示(需要把数据复制一份)
      initRollChart(seriesData) {
        if (this.isArray) {
          // 清空操作 注意: 这个地方必须要清空操作 因为后面有push操作, 否则在切换的过程中会一直push数据, 就会存在问题
          this.newSeriesData = []
          // 如果是数组 -> 有可能是多个series
          seriesData.forEach(item => {
            // 这个时候需要把数据复制一份
            this.newSeriesData.push(item.concat(item))
          })
          // 循环对每一个series中的截取赋值
          this.newSeriesData.forEach((item, index) => {
            let data = item.slice(this.start, this.end)
            // 这里使用索引 -> series[index]['data']
            this.option.series[index]['data'] = data
          })
        } else {
          // 如果不是数组 -> 说明只有一个series
          // 这个时候需要把数据复制一份
          this.newSeriesData = seriesData.concat(seriesData)
          let data = this.newSeriesData.slice(this.start, this.end)
          // 这里直接使用 series['data']
          this.option.series['data'] = data
        }
        this.myChart.clear()
        this.myChart.setOption(this.option)

        this.$emit('roll', {
          index: this.start
        })

        // 开启自动滚动展示模式
        this.timer = setInterval( () => {
          this.autoPlay()
          // 高亮(共用一个定时器)
          this.highlight && this.handleRollHighlight()
        }, this.interval)
      },
      // 静态展示
      initStaticChart() {
        this.myChart.clear()
        this.myChart.setOption(this.option)
      },
      // 封装自动播放方法
      autoPlay() {
        this.start++
        this.end++
        if (this.start === this.dataLen) {
          this.start = 0
          this.end = this.showLen
        }
        if (this.isArray) {
          // 如果是数组 -> 有可能是多个series
          this.newSeriesData.forEach((item, index) => {
            const data = item.slice(this.start, this.end)
            // 这里使用索引 -> series[index]['data']
            this.option.series[index]['data'] = data
          })
        } else {
          // 如果不是数组 -> 说明只有一个series
          const data = this.newSeriesData.slice(this.start, this.end)
          // 这里直接使用 series['data']
          this.option.series['data'] = data
        }
        // this.myChart.clear() // 滚动展示不需要该代码 否则效果上看不出是滚动效果 而是瞬间变化的效果
        this.myChart.setOption(this.option)
        this.$emit('roll', {
          index: this.start
        })
      },
      // 静态时高亮显示
      handleStaticHighlight() {
        this.$emit('roll', {
          index: this.index
        })
        this.myChart.dispatchAction({
          type: 'downplay', // 取消高亮
        })
        this.myChart.dispatchAction({
          type: 'highlight', // 高亮
          dataIndex: this.index
        })
        this.index++
        if(this.index === this.showLen) {
          this.index = 0
        }
      },
      // 滚动时高亮显示
      handleRollHighlight() {
        if(this.isArray) {
          // 如果是数组 -> 有可能是多个series
          this.newSeriesData.forEach((item, index) => {
            // 如果不是数组 -> 说明只有一个series
            this.myChart.dispatchAction({
              type: 'downplay', // 取消高亮
              seriesIndex: index
            })
            this.myChart.dispatchAction({
              type: 'highlight', // 高亮
              seriesIndex: index,
              dataIndex: 0
            })
          })
        } else {
            // 如果不是数组 -> 说明只有一个series
            this.myChart.dispatchAction({
              type: 'downplay', // 取消高亮
            })
            this.myChart.dispatchAction({
              type: 'highlight', // 高亮
              dataIndex: 0
            })
        }
      },
      isEmptyObject(obj) {
        return Object.keys(obj).length === 0
      },
      setInit(option) {
        // 1.判断myChart实例是否存在
        this.myChart || (this.myChart = echarts.init(this.oBox))
        this.myChart.clear()
        this.myChart.setOption(option)
        this.myChart.resize()
      },
      showLoading() {
        // 1.判断myChart实例是否存在
        this.myChart || (this.myChart = echarts.init(this.oBox))
        this.myChart.showLoading(loading)
      },
      hideLoading() {
        // 1.判断myChart实例是否存在
        this.myChart || (this.myChart = echarts.init(this.oBox))
        this.myChart.hideLoading()
      },
      // 图表重绘方法
      chartResize() {
        // this.activatedFlag && this.myChart && this.myChart.resize()
        this.myChart && this.myChart.resize()
      }
    },
    filters: {}
  }

</script>
<style scoped>
  .roll-chart {
    position: relative;
  }

</style>
