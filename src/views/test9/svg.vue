<template>
  <div class="wrapper">
    <div class="box" v-html="svgHtml">
      <!-- <svg id="互感器组" xmlns="http://www.w3.org/2000/svg" width="1890" height="1417" viewBox="0 0 1890 1417">
        <g id="组2" class="transformer">
          <circle id="circle2" class="cls-1" cx="770" cy="331" r="30" />
          <circle id="circle1" class="cls-1" cx="790" cy="353" r="30" />
          <circle id="circle3" class="cls-1" cx="754" cy="355" r="30" />
        </g>
        <g id="组1" class="transformer">
          <circle id="circle2-2" data-name="circle2" class="cls-1" cx="902" cy="333" r="30" />
          <circle id="circle1-2" data-name="circle1" class="cls-1" cx="922" cy="355" r="30" />
          <circle id="circle3-2" data-name="circle3" class="cls-1" cx="886" cy="357" r="30" />
        </g>
      </svg> -->
    </div>
    <div class="main" v-html="testHtml">
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {
        list: [{
          "positionId": 6,
          "positionNum": 2,
          "positionName": "110kV 一母",
          "isBus": 1,
          "transformerId": 16,
          "phaseSequence": "A",
          "monitiorState": 0,
          "ratioDifferenceAverage": 0.07,
          "measuringTime": "2020-07-10 00:00:00",
          "adata": {
            "val": 0.07,
            "status": 0
          },
          "bdata": {
            "val": 0.175,
            "status": 1
          },
          "cdata": {
            "val": 0.138,
            "status": 2
          },
          "datas": [{
              "val": 0.07,
              "status": 0
            },
            {
              "val": 0.175,
              "status": 1
            },
            {
              "val": 0.138,
              "status": 2
            }
          ]
        }, {
          "positionId": 8,
          "positionNum": 4,
          "positionName": "110kV 二母",
          "isBus": 1,
          "transformerId": 22,
          "phaseSequence": "A",
          "monitiorState": 0,
          "ratioDifferenceAverage": 0.067,
          "measuringTime": "2020-07-10 00:00:00",
          "adata": {
            "val": 0.067,
            "status": 0
          },
          "bdata": {
            "val": 0.082,
            "status": 1
          },
          "cdata": {
            "val": -1.903,
            "status": 2
          },
          "datas": [{
            "val": 0.067,
            "status": 1
          }, {
            "val": 0.082,
            "status": 1
          }, {
            "val": -1.903,
            "status": 2
          }]
        }],
        svgHtml: `<svg id="互感器组" xmlns="http://www.w3.org/2000/svg" width="1890"    height="1417" viewBox="0 0 1890 1417">
          <g id="组2" class="transformer">
            <circle id="circle2" class="cls-1" cx="770" cy="331" r="30" />
            <circle id="circle1" class="cls-1" cx="790" cy="353" r="30" />
            <circle id="circle3" class="cls-1" cx="754" cy="355" r="30" />
          </g>
          <g id="组1" class="transformer">
            <circle id="circle2-2" data-name="circle2" class="cls-1" cx="902" cy="333" r="30" />
            <circle id="circle1-2" data-name="circle1" class="cls-1" cx="922" cy="355" r="30" />
            <circle id="circle3-2" data-name="circle3" class="cls-1" cx="886" cy="357" r="30" />
          </g>
        </svg>`,
        classType: ['normal', 'warning', 'abnormal'],
        aniType: ['normalAni', 'warningAni', 'abnormalAni'],
        testHtml: '<div class="red">好好学习</div>'
      }
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {
      const vm = this
      this.$nextTick(() => {
        const trans = document.querySelectorAll('.transformer')
        console.log('trans', trans)
        this.list.forEach((item, index) => {
          let datas = item.datas
          datas.forEach((item, jndex) => {
            // 原生js写法
            trans[index].children[jndex].classList.add(this.classType[item['status']])
          })
        })
  
        // 添加单机事件
        for (let i = 0; i < trans.length; i++) {
          trans[i].onclick = function () {
            vm.showPicture(vm.list[i]['positionId'], vm.list[i]['positionNum'], vm.list[i]['positionName'], i)
          }
        }
      })
    },
    activated() {},
    deactivated() {},
    updated() {},
    destroyed() {},
    methods: {
      showPicture(positionId, positionNum, positionName, index) {
        console.log(positionId, positionNum, positionName, index)
      }
    },
    filters: {}
  }

</script>
<style scoped lang="scss">
  >>>.red {
    color: red;
  }

  .box {
    width: 2500px;
    height: 1740px;
    background: #0D2C71;
  }

  .cls-1 {
    fill: none;
    stroke: #00a0e9;
    stroke-width: 4px;
  }

  >>>svg {
    width: 100%;
    height: 100%;
    .transformer {
      cursor: pointer;
      circle {
        fill: transparent;
        /*转换成透明色*/
        stroke-width: 4;
        stroke: #03C1FF;
        /* animation: shink 1s infinite ease-in-out; */
        animation: normalAni 1s linear infinite alternate;
      }
    }
  }

  >>>.normal {
    stroke: #03C1FF !important;
    animation-name: normalAni;
  }

  >>>.warning {
    stroke: #00FF00 !important;
    animation-name: warningAni;
  }

  >>>.abnormal {
    stroke: #FFA500 !important;
    animation-name: abnormalAni;
  }

  @keyframes normalAni {
    0% {
      /* filter: drop-shadow(0px 0px 5px rgba(255, 165, 0, 1)); */
      filter: drop-shadow(0px 0px 5px #03C1FF);
      opacity: 1;
    }

    50% {
      filter: drop-shadow(0px 0px 20px #03C1FF);
      opacity: 0.8;
    }

    100% {
      filter: drop-shadow(0px 0px 5px #03C1FF);
      opacity: 0.5;
    }
  }

  @keyframes warningAni {
    0% {
      filter: drop-shadow(0px 0px 5px #00FF00);
      opacity: 1;
    }

    50% {
      filter: drop-shadow(0px 0px 20px #00FF00);
      opacity: 0.8;
    }

    100% {
      filter: drop-shadow(0px 0px 5px #00FF00);
      opacity: 0.6;
    }
  }

  @keyframes abnormalAni {
    0% {
      filter: drop-shadow(0px 0px 5px #FFA500);
      opacity: 1;
    }

    50% {
      filter: drop-shadow(0px 0px 20px #FFA500);
      opacity: 0.8;
    }

    100% {
      filter: drop-shadow(0px 0px 5px #FFA500);
      opacity: 0.6;
    }
  }

</style>
