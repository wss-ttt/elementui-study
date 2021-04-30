<template>
  <div class="wrapper">
    <div class="row">
      <div class="col f3 item">
        <canvas id="canvas1" width="300" height="400"></canvas>
      </div>
      <div class="col f3">
        a
      </div>
      <div class="col f3">
        a
      </div>
      <div class="col f3">
        a
      </div>
      <div class="col f3">
        a
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {
        cvs: null,
        ctx: null
      }
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {
      this.cvs = document.getElementById('canvas1')
      this.ctx = this.cvs.getContext('2d')
      this.ctx.fillStyle = 'rgba(0, 200, 0, .7)'
      this.ctx.strokeStyle = 'red'
      this.ctx.lineWidth = 5
      this.ctx.beginPath()
      this.ctx.moveTo(150, 150)
      this.ctx.arc(150, 150, 100, 0, 90 / 180 * Math.PI)
      this.ctx.closePath()
      this.ctx.stroke()
      this.ctx.fill()
    },
    activated() {},
    deactivated() {},
    updated() {},
    destroyed() {},
    methods: {
    },
    filters: {}
  }

</script>
<style scoped lang="scss">
  .wrapper {
    height: 100%;
  }

  $total: 12;

  // 绘制栅格系统
  .row {
    display: flex;
    flex-wrap: wrap;
  }

  .col {

    @for $i from 1 through 12 {
      &.f#{$i} {
        width: calc(#{$i} / #{$total} * 100%);
      }
    }
  }

  .item {
    // border: 1px solid red;
    height: 400px;

    canvas {
      background: #ccc;
    }
  }

</style>



}

</style>
