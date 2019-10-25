<template>
  <div class="wrapper">
    <div v-for="item in menuList" :key="item.menuId">{{item.menuName}}</div>
    <el-input
      v-model="userName"
      onkeyup="this.value=this.value.replace(/[^\d.]/g,'');"
      maxlength="4"
    ></el-input>
    <el-input v-model="input" oninput="if(this.value.length>11)value=value.slice(0,10)" onKeypress="return(/[\d]/.test(String.fromCharCode(event.keyCode)))" type="number" placeholder="请输入内容"></el-input>


    <el-input v-model="input2" oninput="if(this.value.length>11)value=value.slice(0,10)"  type="number" placeholder="请输入内容"></el-input>

    <!-- 只能输入小数 -->
    <el-input maxlength="8" oninput = "value=value.replace(/[^\d.]/g,'')" v-model="price" placeholder="Please input price" />

    <input type="text" οnkeyup="this.value=this.value.toString().match(/^\d+(?:\.\d{0,2})?/)"/>
  </div>
</template>

<script>
import menuList from '@/assets/data/menuList.json'
export default {
  components: {},
  props: {},
  data() {
    return {
      menuList,
      userName:'',
      input:'',
      input2:'',
      price:'',
    }
  },
  watch: {},
  computed: {},
  methods: {
    checkE(e){
      conosle.log('aaa');
      this.value = this.value.replace(/[^0-9]/g, '')
    }
  },
  created() {},
  mounted() {
    console.log(menuList)
  }
}
</script>
<style scoped>
.wrapper {
}
</style>