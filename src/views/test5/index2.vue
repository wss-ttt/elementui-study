<template>
  <div class="wrapper">
      <v-card>默认是正常</v-card>
      <v-card type="warning">警告</v-card>
      <v-card type="abnormal">异常</v-card>
  </div>
</template>

<script>
  import VCard from './components/Card'
  export default {
    components: {
        VCard
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
