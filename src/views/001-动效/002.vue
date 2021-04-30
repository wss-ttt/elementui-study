<template>
  <div class="wrapper">
    <canvas id="can" width=300 height=300></canvas>
    <canvas id="can2" width=300 height=300></canvas>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {
        CFG: {
          perDeg: 1, // 调节速度
        },
        deg: 0,
        ctx: null, // 保存canvas对象
      }
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {
      const cvs = document.getElementById('can')
      this.ctx = cvs.getContext('2d')
      this.ctx.strokeStyle = 'rgba(0, 255, 0, 1)' // 描边的颜色 也就是线条的颜色
      this.ctx.fillStyle = 'rgba(0,50,0,1)'; // 填充颜色
      this.init()
    },
    activated() {},
    deactivated() {},
    updated() {},
    destroyed() {},
    methods: {
      init() {
        // 绘制弧线(属于路径)
        this.ctx.arc(150, 150, 150, 0, 2 * Math.PI);
        this.ctx.fill();
        this.loop()
        
      },
      loop() {
        this.deg = (this.deg + this.CFG.perDeg);
        this.cover();
        this.drawPosLine();
        this.drawRadar(this.deg);
        // 动画
        window.requestAnimationFrame(this.loop);
      },
      cover() {
        this.ctx.save();
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.02)';
        this.ctx.arc(150, 150, 150, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.restore();
      },
      drawPosLine() {
        // 1.绘制十字架
        // 1.1 十字架的竖线
        this.ctx.beginPath();
        this.ctx.moveTo(150, 0);
        this.ctx.lineTo(150, 300);
        this.ctx.closePath();
        this.ctx.stroke();
        // 1.2 十字架的横线
        this.ctx.beginPath();
        this.ctx.moveTo(0, 150);
        this.ctx.lineTo(300, 150);
        this.ctx.closePath();
        this.ctx.stroke();

        // 2.绘制外层的大圆环
        this.ctx.moveTo(150, 150);
        this.ctx.beginPath();
        this.ctx.arc(150, 150, 100, 0 * Math.PI, 2 * Math.PI);
        this.ctx.closePath();
        this.ctx.stroke();

        // 3.绘制内层的小圆环
        this.ctx.moveTo(150, 150);
        this.ctx.beginPath();
        this.ctx.arc(150, 150, 50, 0 * Math.PI, 2 * Math.PI);
        this.ctx.closePath();
        this.ctx.stroke();
      },
      drawRadar(iDeg) {
        this.ctx.fillStyle = 'rgba(0, 200, 0, .7)';
        this.ctx.beginPath();
        this.ctx.moveTo(150, 150);
        this.ctx.arc(150, 150, 150, (-2 * this.CFG.perDeg + iDeg) / 180 * Math.PI, (0 + iDeg) / 180 * Math.PI);
        this.ctx.closePath();
        this.ctx.fill(); // 填充颜色
      }
    },
    filters: {}
  }

</script>
<style scoped>
</style>
