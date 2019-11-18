<template>
  <div class="wrapper">
    <box type="1" @search="search" ref="box"></box>
    <!-- <box type="2" @search="search"></box> -->
    站点:{{form.station}}
    <br />
    位置:
    {{form.position}}
  </div>
</template>

<script>
import Box from './components/Box'
export default {
  props: {},
  data() {
    return {
      form: {
        station: '',
        position: ''
      }
    }
  },
  computed: {},
  components: {
    Box
  },
  created() {},
  mounted() {
    // 主动触发一次事件
    this.$refs['box'].search()
  },
  destroyed() {},
  watch: {},
  methods: {
    search(val) {
      console.log(val)
      this.form.station = val.station
      this.form.position = val.position
    }
  }
}
</script>
<style scoped>
</style>