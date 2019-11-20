<template>
  <div class="box2">
    <h2>我是搜索组件</h2>开始时间:
    <el-input v-model="st"></el-input>结束时间:
    <el-input v-model="et"></el-input>
    <!-- 开始时间:{{startTime}}
    结束时间:{{endTime}}-->
    <el-button @click="search">搜索</el-button>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      st: '', // 开始时间
      et: '' // 结束时间
    }
  },
  computed: {
    startTime: {
      get() {
        return this.$store.state.common.startTime
      },
      set(val) {
        this.$store.commit('common/updateStartTime',val)
      }
    },
    endTime: {
      get() {
        return this.$store.state.common.endTime
      },
      set(val) {
        this.$store.commit('common/updateEndTime',val)
      }
    }
  },
  components: {},
  created() {},
  mounted() {},
  destroyed() {},
  watch: {},
  methods: {
    search() {
      this.startTime = this.st // 开始时间
      this.endTime = this.et // 结束时间
    }
  }
}
</script>
<style scoped>
.box2 {
  padding: 15px;
  background-color: #ccc;
}
</style>