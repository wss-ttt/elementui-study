<template>
  <div class="wrapper">
      <div>
          <!-- 姓名: {{ list[0]['name'] }} -->
          <br>
          <!-- 年龄: {{ list[0]['age'] }} -->
          <br>
          <!-- 性别: {{ list[0]['sex'] }} -->
      </div>
      <div v-for="(it, index) in list">
          姓名: {{ it['name'] }}
          <br>
          年龄: {{ it['age'] }}
          <br>
          性别: {{ it['sex'] }}
      </div>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {
      list: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {

      }
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {
        
        console.log('子组件 mounted')
        console.log('子组件list:',this.list)
    },
    activated() {},
    deactivated() {},
    updated() {},
    destroyed() {},
    methods: {},
    filter: {}
  }

</script>
<style scoped>
</style>
