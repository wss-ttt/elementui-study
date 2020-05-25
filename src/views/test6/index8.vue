<template>
  <div class="wrapper">
    <button type="button" @click="update">修改已有属性值</button>
    <button type="button" @click="add">新增属性</button>
    <button type="button" @click="del">删除已有属性</button>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {
        person: {
          age: 18
        }
      }
    },
    computed: {},
    watch: {
      person: {
        handler(newVal, oldVal) {
          console.log('数据发生改变了');
        },
        deep: true // 对象类型 这里需要做深度监听
      }
    },
    created() {},
    mounted() {},
    activated() {},
    deactivated() {},
    updated() {},
    destroyed() {},
    methods: {
      update() {
          this.person.age = 20
      },
      add() {
        this.person.name = '乔峰'
      },
      del() {
          delete this.person.name
          console.log(this.person)
      }
    },
    filter: {}
  }

</script>
<style scoped>
</style>
