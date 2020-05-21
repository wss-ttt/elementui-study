<template>
  <div class="wrapper">
    <button type="button" @click="init">初始数据</button>
    <button type="button" @click="add">添加数据</button>
    <ul>
      <li v-for="item in studentList" :key="item.name">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {
        list: [{
          name: '张三',
          age: 18
        }, {
          name: '李四',
          age: 20
        }]
      }
    },
    computed: {
      studentList() {
        return this.$store.state.common.studentList
      }
    },
    watch: {},
    created() {},
    mounted() {},
    activated() {},
    deactivated() {},
    updated() {},
    destroyed() {},
    methods: {
      init() {
        this.$store.commit('common/updateStudentList', this.list)
        console.log(this.list === this.$store.state.common.studentList)// true
      },
      add() {
        this.list.push({
          name: '乔峰',
          age: 28
        })
        /* this.list = [{
            name: '乔峰',
            age: 28
        }] */
        // console.log(this.$store.state.common.studentList)
      }
    },
    filter: {}
  }

</script>
<style scoped>
</style>
