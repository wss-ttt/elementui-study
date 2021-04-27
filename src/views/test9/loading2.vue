<template>
  <div class="wrapper">
    <el-row>
      <el-col :span="6" class="item">
        <div class="item-inner">
          <div class="item-loader-container">
            <div class="la-line-scale la-2x">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <div class="item-title"><a href="#">Line Scale<span>→</span></a></div>
      </el-col>
      <el-col :span="6">
        aaa
      </el-col>
      <el-col :span="6">
        aaa
      </el-col>
      <el-col :span="6">
        aaa
      </el-col>
    </el-row>
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
    methods: {},
    filters: {}
  }

</script>
<style scoped lang="scss">
  .wrapper {
    height: 100%;
    background: #333;
    color: #fff;
  }

  a {
    text-decoration: none;
    color: rgba(255, 255, 255, .7);
  }

  .la-line-scale {
    display: block;
    font-size: 0;
    color: #fff;
    width: 40px;
    height: 32px;

    &.la-2x {
      width: 80px;
      height: 64px;

      >div {
        width: 8px;
        height: 64px;
        margin: 4px;
        margin-top: 0;
        margin-bottom: 0;
        background-color: #fff;
        display: inline-block;
        animation: line-scale 1.2s infinite ease;
      }
    }

    >div {
      width: 4px;
      height: 32px;
      margin: 2px;
      margin-top: 0;
      margin-bottom: 0;
      background-color: #fff;
      display: inline-block;
      animation: line-scale 1.2s infinite ease;
    }


    >div {
      @for $i from 1 through 5 {
        &:nth-child(#{$i}) {
          animation-delay: -1.2s + $i * 0.1; // 延迟动画时间
        }
      }
    }
  }

  .item {
    height: 200px;
    border: 1px solid #fff;
    position: relative;
    cursor: pointer;

    .item-inner {
      position: relative;
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
    }

    .item-title {
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      font-size: 16px;
      line-height: 1em;
      text-align: center;

      a {
        span {
          position: absolute;
          opacity: 0;
          transition: all 150ms ease;
          transform: translateX(-10px);
        }

        &:hover {
          color: #fff;

          span {
            opacity: 1;
            transform: translateX(5px);
          }
        }
      }
    }
  }

  @keyframes line-scale {

    0%,
    40%,
    100% {
      transform: scaleY(0.4);
    }

    20% {
      transform: scaleY(1);
    }
  }

</style>
