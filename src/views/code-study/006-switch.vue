<template>
  <div class="wrapper">
    {{ value }}
    <el-tooltip :content="'Switch value: ' + value" placement="top">
      <el-switch
        v-model="value"
        active-color="#13ce66"
        inactive-color="#ff4949"
        active-value="b"
        inactive-value="a"
        :width="80"
      ></el-switch>
    </el-tooltip>
    <hr />
    {{ value2 }}
    <v-switch
      v-model="value2"
      :width="80"
      active-color="#13ce66"
      inactive-color="#ff4949"
      active-value="aa"
      inactive-value="bb"
    />
  </div>
</template>

<script>
import VSwitch from './components/Switch.vue'
export default {
  components: {
    VSwitch
  },
  props: {},
  data() {
    return {
      value: 'b',
      value2: 'aa'
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
<style scoped>
</style>