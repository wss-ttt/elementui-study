<template>
  <div class="wrapper">
    <div class="box">
      <v-row :gutter="20">
        <v-col :span="12">
          <div class="item">111</div>
        </v-col>

        <v-col :span="6">
          <div class="item">222</div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import VRow from './components/Row.vue'
import VCol from './components/Col.vue'
export default {
  components: {
    VRow,
    VCol
  },
  props: {},
  data() {
    return {}
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
  width: 400px;
  height: 400px;
  background: #bb3;
  margin: 100px auto;
}
.item {
	border: 1px solid red;
}
</style>