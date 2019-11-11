<template>
  <div class="wrapper">
    <div v-for="item in students" :key="item.id">
      学号: {{item.id}}
      <br />
      姓名: {{item.name}}
      <br />
      年龄: {{item.age}}
      <br>
      性别:{{item.sex}}
    </div>
    <hr />
    <button @click="change1">修改数组中的一个元素的name属性值1</button>
    <button @click="change2">修改数组中的一个元素的name属性值2</button>
    <button @click="change3">修改数组中的一个元素的name属性值3</button>
    <button @click="add">添加sex属性</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      students: [
        {
          id: 1,
          name: '乔峰',
          age: 18
        },
        {
          id: 2,
          name: '杨过',
          age: 28
        },
        {
          id: 3,
          name: '小龙女',
          age: 38
        }
      ]
    }
  },
  updated() {
    console.log('数据更新', this.students)
  },
  methods: {
    change1() {
      // 会触发updated函数 视图会更新
      this.students[0]['name'] = '周杰伦'
      console.log(this.students[0])
    },
    change2() {
      // 不会触发updated函数 视图不会更新
      this.students[0] = {
        id: 1,
        name: '周杰伦'
      }
      console.log(this.students[0])
    },
    change3() {
      // 会触发updated函数 视图会更新
      this.$set(this.students, 0, {
        id: 1,
        name: '周杰伦'
      })
      console.log(this.students[0])
    },
    add(){
      // 不会触发updated函数 视图不会更新
      // this.students[0].sex = '男'
      
      // 会触发updated函数 视图会更新
      this.$set(this.students[0],'sex','男')
      console.log(this.students)
    }
  }
}
</script>
<style scoped>
.wrapper {
  width: 400px;
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 4px;
}
</style>