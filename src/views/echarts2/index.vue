<template>
  <div class="wrapper">
    <div class="item">
      <v-line height="100%" width="100%" :data="chartData"></v-line>
    </div>
    <div class="item">
      <v-line height="100%" width="100%" :data="chartData2"></v-line>
    </div>
  </div>
</template>

<script>
import VLine from './components/line'
export default {
  props: {},
  data() {
    return {
      chartData: {},
      chartData2: {}
    }
  },
  computed: {},
  components: {
    VLine
  },
  created() {},
  mounted() {
    this.chartData = {
      xAxis: {
        data: ['语文', '数学', '英语']
      },
      series: [
        {
          name: '乔峰',
          type: 'line',
          data: [79, 34, 48]
        }
      ],
      legend: {
        data: ['乔峰']
      }
    }
    this.chartData2 = {
      title: {
        text: '11月份成绩'
      },
      xAxis: {
        data: ['语文', '数学', '英语']
      },
      series: [
        {
          name: '乔峰',
          type: 'line',
          data: [79, 34, 48]
        }
      ],
      tooltip:{
          trigger:'axis',
          axisPointer:{
              type:'cross'
          }
      }
    }
  },
  destroyed() {},
  watch: {},
  methods: {}
}
</script>
<style scoped>
.item {
  width: 300px;
  height: 300px;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.3);
  float: left;
  margin-right: 5px;
}
</style>