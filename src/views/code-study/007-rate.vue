<template>
  <div class="wrapper">
    {{ value }}
    <div class="box">
      <el-rate v-model="value" :max="5" show-text></el-rate>
      <el-rate v-model="value" :max="5" show-score></el-rate>
    </div>
    <hr />
    {{ msg }}
    <v-test v-model="msg" />
    <hr />
		{{ value2 }}
    <v-rate v-model="value2" showText />
  </div>
</template>

<script>
import VTest from './components/Test.vue'
import VRate from './components/Rate.vue'
export default {
  components: {
    VTest,
    VRate
  },
  props: {},
  data() {
    return {
      value: null,
      msg: 10,
      value2: 3
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  activated() {},
  deactivated() {},
  updated() {},
  destroyed() {},
  methods: {},
  filters: {}
}
</script>
<style scoped lang="scss">
.box {
  // display: flex;
  width: 400px;
  height: 300px;
  background: #bb3;
}
</style>