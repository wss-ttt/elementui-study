<template>
  <div class="wrapper">
    <div v-red>好好学习</div>

    <div v-red="color">好好学习</div>

    <div v-red="'blue'">给我一首歌的时间</div>

    <div class="box" v-pin="200"></div>

    <div class="box" v-pin:[direction]="200"></div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      color: 'green',
      direction:'right'
    }
  },
  computed: {},
  components: {},
  created() {},
  mounted() {},
  destroyed() {},
  watch: {},
  methods: {},
  directives: {
    // 定义指令
    red: {
      bind: function(el, binding, vnode) {
        let color = binding.value || 'red' // 动态指令参数
        el.style.color = color
      }
    },
    pin: {
      bind: function(el, binding, vnode) {
        let distance = binding.value
        let direction = binding.arg || 'left'
        el.style.position = 'fixed'
        el.style.top = binding.value + 'px'
        el.style[direction] = binding.value + 'px'
      }
    }
  }
}
</script>
<style scoped>
.box {
  width: 200px;
  height: 200px;
  background-color: #ccc;
}
</style>