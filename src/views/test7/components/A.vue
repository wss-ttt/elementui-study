<template>
    <div class="wrapper">
       A
       <input type="text" v-model="name"/>
   </div>
</template>

<script>
  export default {
    name: 'A',
    components: {},
    props: {},
    data() {
      return {
         name: '' 
      }
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {
      console.log('A mounted')
    },
    activated() {},
    deactivated() {},
    updated() {},
    destroyed() {
      console.log('A destroyed')
    },
    methods: {},
    filter: {}
  }
</script>
<style scoped>
</style>
 