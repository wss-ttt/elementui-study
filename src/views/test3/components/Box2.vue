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
      isEex: false, // 是否已改变了
      st: '', // 开始时间
      et: '' // 结束时间
    }
  },
  computed: {
    startTime: {
      get() {
        return this.$store.state.common.startTime
      }
    },
    endTime: {
      get() {
        return this.$store.state.common.endTime
      }
    },
    isChange: {
      get() {
        return this.$store.state.common.isChange
      }
    }
  },
  components: {},
  created() {},
  mounted() {},
  activated() {
    // 回显操作
    if (this.isEex) {
      this.st = this.startTime
      this.et = this.endTime
    }
  },
  deactivated(){
    this.isEex = false
  },
  destroyed() {},
  watch: {
    isChange: {
      handler(newVal, oldVal) {
        console.log('监听改变事件')
        this.isEex = true
      }
    }
  },
  methods: {
    search() {
      this.$emit('search', {
        startTime: this.st,
        endTime: this.et
      })
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