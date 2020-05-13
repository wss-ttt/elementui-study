<template>
  <div class="wrapper">
    <v-c :list="list"></v-c>
  </div>
</template>

<script>
  import VC from './components/C'
  export default {
    components: {
      VC
    },
    props: {},
    data() {
      return {
        list: [],
        name: ''
      }
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {
      this.getData()
      console.log('父组件的mounted')
      console.log('父组件list:',this.list)
    },
    activated() {},
    deactivated() {},
    updated() {},
    destroyed() {},
    methods: {
      getData() {
        for (let i = 0; i < 5; i++) {
          this.list.push({
            name: '张三' + i,
            age: i,
            sex: '男'
          })
        }
      }
    },
    filter: {}
  }

</script>
<style scoped>
</style>
