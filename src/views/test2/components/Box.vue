<template>
  <div class="box">
    <div :id="id">好好学习 天天向上</div>
  </div>
</template>

<script>
import echarts from 'echarts'
import uuidv1 from 'uuid/v1'
let oBox = null
let myChart = null
export default {
  props: {
    username: {
      type: String
    },
    option: {
      type: Object
    }
  },
  data() {
    return {
      id: ''
    }
  },
  computed: {},
  components: {},
  created() {
    this.id = uuidv1()
  },
  mounted() {
    oBox = document.getElementById(this.id)
    console.log(oBox)
    this.initChart()
  },
  destroyed() {},
  watch: {},
  methods: {
    initChart() {
      if (this.isEmptyObj(this.option)) {
        // 数据为空的情况
        oBox.innerHTML = '暂无数据'
        oBox.removeAttribute('_echarts_instance_')
      } else {
        // 数据不为空的情况
        myChart = echarts.init(oBox)
        /* let option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
          }
        ]
      } */
        myChart.setOption(this.option)
      }
    },
    // 判断一个对象是否为空对象{}
    isEmptyObj(obj) {
      return Object.keys(obj).length === 0
    }
  }
}
</script>
<style scoped lang="scss">
.box {
  width: 400px;
  height: 240px;
  float: left;
  margin: 5px;
  border:1px solid red;
  > div {
    width: 100%;
    height: 100%;
  }
}
</style>