<template>
  <div class="wrapper">
    <div class="box row row--flex is-justify-center">
      <div class="wt-col-2">aa</div>
      <div class="wt-col-2">bb</div>
      <!-- <div class="wt-col-1">cc</div>
      <div class="wt-col-2 wt-col-offset-6">dd</div>
      <div class="wt-col-24">ee</div> -->
    </div>
  </div>
</template>

<script>
export default {
  components: {},
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
  background: #bb3;
  width: 400px;
  margin: 100px auto;
}

.row {
  position: relative;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
// 该样式可以不需要
.row::before {
  content: '';
  display: table;
}

// 用于清除浮动的
.row::after {
  content: '';
  display: table;
  clear: both;
}

// 对齐方式
.row--flex {
  display: flex;
}

// 居中
.row--flex.is-justify-center {
  justify-content: center;
}
// 两端对齐
.el-row--flex.is-justify-space-between {
  justify-content: space-between;
}
// 靠左对齐
.el-row--flex.is-justify-end {
  justify-content: flex-end;
}

// 平均分配
.el-row--flex.is-justify-space-around {
  justify-content: space-around;
}
// 属性选择器: 选择包含 'wt-col-'的元素
[class*='wt-col-'] {
  float: left;
  box-sizing: border-box;
}

@for $i from 1 through 24 {
  .wt-col-#{$i} {
    width: (1 / 24 * $i * 100) * 1%;
  }

  .wt-col-offset-#{$i} {
    margin-left: (1 / 24 * $i * 100) * 1%;
  }
}
</style>