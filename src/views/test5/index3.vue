<template>
    <div class="wrapper">
       <v-a></v-a>
       <hr>
       <v-b></v-b>
   </div>
</template>

<script>
import VA from './components/A.vue'
import VB from './components/B.vue'
  export default {
    components: {
        VA,
        VB
    },
    props: {},
    data() {
      return {
          
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
    methods: {},
    filter: {}
  }
</script>
<style scoped>
</style>