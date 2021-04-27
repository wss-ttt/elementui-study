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
      <el-col :span="6" class="item">
        <div class="item-inner">
          <div class="item-loader-container">
            <div class="la-line-scale-party la-2x">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <div class="item-title"><a href="#">Line Scale Party<span>→</span></a></div>
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
  @mixin center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .wrapper {
    height: 100%;
    background-color: rgb(152, 191, 246);
    color: #fff;
  }

  a {
    text-decoration: none;
    color: rgba(255, 255, 255, .7);
  }


  .item {
    height: 200px;
    position: relative;
    cursor: pointer;
    transition: all 250ms linear;

    .item-inner {
      position: relative;
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;

      .item-loader-container {
        div {
          animation-play-state: paused; // 暂停动画
        }
      }
    }

    .item-title {
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      font-size: 16px;
      line-height: 1em;
      text-align: center;
      padding: 10px 5px;

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

    &:hover {
      box-shadow: inset 0 0 0 2px rgba(0, 0, 0, .3);

      .item-inner {
        .item-loader-container {
          div {
            animation-play-state: running; // 开启动画
          }
        }
      }
    }
  }

  .la-line-scale {
    @include center();
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
      }
    }

    >div {
      width: 4px;
      height: 32px;
      margin: 2px;
      background-color: #fff;
      animation: line-scale 1.2s infinite ease;

      @for $i from 1 through 5 {
        &:nth-child(#{$i}) {
          animation-delay: -1.2s + $i * 0.1; // 延迟动画时间
        }
      }
    }
  }

  .la-line-scale-party {
    @include center();
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
      }
    }

    >div {
      width: 4px;
      height: 32px;
      margin: 2px;
      background-color: #fff;
      animation: line-scale-party 1.2s infinite ease;

      &:nth-child(1) {
        animation-duration: .43s;
        animation-delay: -.23s;
      }

      &:nth-child(2) {
        animation-duration: .62s;
        animation-delay: -.32s;
      }

      &:nth-child(3) {
        animation-duration: .43s;
        animation-delay: -.44s;
      }

      &:nth-child(4) {
        animation-duration: .8s;
        animation-delay: -.31s;
      }

      &:nth-child(5) {
        animation-duration: .74s;
        animation-delay: -.24s;
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

  @keyframes line-scale-party {

    0% {
      transform: scaleY(1);
    }

    50% {
      transform: scaleY(0.3);
    }

    100% {
      transform: scaleY(1);
    }
  }

</style>
