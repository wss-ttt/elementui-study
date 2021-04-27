<template>
  <div class="wrapper">
    <el-row>
      <el-col :span="6" class="item">
        <div class="item-inner">
          <div class="item-loader-container">
            <div class="la-line-scale la-2x">
              <div v-for="i in 5" :key="'line-scale' + i"></div>
            </div>
          </div>
        </div>
        <div class="item-title"><a href="#">Line Scale<span>→</span></a></div>
      </el-col>
      <el-col :span="6" class="item">
        <div class="item-inner">
          <div class="item-loader-container">
            <div class="la-line-scale-party la-2x">
              <div v-for="i in 5" :key="'line-scale-party' + i"></div>
            </div>
          </div>
        </div>
        <div class="item-title"><a href="#">Line Scale Party<span>→</span></a></div>
      </el-col>
      <el-col :span="6" class="item">
        <div class="item-inner">
          <div class="item-loader-container">
            <div class="la-ball-grid-pulse la-2x">
              <div v-for="i in 9" :key="'ball-grid-pulse' + i"></div>
            </div>
          </div>
        </div>
        <div class="item-title"><a href="#">Ball Grid Pulse<span>→</span></a></div>
      </el-col>
      <el-col :span="6" class="item">
        <div class="item-inner">
          <div class="item-loader-container">
            <div class="la-ball-newton-cradle la-2x">
              <div v-for="i in 4" :key="'ball-newton-cradle' + i"></div>
            </div>
          </div>
        </div>
        <div class="item-title"><a href="#">Ball Newton Cradle<span>→</span></a></div>
      </el-col>
      <el-col :span="6" class="item">
        <div class="item-inner">
          <div class="item-loader-container">
            <div class="la-ball-triangle-path la-2x">
              <div v-for="i in 3" :key="'ball-triangle-path' + i"></div>
            </div>
            <div class="item-title"><a href="#">Ball Triangle Path<span>→</span></a>
            </div>
          </div>
        </div>
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
        width: calc(100% / 5);
        height: 100%;
        margin: 4px;
      }
    }

    >div {
      width: calc(100% / 5);
      height: 100%;
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
        width: calc(100% / 5);
        height: 100%;
        margin: 4px;
      }
    }

    >div {
      width: calc(100% / 5);
      height: 100%;
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

  .la-ball-grid-pulse {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 36px;
    height: 36px;

    &.la-2x {
      width: 72px;
      height: 72px;
    }

    >div {
      width: calc((100% - 13px) / 3);
      height: calc((100% - 13px) / 3);
      border-radius: 50%;
      background-color: #fff;
      animation-name: ball-grid-pulse;
      animation-iteration-count: infinite;

      &:nth-child(1) {
        animation-duration: .65s;
        animation-delay: .03s;
      }

      &:nth-child(2) {
        animation-duration: 1.02s;
        animation-delay: .09s;
      }

      &:nth-child(3) {
        animation-duration: 1.06s;
        animation-delay: -.69s;
      }

      &:nth-child(4) {
        animation-duration: 1.5s;
        animation-delay: -.41s;
      }

      &:nth-child(5) {
        animation-duration: 1.6s;
        animation-delay: .04s;
      }

      &:nth-child(6) {
        animation-duration: .84s;
        animation-delay: .07s;
      }

      &:nth-child(7) {
        animation-duration: .68s;
        animation-delay: -.66s;
      }

      &:nth-child(8) {
        animation-duration: .93s;
        animation-delay: -.76s;
      }

      &:nth-child(9) {
        animation-duration: 1.24s;
        animation-delay: -.76s;
      }
    }
  }

  .la-ball-newton-cradle {
    @include center();
    width: 40px;
    height: 10px;

    &.la-2x {
      width: 80px;
      height: 20px;
    }

    >div {
      width: calc(100% / 4);
      height: 100%;
      border-radius: 50%;
      background-color: #fff;

      &:first-child {
        transform: translateX(0%);
        animation: ball-newton-cradle-left 1s 0s ease-out infinite;
      }

      &:last-child {
        transform: translateX(0%);
        animation: ball-newton-cradle-right 1s 0s ease-out infinite;
      }
    }
  }

  .la-ball-triangle-path {
    width: 32px;
    height: 32px;
    position: relative;

    &.la-2x {
      width: 64px;
      height: 64px;

      >div {
        width: 20px;
        height: 20px;
      }
    }

    >div {
      position: absolute;
      top: 0;
      left: 0;
      width: 10px;
      height: 10px;
      background-color: #fff;
      border-radius: 50%;

      &:nth-child(1) {
        animation: ball-triangle-path-ball-one 2s 0s ease-in-out infinite;
      }

      &:nth-child(2) {
        animation: ball-triangle-path-ball-two 2s 0s ease-in-out infinite;
      }

      &:nth-child(3) {
        animation: ball-triangle-path-ball-three 2s 0s ease-in-out infinite;
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

  @keyframes ball-grid-pulse {
    0% {
      opacity: 1;
      transform: scale(1);
    }

    50% {
      opacity: .35;
      transform: scale(0.45);
    }

    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes ball-newton-cradle-left {
    25% {
      transform: translateX(-100%);
      animation-timing-function: ease-in;
    }

    50% {
      transform: translateX(0%);
    }
  }

  @keyframes ball-newton-cradle-right {
    50% {
      transform: translateX(0%);
    }

    75% {
      transform: translateX(100%);
      animation-timing-function: ease-in;
    }

    100% {
      transform: translateX(0%);
    }
  }

  @keyframes ball-triangle-path-ball-one {
    0% {
      transform: translate(0, 220%);
    }

    17% {
      opacity: .25;
    }

    33% {
      opacity: 1;
      transform: translate(110%, 0);
    }

    50% {
      opacity: .25;
    }

    66% {
      opacity: 1;
      transform: translate(220%, 220%);
    }

    83% {
      opacity: .25;
    }

    100% {
      opacity: 1;
      transform: translate(0, 220%);
    }
  }

  @keyframes ball-triangle-path-ball-two {
    0% {
      transform: translate(110%, 0);
    }

    17% {
      opacity: .25;
    }

    33% {
      opacity: 1;
      transform: translate(220%, 220%);
    }

    50% {
      opacity: .25;
    }

    66% {
      opacity: 1;
      transform: translate(0, 220%);
    }

    83% {
      opacity: .25;
    }

    100% {
      opacity: 1;
      transform: translate(110%, 0);
    }
  }

  @keyframes ball-triangle-path-ball-three {
    0% {
      transform: translate(220%, 220%);
    }

    17% {
      opacity: .25;
    }

    33% {
      opacity: 1;
      transform: translate(0, 220%);
    }

    50% {
      opacity: .25;
    }

    66% {
      opacity: 1;
      transform: translate(110%, 0);
    }

    83% {
      opacity: .25;
    }

    100% {
      opacity: 1;
      transform: translate(220%, 220%);
    }
  }

</style>
