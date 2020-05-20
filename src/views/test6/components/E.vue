<template>
  <div class="wrapper">
    我是子路由
    <el-select v-model="stuId" placeholder="请选择">
      <el-option v-for="item in studentList" :key="item.id" :label="item.name" :value="item.id">
      </el-option>
    </el-select>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {
        stuId: '',
      }
    },
    computed: {
      studentList() {
        return this.$store.state.common.studentList
      }
    },
    watch: {
      studentList: {
        handler(newVal, oldVal) {
          console.log('监听数据的变化')
          this.stuId = this.studentList[0]['id']
        }
      }
    },
    created() {},
    mounted() {
    },
    activated() {},
    deactivated() {},
    updated() {},
    destroyed() {},
    methods: {},
    filter: {}
  }

</script>
<style scoped>
</style>
