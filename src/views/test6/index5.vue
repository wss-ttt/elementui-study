<template>
  <div class="wrapper">
    <div class="box">
      父组件
      <button type="button" @click="toUrl">跳转路由</button>
    </div>
    <h2>内容显示区域</h2>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {

      }
    },
    computed: {
    },
    watch: {},
    created() {
      this.getData()
    },
    mounted() {},
    activated() {},
    deactivated() {},
    updated() {},
    destroyed() {},
    methods: {
      getData() {
        setTimeout(() => {
          let data = []
          for (let i = 0; i < 5; i++) {
            data.push({
              id: i,
              name: '张三' + i
            })
          }
          console.log('父组件中异步获取数据')
          this.$store.commit('common/updateStudentList', data)
        }, 0)
      },
      toUrl() {
        this.$router.push({
          name: 'index5-e'
        })
      }
    },
    filter: {}
  }

</script>
<style scoped lang="scss">
  .box {
    height: 200px;
    border: 1px solid #ccc;
  }

</style>
