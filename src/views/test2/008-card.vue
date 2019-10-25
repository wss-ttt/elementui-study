<template>
  <div class="wrapper">
    <div class="content">
      <el-card shadow="hover" header="给我一首歌的时间">
        <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
      </el-card>
      <el-card shadow="hover">
        <div slot="header">黑色毛衣</div>
        <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>

        <!-- <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
        <div slot="header">黑色毛衣</div> -->
      </el-card>
      <el-card shadow="hover">
        好好学习
      </el-card>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    isPass(b) {
      return b
    }
  }
}
</script>
<style scoped lang="scss">
.content{
  width: 500px;
  height: 500px;
  border: 1px solid #ccc;
  margin: 100px auto;
}
</style>