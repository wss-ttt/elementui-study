<template>
  <div class="wrapper">
    <h2>列表</h2>
    <ul>
      <li v-for="i in 5" :key="i" @click="toDetails(i)"> {{ i }} </li>
    </ul>
    <router-view></router-view>
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
    created() {},
    mounted() {},
    activated() {},
    deactivated() {},
    updated() {},
    destroyed() {},
    methods: {
      toDetails(id) {
        this.$router.push({
          name: 'test6-details',
          params: {
            id: id
          }
        })
      }
    },
    filter: {}
  }

</script>
<style scoped>
</style>
