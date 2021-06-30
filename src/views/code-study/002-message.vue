
<template>
  <div class="wrapper">
    <el-button :plain="true" @click="open2">成功</el-button>
    <v-message></v-message>
  </div>
</template>

<script>
import VMessage from './components/Message.vue'
export default {
  props: {},
  data() {
    return {}
  },
  computed: {},
  components: {
      VMessage
  },
  created() {},
  mounted() {},
  destroyed() {},
  watch: {},
  methods: {
    open2() {
      this.$message({
        message: '恭喜你，这是一条成功消息',
        type: 'success'
      })
    },
    open3(){
    }
  }
}
</script>
<style scoped>
</style>