<template>
  <div class="wrapper">
    <div>
      姓名:{{student.name}}
      <br />
      年龄:{{student.age}}
      <br />
      性别:{{student.sex}}
      <br />
      <button @click="addPro">添加sex属性</button>
      <button @click="addPro2">添加sex属性2</button>
      <button @click="addPro3">添加sex属性3</button>
      <button @click="updatePro">修改name属性值</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      student: {
        name: '乔峰',
        age: 18
      }
    }
  },
  updated() {
    console.log('数据更新', this.student)
  },
  methods: {
    // 新增属性
    addPro() {
      this.student.sex = '男'
      console.log('this.student', this.student)
    },
    // 新增属性
    addPro2() {
      this.$set(this.student, 'sex', '女')
    },
    // 新增属性
    addPro3(){
      // 也能触发updated函数，同时视图更新
      this.student = Object.assign({},this.student,{
        sex:'女'
      })
    },
    updatePro(){
      this.student['name'] = '小龙女'  // 会触发updated 视图同时更新
    }
  }
}
</script>
<style scoped>
.wrapper{
  width: 400px;
  border:1px solid #ccc;
  padding:15px;
  border-radius:4px;
}
</style>