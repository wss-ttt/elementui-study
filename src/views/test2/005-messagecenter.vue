<template>
  <div class="wrapper">
    <el-button @click="test">message</el-button>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
        documentClientHeight:'',
    };
  },
  watch: {},
  computed: {

  },
  methods: {
    test() {
      this.$message({
        message: "给我一首歌的时间",
        type: "error",
        duration:0,
        offset: this.documentClientHeight/2
      });
    },
  },
  created() {},
  mounted() {
      this.documentClientHeight = document.documentElement["clientHeight"];
      window.onresize = () => {
        this.documentClientHeight = document.documentElement["clientHeight"];
      };
  }
};
</script>
<style scoped>
.wrapper {
}
</style>