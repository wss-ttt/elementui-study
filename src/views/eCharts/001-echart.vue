<template>
  <div class="wrapper">
    <v-echart
      class="echarts-container"
      :option="option"
      :student="student"
      :msg="msg"
      ref="vEchart"
    ></v-echart>
    <el-button @click="query">查询</el-button>
    <el-button @click="change1">改变student值</el-button>
    <el-button @click="change2">改变msg值</el-button>
    <hr>
    <div>
      <h2>表单数据</h2>
      email:{{form.email}}
      <br>
      phone:{{form.phone}}
    </div>
    <el-button @click="change3">改变form</el-button>
  </div>
</template>

<script>
import VEchart from './components/echart'
export default {
  props: {},
  data() {
    return {
      option: {},
      student: {
        name: '乔峰',
        age: 18,
        sex: '男'
      },
      msg: '给我一首歌的时间',
      form:{
        email:'aa',
        phone:'bb'
      }
    }
  },
  computed: {},
  components: {
    VEchart
  },
  beforeCreate() {
    console.log('父亲 beforeCreated')
  },
  created() {
    console.log('父亲 created')
    console.log(this.option)
    this.option = {
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      legend: {
        data: ['销量']
      },
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    }
  },
  beforeMount() {
    console.log('父亲 beforeMounted')
  },
  mounted() {
    console.log('父亲 mounted')
  },
  destroyed() {},
  watch: {
    'form.email':{
      handler(newVal,oldVal){
        console.log('watch form数据')
        console.log(newVal)
        console.log(oldVal)
        /* if(newVal !== oldVal){
          console.log('watch form数据')
        } */
      },
      deep:true,
    },
    msg:{
      handler(newVal,oldVal){
        if(newVal !== oldVal){
          console.log('watch msg')
        }
      }
    }
  },
  methods: {
    query() {
      this.option['series'][0]['data'] = [22, 89, 944, 20, 50, 57]
      // this.$refs['vEchart'].initChart()
    },
    change1() {
      this.student['name'] = '杨过'
    },
    change2() {
      this.msg = '黑色毛衣'
    },
    change3(){
      this.form['email'] = '我是邮箱'
    }
  }
}
</script>
<style scoped>
.wrapper {
  height: 100%;
}
.echarts-container {
  width: 100%;
}
</style>