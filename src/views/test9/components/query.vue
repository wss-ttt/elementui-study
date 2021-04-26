<template>
  <div class="wrapper">
    <el-form :inline="true" :model="form" class="demo-form-inline">
      <el-form-item label="审批人">
        <el-input v-model="form.user" placeholder="审批人"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="form.region" placeholder="活动区域" @change="changRegion">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {
        form: {
          user: '',
          region: ''
        }
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
    methods: {
      onSubmit() {
        this.$emit('query', this.form)
      },
      changRegion() {
        
      }
    },
    filters: {}
  }

</script>
<style scoped>
</style>
