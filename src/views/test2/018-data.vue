<template>
  <div class="data">
    <v-box username="张三" :option="option"></v-box>
    <v-box username="李四" :option="{}"></v-box>
    <v-box username="王五" :option="option"></v-box>
  </div>
</template>

<script>
import VBox from './components/Box'
export default {
  props: {},
  data() {
    return {
      option: {
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
      }
    }
  },
  computed: {},
  components: {
    VBox
  },
  created() {},
  mounted() {},
  destroyed() {},
  watch: {},
  methods: {}
}
</script>
<style scoped>
</style>