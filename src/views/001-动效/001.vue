<template>
  <div class="wrapper">
    <div class="timeline_div">
      <div v-for="(i, index) in 29" :key="i" :class="{'f-border': index % 4 === 0, 'active': current === index }"></div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {
        current: -1,
        timer: null
      }
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {
      var odiv_t = document.querySelector('.timeline_div');
      var odiv = document.querySelectorAll('.timeline_div div');
      var odiv_length = odiv.length;
      var num = 0,
        wheel;
      var ln = 0;
      for (var i = 0; i < odiv_length; i++) {
        var n = parseInt(i / 4) % 2 == 0 ? num++ : num--
        wheel = odiv_t.offsetHeight / 5 * n
        odiv[i].style.transform = 'translateY(' + wheel + 'px)';

        /* (function (i) {
          setTimeout(function () {
            console.log('ln', ln)
            console.log('i', i)
            odiv[ln].classList.remove('active');
            odiv[i].classList.add('active');
            ln = i;
            if (i == odiv_length - 1) {
              setTimeout(function () {
                odiv[i].classList.remove('active');
              }, 500)
            }
          }, 150 * i)
        }(i)) */
      }

      this.timer = setInterval(() => {
        this.current++
        if (this.current === odiv_length) {
          this.current = -1
          clearInterval(this.timer)
        }
      }, 150)
    },
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
    height: 600px;
    background-color: pink;
    position: relative;
  }

  .timeline_div {
    border: 1px solid red;
    width: 1050px;
    // width: 90%;
    height: 90px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
    display: flex;
    justify-content: space-between;

    div {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #ffae12;
      border: 5px solid #f6f6f6;
      box-sizing: content-box;
    }
  }

  .f-border {
    border-color: #fff;
    box-shadow: 0 0 8px rgba(0, 0, 0, .5);

  }

  .active {
    border: 5px;
    border-color: #fff;
    box-shadow: 0 0 10px 3px #ffae12;
  }

</style>
