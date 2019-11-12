<template>
  <div class="wrapper">
    搜索条组件封装
    <hr />
    <form-group @searchData="getSearchData"></form-group>
  </div>
</template>

<script>
import FormGroup from './components/FormGroup'
export default {
  props: {},
  data() {
    return {
        form:{}
    }
  },
  computed: {},
  components: {
    FormGroup
  },
  created() {},
  mounted() {},
  destroyed() {},
  watch: {},
  methods: {
      getSearchData(val){
          this.form = val
          console.log(this.form)
      }
  }
}
</script>
<style scoped>
</style>