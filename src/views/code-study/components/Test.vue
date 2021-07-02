<template>
  <div class="test" @click="handleClick">{{ value }}</div>
</template>

<script>
export default {
  components: {},
  props: {
    value: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      currentValue: this.value
    }
  },
  methods: {
    handleClick() {
      this.currentValue++
      this.$emit('input', this.currentValue)
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  activated() {},
  deactivated() {},
  updated() {},
  destroyed() {},
  filters: {}
}
</script>
<style scoped lang="scss">
.test {
  border: 1px solid red;
}
</style>