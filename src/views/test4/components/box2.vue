<template>
  <div class="box2"></div>
</template>

<script>
let test = ''
export default {
  components: {},
  props: {
    data: {
      type: String
    }
  },
  data() {
    return {}
  },
  created() {},
  mounted() {
    test = this.data
    console.log('test', test)
  },
  activated() {},
  updated() {},
  destroyed() {},
  methods: {},
  computed: {},
  watch: {}
}
</script>
<style scoped>
.box2 {
  width: 200px;
  height: 200px;
  background-color: aliceblue;
}
</style>