
<script>
export default {
  props: {},
  data() {
    return {
      name: '乔峰'
    }
  },
  render(h) {
    return h('h1', this.name)
  },

  // 上面的代码可以简写为如下:
  /* render: h => {
    console.log(this)
    console.log(this.name)
    return h('h1', this.name)   // 取不到"乔峰"
  } */
}
</script>