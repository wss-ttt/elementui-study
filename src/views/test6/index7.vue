<template>
  <div class="wrapper">
    <button type="button" @click="update">更新数据</button>
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
    created() {
      this.init()
    },
    mounted() {},
    activated() {},
    deactivated() {},
    updated() {},
    destroyed() {},
    methods: {
      init() {
        this.$store.commit('common/updateStudentList', this.list)
      },
      update() {
        this.list = [{
          name: '乔峰',
          age: 28
        }]
        this.$store.commit('common/updateStudentList', this.list)
      }
    },
    filter: {}
  }

</script>
<style scoped>
</style>
