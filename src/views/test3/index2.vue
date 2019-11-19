<template>
  <div class="wrapper">
    好好学习
    <el-button @click="ok">确定</el-button>
    <el-button @click="updateMsg">修改msg</el-button>
    <el-button @click="updateStudents">修改students</el-button>
    <el-button @click="updatePerson">修改person</el-button>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {}
  },
  computed: {
    students: {
      get() {
        return this.$store.state.common.students
      },
      set(val) {
        console.log('set')
        this.$store.commit('common/updateStudents', val)
      }
    },
    msg: {
      get() {
        return this.$store.state.common.msg
      },
      set(val) {
        this.$store.commit('common/updateMsg', val)
      }
    },
    person:{
        get(){
            return this.$store.state.common.person
        },
        set(val){
            console.log('set')
            console.log(val)
            this.$store.commit('common/updatePerson',val)
        }
    }
  },
  components: {},
  created() {},
  mounted() {},
  destroyed() {},
  watch: {},
  methods: {
    ok() {
      //   this.students.push('qiaofeng')   // 这个代码会报错
      //   this.students = ['穷疯','小咯女女']   // 可以执行
      //   this.students = []   // 可以执行
      console.log(this.students === this.$store.state.common.students) // true
      console.log(this.msg === this.$store.state.common.msg) // true
    },
    updateMsg() {
      this.msg = '给我一首歌的时间'
      console.log(this.$store.state.common.msg)
    },
    updateStudents() {
      // this.students.push('乔峰')  // 该行代码会报错
      // this.students = ['乔峰']
      // console.log(this.students === this.$store.state.common.students)
      // console.log(this.$store.state.common.students)

      // 会报错的代码
      // this.$store.state.common.students = ['乔峰']
      // this.students.push('乔峰')
      // this.$store.state.common.students.push('乔峰')

      // 如何解决这个问题了
      // 常见第一种
      // this.students = ['乔峰']

      let arr = ['乔峰', '小龙女', '杨过']

      // 常见第二种
      // this.students = arr

      // 常见第三种
      /* this.students = arr.map(item => {
        return item
      }) */

      // 常见第四种
      this.students = arr.filter(item => {
        return item === '乔峰'
      })
    },
    updatePerson(){
        /* this.person = {
            name:'杨过',
            age:28
        } */


        this.person.name = 'aa'
        this.person.age = 28
    }
  }
}
</script>
<style scoped>
</style>