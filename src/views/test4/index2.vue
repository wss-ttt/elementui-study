<template>
  <div class="wrapper">
    <v-box :data="option" ref="vBox"></v-box>
  </div>
</template>

<script>
import VBox from './components/box'
export default {
  components: {
    VBox
  },
  props: {},
  data() {
    return {
      option: {
        name: '乔峰',
        age: 18
      }
    }
  },
  created() {},
  mounted() {
      this.option = {
          name:'杨过',
          age:18
      }
      this.$nextTick(()=>{
        this.$refs['vBox'].show()
      })
      console.log(this.$refs['vBox'])
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
</style>