<template>
  <div class="wrapper">
    <div class="header">
      <div>姓名</div>
      <div>年龄</div>
      <div>状态</div>
    </div>
    <div v-for="(item,index) in list" :key="index" class="item">
      <div>{{ item.name }}</div>
      <div>{{ item.age }}</div>
      <div>{{ txtTypes[item.status] }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {
        txtTypes: ['正常', '警告', '异常'],
        list: []
      }
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {
      this.getData()
    },
    activated() {},
    deactivated() {},
    updated() {},
    destroyed() {},
    methods: {
      // 模拟后台返回的数据
      getData() {
        for (let i = 0; i < 6; i++) {
          this.list.push({
            name: '张三',
            age: i,
            status: i % 3 // 一般后台返回的都是 0 1 2这种数据(也就是字典数据)
          })
        }
      }
    },
    filter: {}
  }

</script>
<style scoped lang="scss">
  .header {
    display: flex;
    height: 50px;
    justify-content: center;
    align-items: center;
    background: #666;
    color: #fff;

    >div {
      flex: 1;
      text-align: center;
    }
  }

  .item {
    display: flex;
    height: 40px;
    justify-content: center;
    align-items: center;
    color: #fff;

    >div {
      flex: 1;
      text-align: center;
    }

    &:nth-child(2n) {
      background: #ccc;
    }

    &:nth-child(2n+1) {
      background: #aaa;
    }
  }

</style>
