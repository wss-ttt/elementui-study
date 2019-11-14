<template>
  <div class="wrapper">
    <div class="header">header</div>
    <!-- <el-row :gutter="15" class="row">
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
    </el-row>-->
    <div class="content">
      <!-- <el-row :gutter="15">
        <el-col :span="8">
          <div class="one">1</div>
        </el-col>
        <el-col :span="8">
          <div class="two">2</div>
        </el-col>
        <el-col :span="8">
          <div class="three">3</div>
        </el-col>
      </el-row> -->
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
    </div>

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
    </el-row>-->
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
<style scoped lang="scss">
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

.row {
  height: 100%;
}
.col {
  height: 50%;
  margin: 15px 0;
}
.box {
  height: 100%;
}
.header {
  height: 100px;
  background-color: azure;
}

.content{
  background-color: cadetblue;
  height: calc(100% - 100px);
  padding:15px 0;
  >div{
    float: left;
    width: calc((100% - 15px*2)/3);   // 一行放3个
    margin-right:15px;
    margin-bottom:15px;
    &:nth-child(3n){
      margin-right:0
    }
    height: calc((100% - 15px)/2);
    background-color: red;
  }
}
.one {
  background-color: red;
}
.two {
  background-color: aqua;
}
.three {
  background-color: blueviolet;
}
</style>
