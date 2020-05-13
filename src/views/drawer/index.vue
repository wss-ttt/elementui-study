<template>
  <div class="wrapper">
    <button type="button" @click="drawer = true">显示</button>
    <v-drawer :visible.sync="drawer">
      <div>
        好后学习
      </div>
    </v-drawer>
  </div>
</template>

<script>
  import VDrawer from './components/Drawer'
  export default {
    components: { 
      VDrawer
    },
    props: {},
    data() {
      return {
        drawer: false
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
      hide(data) {
        this.drawer = data
      }
    },
    filter: {}
  }

</script>
<style scoped>
</style>
