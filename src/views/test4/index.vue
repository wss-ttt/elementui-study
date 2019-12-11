<template>
  <div class="wrapper">
    <div class="item">
      <v-line ref="line1" :data="detaLine1" width="100%" height="100%"></v-line>
    </div>
    <div class="item">
      <v-line ref="line2" :data="detaLine1" width="100%" height="100%"></v-line>
    </div>
    <div class="item">
      <v-line ref="line3" :data="detaLine1" width="100%" height="100%"></v-line>
    </div>
  </div>
</template>

<script>
import VBox from './components/box'
import VLine from './components/Line'
export default {
  components: {
    VBox,
    VLine
  },
  props: {},
  data() {
    return {
      detaLine1: {},
      detaLine2: {},
      detaLine3: {}
    }
  },
  created() {},
  mounted() {
    this.detaLine1 = {
      xAxis: {
        data: ['乔峰', '杨过', '小龙女']
      },
      yAxis: {
        name: '成绩'
      },
      series: [
        {
          name: 'aa',
          type: 'line',
          data: [89, 40, 60]
        }
      ]
    }
    this.detaLine2 = {
      xAxis: {
        data: ['乔峰', '杨过', '小龙女']
      },
      yAxis: {
        name: '成绩'
      },
      series: [
        {
          name: 'aa',
          type: 'line',
          data: [89, 40, 60]
        }
      ]
    }
    this.detaLine3 = {
      xAxis: {
        data: ['乔峰', '杨过', '小龙女']
      },
      yAxis: {
        name: '成绩'
      },
      series: [
        {
          name: 'aa',
          type: 'line',
          data: [89, 40, 60]
        }
      ]
    }
    this.$nextTick(() => {
      this.$refs['line1'].initChart()
      this.$refs['line2'].initChart()
      this.$refs['line3'].initChart()
    })
  },
  activated() {},
  updated() {},
  destroyed() {},
  methods: {},
  computed: {},
  watch: {}
}
</script>
<style scoped>
.item{
  width: 400px;
  height: 400px;
  margin:5px;
  float: left;
  background-color: antiquewhite;
}
</style>