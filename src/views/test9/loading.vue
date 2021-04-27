<template>
  <div class="wrapper">
    <div id="content" :class="{'fullwidth':loading1}">
      <span class="expand"></span>
    </div>
    <el-button type="button" @click="test1">开始/重新加载</el-button>
    <ul id="loadbar" :class="{'ins':loading2}">
      <li v-for="i in 10" :key="i">
        <div :id="'layerFill' + i" class="bar"></div>
      </li>
    </ul>
    <el-button type="button" @click="test2">开始/重新加载</el-button>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {
        loading1: false,
        loading2: false
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
      test1() {
        this.loading1 = false
        setTimeout(() => {
          this.loading1 = true
        }, 10)
      },
      test2() {
        this.loading2 = false
        setTimeout(() => {
          this.loading2 = true
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

  // 第1个
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
    animation: fullexpand 10s ease-out;
    -moz-animation: fullexpand 10s ease-out;
    -webkit-animation: fullexpand 10s ease-out;
  }

  @keyframes fullexpand {
    0% {
      width: 0px;
    }

    100% {
      width: 100%;
    }
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

  // 第2个
  ul#loadbar {
    list-style: none;
    width: 140px;
    margin: 0 auto;
    padding-top: 50px;
    padding-bottom: 75px;
  }

  ul#loadbar li {
    float: left;
    position: relative;
    width: 11px;
    height: 26px;
    margin-left: 1px;
    border-left: 1px solid #111;
    border-top: 1px solid #111;
    border-right: 1px solid #333;
    border-bottom: 1px solid #333;
    background: #000;
  }

  ul#loadbar li:first-child {
    margin-left: 0;
  }

  .ins .bar {
    background-color: #2187e7;
    background-image: -moz-linear-gradient(45deg, #2187e7 25%, #a0eaff);
    background-image: -webkit-linear-gradient(45deg, #2187e7 25%, #a0eaff);
    width: 11px;
    height: 26px;
    opacity: 0;
    animation: fill .5s linear forwards;
    -webkit-animation: fill .5s linear forwards;
    -moz-animation: fill .5s linear forwards;
  }

  // 使用sass进行循环操作
  @for $i from 1 through 10 {
    #layerFill#{$i} {
      animation-delay: 0.5s * $i;
      -moz-animation-delay: 0.5s * $i;
      -webkit-animation-delay: 0.5s * $i;
    }
  }

  /* #layerFill1 {
    -moz-animation-delay: 0.5s;
    -webkit-animation-delay: 0.5s;
  }

  #layerFill2 {
    -moz-animation-delay: 1s;
    -webkit-animation-delay: 1s;
  }

  #layerFill3 {
    -moz-animation-delay: 1.5s;
    -webkit-animation-delay: 1.5s;
  }

  #layerFill4 {
    -moz-animation-delay: 2s;
    -webkit-animation-delay: 2s;
  }

  #layerFill5 {
    -moz-animation-delay: 2.5s;
    -webkit-animation-delay: 2.5s;
  }

  #layerFill6 {
    -moz-animation-delay: 3s;
    -webkit-animation-delay: 3s;
  }

  #layerFill7 {
    -moz-animation-delay: 3.5s;
    -webkit-animation-delay: 3.5s;
  }

  #layerFill8 {
    -moz-animation-delay: 4s;
    -webkit-animation-delay: 4s;
  }

  #layerFill9 {
    -moz-animation-delay: 4.5s;
    -webkit-animation-delay: 4.5s;
  }

  #layerFill10 {
    -moz-animation-delay: 5s;
    -webkit-animation-delay: 5s;
  } */

  @-moz-keyframes fill {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes fill {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

</style>
