<template>
  <div class="wrapper">
    <div class="header">
      <span @click="toUrl('A')" :class="{'active': current === 'A'}">a</span>
      <span @click="toUrl('B')" :class="{'active': current === 'B'}">b</span>
      <span @click="toUrl('C')" :class="{'active': current === 'C'}">c</span>
    </div>
    <hr />
    <div class="content">
      <keep-alive :include="cache">
        <router-view :key="key"></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      current: 'A',
      // 缓存哪些组件
      cache: ['A', 'B', 'C']
    }
  },
  computed: {
    key() {
      return this.$route.path
    }
  },
  watch: {},
  created() {},
  mounted() {},
  activated() {},
  deactivated() {},
  updated() {},
  destroyed() {},
  methods: {
    toUrl(name) {
      this.current = name
      // let isHas = this.cache.includes(name)
      // if (!isHas) this.cache.push(name)
      console.log('this.cache', this.cache)
      this.$router.push({
        name: name
      })
    }
  },
  filter: {}
}
</script>
<style scoped lang="scss">
.header {
  width: 500px;
  padding: 30px;
  border: 1px solid #ccc;
  margin: auto;
  span {
    font-size: 30px;
    width: 100px;
    background: #fb3;
    display: inline-block;
    text-align: center;
    cursor: pointer;
    &.active {
      background: #1acd7e;
      color: #fff;
    }
  }
}
.content {
  width: 500px;
  border: 1px solid #ccc;
  height: 400px;
  margin: auto;
}
</style>
 