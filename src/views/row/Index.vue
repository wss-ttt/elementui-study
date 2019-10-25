<template>
  <div class="wrapper">
    <el-input v-model="dataForm.userName" placeholder="用户名"></el-input>
    <el-select v-model="value" placeholder="请选择" style="width:100%;">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <el-date-picker v-model="value1" type="date" placeholder="选择日期" style="width:100%;"></el-date-picker>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      dataForm: {
        userName: '乔峰'
      },
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        }
      ],
      value: '',
      value1: ''
    }
  },
  computed: {},
  components: {},
  created() {},
  mounted() {},
  destroyed() {},
  watch: {},
  methods: {}
}
</script>
<style scoped>
</style>