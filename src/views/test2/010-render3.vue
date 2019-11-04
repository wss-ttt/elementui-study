
<script>
export default {
  props: {},
  data() {
    return {
      name: '乔峰'
    }
  },
  methods: {
    clickHandle() {
      this.name = '周杰伦'
    }
  },
  render(h) {
    return h(
      'h1',
      {
        class: {
          border: true,
          success: true
        }
      },
      [
        this.name,
        h(
          'button',
          {
            on: {
              click: this.clickHandle
            }
          },
          '改变'
        )
      ]
    )
  }
}
</script>
<style scoped>
.border {
  border: 1px solid red;
}
.success {
  background-color: #67c23a;
}
</style>