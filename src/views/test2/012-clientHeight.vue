<template>
  <div class="wrapper">
    <div class="header">header</div>
    <div class="content" :style="{height:contentHeight+'px'}">content</div>
  </div>
</template>

<script>
// study:让content的高度为可视区域的高度(会变化的) - header的高度(为固定高度80px)
export default {
  props: {},
  data() {
    return {
      clientHeight: document.documentElement['clientHeight']
    }
  },
  computed: {
    contentHeight: {
      get() {
        return this.clientHeight - 80
      },
      set(val) {
        this.clientHeight = val
      }
    }
  },
  mounted() {
    window.addEventListener('resize', () => {
      console.log('可视区域的高度', this.clientHeight)
      this.clientHeight = document.documentElement['clientHeight']
    })
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
    background-color: antiquewhite;
  }
}
</style>