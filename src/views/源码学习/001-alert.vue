<template>
  <div class="wrapper">
    <!-- 什么属性都不给的alert -->
    <el-alert title="给我一首歌的时间"></el-alert>

    <el-alert title="成功提示的文案" type="success" center effect="dark"></el-alert>
    <!-- 默认就是light -->
    <el-alert title="成功提示的文案" type="success" center effect="light" @close="close"></el-alert>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {}
  },
  computed: {},
  components: {},
  created() {},
  mounted() {},
  destroyed() {},
  watch: {},
  methods: {
    close() {
      console.log('我关闭了')
    }
  }
}
</script>
<style scoped>
.wrapper {
  padding: 30px;
}
</style>