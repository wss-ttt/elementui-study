<template>
  <div class="box">
    姓名:{{data.name}}
    <br>
    年龄:{{data.age}}
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    data:{
      type:Object
    }
  },
  data() {
    return {
    }
  },
  created() {},
  mounted() {
  },
  activated() {},
  updated() {},
  destroyed() {},
  methods: {
    show(){
      console.log(this.data)
      /* this.$nextTick(()=>{
        console.log(this.data)
      }) */
    }
  },
  computed: {
  },
  watch: {
    data:{
      handler(newVal,oldVal){
        console.log('watch',newVal)
      }
    }
  }
}
</script>
<style scoped>
.box{
  width: 200px;
  height: 200px;
  background-color: #ccc;
}
</style>