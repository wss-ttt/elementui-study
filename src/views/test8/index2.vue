<template>
  <div class="wrapper">
    <d-d v-if="list.length" :list="list"></d-d>
  </div>
</template>

<script>
  import DD from './components/DD'
  export default {
    components: {
      DD
    },
    props: {},
    data() {
      return {
        list: []
      }
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {
      this.getData()
    },
    activated() {},
    deactivated() {},
    updated() {},
    destroyed() {},
    methods: {
      getData() {
        this.$ajax({
          url: '/api/list',
          method: 'post'
        }).then(({data}) => {
          console.log('data', data)
          this.list = data.data
        })
      }
    },
    filter: {}
  }

</script>
<style scoped>
</style>
