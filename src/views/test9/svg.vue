<template>
  <div class="wrapper">
    <div class="box" v-html="svgHtml"></div>
    <div v-html="testHtml"></div>
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
        }, {
          "positionId": 5,
          "positionNum": 1,
          "positionName": "220kV 一母",
          "isBus": 1,
          "transformerId": 13,
          "phaseSequence": "A",
          "monitiorState": 0,
          "ratioDifferenceAverage": 0.024,
          "measuringTime": "2020-07-10 00:00:00",
          "adata": {
            "val": 0.024,
            "status": 0
          },
          "bdata": {
            "val": 0.065,
            "status": 0
          },
          "cdata": {
            "val": 0.096,
            "status": 0
          },
          "datas": [{
            "val": 0.024,
            "status": 0
          }, {
            "val": 0.065,
            "status": 0
          }, {
            "val": 0.096,
            "status": 0
          }]
        }],
        svgHtml: '',
        classType: ['normal', 'warning', 'abnormal'],
        aniType: ['normalAni', 'warningAni', 'abnormalAni'],
        testHtml: `<div class="container">
                      <div class="left">left</div>
                      <div class="right">right</div>
                  </div>`
      }
    },
    computed: {},
    watch: {},
    created() {},
    async mounted() {
      await this.getSvgHtml()
      const vm = this
      const transGroup = document.querySelector('#transformer')
      const trans = transGroup.querySelectorAll('g')
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
    },
    activated() {},
    deactivated() {},
    updated() {},
    destroyed() {},
    methods: {
      getSvgHtml() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            this.svgHtml = `<svg id="互感器组" xmlns="http://www.w3.org/2000/svg"   xmlns:xlink="http://www.w3.org/1999/xlink" width="1890"
              height="1417" viewBox="0 0 1890 1417">
              <defs>
                <style>
                  .cls-1,
                  .cls-2 {
                  fill: none;
                  }

                  .cls-1 {
                  stroke: #00a0e9;
                  stroke-width: 4px;
                  }

                  .cls-2 {
                  stroke: #fff100;
                  stroke-width: 2px;
                  }

                  .cls-3,
                  .cls-4 {
                  font-size: 50px;
                  }

                  .cls-4 {
                  font-family: "Adobe Heiti Std";
                  }

                </style>
                <path id="text-path" d="M107.52,92.64l56.88-18" />
              </defs>
              <g id="transformer">
                <g id="组1">
                  <circle id="椭圆_3" data-name="椭圆 3" class="cls-1" cx="509" cy="526" r="30" />
                  <circle id="椭圆_2" data-name="椭圆 2" class="cls-1" cx="527" cy="556" r="30" />
                  <circle id="椭圆_1" data-name="椭圆 1" class="cls-1" cx="487" cy="554" r="30" />
                </g>
                <g id="组2">
                  <circle id="椭圆_3-2" data-name="椭圆 3" class="cls-1" cx="642" cy="526" r="30" />
                  <circle id="椭圆_2-2" data-name="椭圆 2" class="cls-1" cx="660" cy="556" r="30" />
                  <circle id="椭圆_1-2" data-name="椭圆 1" class="cls-1" cx="620" cy="554" r="30" />
                </g>
                <g id="组3">
                  <circle id="椭圆_3-3" data-name="椭圆 3" class="cls-1" cx="767" cy="525" r="30" />
                  <circle id="椭圆_2-3" data-name="椭圆 2" class="cls-1" cx="785" cy="555" r="30" />
                  <circle id="椭圆_1-3" data-name="椭圆 1" class="cls-1" cx="745" cy="553" r="30" />
                </g>
              </g>
              <rect id="主变1" class="cls-2" x="448" y="311" width="237" height="75" />
              <text class="cls-3">
                <textPath xlink:href="#text-path">
                  <tspan class="cls-4">湖边</tspan>
                </textPath>
              </text>
            </svg>`
            resolve()
          }, 1000)
        })
      },
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

  >>>.container {
    width: 400px;
    height: 400px;
    border: 1px solid red;
    display: flex;
    >div {
      flex: 1;
      &.left {
        background: #fb3;
      }
      &.right {
        background: #1acd7e;
      }
    }
  }

  .box {
    width: 2500px;
    height: 1740px;
    background: #0D2C71;
  }

  // 使用v-html 必须使用样式穿透
  >>>svg {
    width: 100%;
    height: 100%;

    #transformer {
      >g {
        cursor: pointer;

        >circle {
          fill: transparent;
          /*转换成透明色*/
          stroke-width: 4;
          stroke: #03C1FF;
          /* animation: shink 1s infinite ease-in-out; */
          animation: normalAni 1s linear infinite alternate;
        }
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
