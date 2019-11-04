<template>
  <div class="wrapper">
      {{userName}}
      <br>
      <button @click="change">改变</button>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
        name:'黑色毛衣'
    }
  },
  computed: {
    userName: {
      get() {
        return this.name
      },
      set(val){
          this.name = val
      }
    }
  },
  components: {},
  created() {},
  mounted() {},
  destroyed() {},
  watch: {},
  methods: {
      change(){
          this.name = '给我一首歌的时间'
      }
  }
}
</script>
<style scoped>
</style>