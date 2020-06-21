<template>
  <div class="wrapper">
    <el-cascader :options="options" :props="props" collapse-tags clearable></el-cascader>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {
        props: {
          multiple: true
        },
        options: [{
          value: 1,
          label: '东南',
          children: [{
            value: 2,
            label: '上海'
          }, {
            value: 7,
            label: '江苏'
          }, {
            value: 12,
            label: '浙江'
          }]
        }, {
          value: 17,
          label: '西北',
          children: [{
            value: 18,
            label: '陕西',
          }, {
            value: 21,
            label: '新疆维吾尔族自治区'
          }]
        }]
      }
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    activated() {},
    deactivated() {},
    updated() {},
    destroyed() {},
    methods: {},
    filters: {}
  }

</script>
<style scoped>
</style>
