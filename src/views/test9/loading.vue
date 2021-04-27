<template>
  <div class="wrapper">
    <div id="content" :class="{'fullwidth':loading1}">
      <span class="expand"></span>
    </div>
    <el-button type="button" @click="loading">开始/重新加载</el-button>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {
        loading1: false
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
      loading() {
        this.loading1 = false
        setTimeout(() => {
          this.loading1 = true
        }, 10)
      }
    },
    filters: {}
  }

</script>
<style scoped lang="scss">
  .wrapper {
    height: 100%;
    background: #000;
  }

  #content {
    width: 100%;
    height: 5px;
    background: #000;
    margin: 50px auto;
    display: inline-block;
  }

  .fullwidth .expand {
    width: 100%;
    height: 1px;
    margin: 2px 0;
    background: #2187e7;
    position: absolute;
    box-shadow: 0px 0px 10px 1px rgba(0, 198, 255, 0.7);
    -moz-animation: fullexpand 10s ease-out;
    -webkit-animation: fullexpand 10s ease-out;
  }

  @-moz-keyframes fullexpand {
    0% {
      width: 0px;
    }

    100% {
      width: 100%;
    }
  }

  @-webkit-keyframes fullexpand {
    0% {
      width: 0px;
    }

    100% {
      width: 100%;
    }
  }

</style>
