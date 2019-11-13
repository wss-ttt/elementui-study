<template>
  <div class="wrapper">
    <el-row :gutter="15" class="row">
      <el-col :span="8" class="col">
        <div class="box first" >1</div>
      </el-col>
      <el-col :span="8" class="col">
        <div class="box second">2</div>
      </el-col>
      <el-col :span="8" class="col">
        <div class="box third">3</div>
      </el-col>
      <el-col :span="8" class="col">
        <div class="box first">1</div>
      </el-col>
      <el-col :span="8" class="col">
        <div class="box second">2</div>
      </el-col>
      <el-col :span="8" class="col">
        <div class="box third">3</div>
      </el-col>
    </el-row>
    <!-- <el-row :gutter="15">
      <el-col :span="8">
        <div class="box first">1</div>
      </el-col>
      <el-col :span="8">
        <div class="box second">2</div>
      </el-col>
      <el-col :span="8">
        <div class="box third">3</div>
      </el-col>
    </el-row> -->
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {}
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
.wrapper {
  padding: 15px;
  height: 100%;
  background-color: #ccc;
}
.first {
  background-color: antiquewhite;
}
.second {
  background-color: bisque;
}
.third {
  background-color: blueviolet;
}

.row{
  height: 100%;
}
.col{
  height: 50%;
  margin:15px 0;
}
.box{
  height: 100%;
}
</style>
