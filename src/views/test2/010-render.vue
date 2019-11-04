<script>
export default {
  props: {
    type: {
      type: String,
      default: 'default'
    },
  },
  data() {
    return {}
  },
  computed: {},
  components: {},
  created() {},
  mounted() {
    console.log('this.$slots',this.$slots)
  },
  destroyed() {},
  watch: {},
  methods: {
    clickHandle(){
      console.log('我被点击了')
    },
    overHandle(){
      console.log('overHandle')
    }
  },
  render(h) {
    return h('div', {
      // 添加class类名
      class: {
        btn: true,
        success: this.type === 'success',
        danger: this.type === 'danger',
        warnning: this.type === 'warnning',
        default: this.type === 'default'
      },
      // 添加行内样式
      style:{
        fontSize:'16px',
        color:'red'
      },
      domProps: {
        // 可以输出一下这个this.$slots是什么内容
        innerHTML: this.$slots.default[0].text
      },
      // 绑定事件
      on: {
        // 鼠标单击事件
        click: this.clickHandle,
        // 鼠标移入事件
        mouseover:this.overHandle
      }
    })
  }
}
</script>
<style scoped>
.btn{
  padding: 10px 12px;
  border:1px solid #ccc;
  border-radius:4px;
  display: inline-block;
}
.success{
  background-color: #67C23A;
  border-color:#67C23A;
}
.danger{
  background-color:#F56C6C;
  border-color:#F56C6C;
}
.warnning{
  background-color: #E6A23C;
  border-color:#E6A23C;
}
</style>