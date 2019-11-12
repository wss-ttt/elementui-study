
<template>
  <div>
    <div class="echarts" id="echarts-dom"></div>
    <hr />
    <div>
      姓名:{{student.name}}
      <br />
      年龄:{{student.age}}
      <br />
      性别:{{student.sex}}
    </div>
    <div>歌名:{{msg}}</div>
  </div>
</template>
<script>
import echarts from 'echarts'
export default {
  name: 'echarts',
  data() {
    return {}
  },
  props: {
    option: {
      type: Object,
      default() {
        return {}
      }
    },
    student: {
      type: Object
    },
    msg: {
      type: String
    }
  },
  beforeCreate() {
    console.log('儿子 beforeCreated ')
  },
  created() {
    console.log('儿子 creadted')
  },
  beforeMount() {
    console.log('儿子 beforeMounted ')
  },
  mounted() {
    console.log('儿子 mounted')
    this.initChart()
  },
  methods: {
    initChart() {
      console.log('initChart')
      let $echartsDOM = document.getElementById('echarts-dom')
      let myEcharts = echarts.init($echartsDOM)
      let option = this.option
      myEcharts.setOption(option)
    }
  },
  watch: {
    option: {
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          this.initChart()
        }
      },
      deep: true
    },
    msg: {
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          console.log('watch msg')
        }
      }
    },
    student: {
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          console.log('watch student')
        }
      },
      deep:true
    }
  }
}
</script>
<style scoped>
.echarts {
  width: 100%;
  height: 400px;
}
</style>
