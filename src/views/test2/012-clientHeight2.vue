<template>
  <div class="wrapper">
    <div class="header">header</div>
    <div class="content">content</div>
  </div>
</template>

<script>
// study:让content的高度为可视区域的高度(会变化的) - header的高度(为固定高度80px)
// 使用了 calc这个方法
export default {
  props: {},
  data() {
    return {
    }
  },
  computed: {
  },
  mounted() {
  },
  watch: {},
  methods: {}
}
</script>
<style scoped lang="scss">
.wrapper {
  height: 100%;
  .header {
    height: 80px;
    background-color: #1acd7e;
  }
  .content {
    height: calc(100% - 80px);
    background-color: antiquewhite;
  }
}
</style>