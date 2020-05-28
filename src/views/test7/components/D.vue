<template>
  <div class="wrapper">
    D页面

    <router-link :to="{name: 'test7-index2'}">返回</router-link>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {

      }
    },
    computed: {},
    watch: {},
    created() {
      console.log('d created')
    },
    mounted() {
      console.log('d mounted')
    },
    activated() {
      console.log('d activated')
    },
    deactivated() {
      console.log('d deactivated')
    },
    updated() {},
    destroyed() {
        console.log('d destroyed')
    },
    methods: {},
    filter: {}
  }

</script>
<style scoped>
</style>
