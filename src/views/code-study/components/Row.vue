<script>
export default {
  name: 'ElRow',

  componentName: 'ElRow',

  props: {
    tag: {
      type: String,
      default: 'div'
    },
    gutter: Number,
    type: String,
    justify: {
      type: String,
      default: 'start'
    },
    align: {
      type: String,
      default: 'top'
    }
  },

  computed: {
    style() {
      const ret = {}

      if (this.gutter) {
        ret.marginLeft = `-${this.gutter / 2}px`
        ret.marginRight = ret.marginLeft
      }

      return ret
    }
  },

  render(h) {
    return h(
      this.tag,
      {
        class: [
          'wt-row',
          this.justify !== 'start' ? `is-justify-${this.justify}` : '',
          this.align !== 'top' ? `is-align-${this.align}` : '',
          { 'wt-row--flex': this.type === 'flex' }
        ],
        style: this.style
      },
      this.$slots.default
    )
  }
}
</script>
<style scoped lang="scss">
.wt-row {
  position: relative;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
// 该样式可以不需要
.wt-row::before {
  content: '';
  display: table;
}

// 用于清除浮动的
.wt-row::after {
  content: '';
  display: table;
  clear: both;
}

// 对齐方式
.wt-row--flex {
  display: flex;
}

// 居中
.wt-row--flex.is-justify-center {
  justify-content: center;
}
// 两端对齐
.wt-row--flex.is-justify-space-between {
  justify-content: space-between;
}
// 靠左对齐
.wt-row--flex.is-justify-end {
  justify-content: flex-end;
}

// 平均分配
.wt-row--flex.is-justify-space-around {
  justify-content: space-around;
}
</style>