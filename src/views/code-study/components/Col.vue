<script>
export default {
  name: 'ElCol',

  props: {
    span: {
      type: Number,
      default: 24
    },
    tag: {
      type: String,
      default: 'div'
    },
    offset: Number,
    pull: Number,
    push: Number,
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object]
  },

  computed: {
    gutter() {
      let parent = this.$parent
      while (parent && parent.$options.componentName !== 'ElRow') {
        parent = parent.$parent
      }
      return parent ? parent.gutter : 0
    }
  },
  render(h) {
    let classList = []
    let style = {}

    if (this.gutter) {
      style.paddingLeft = this.gutter / 2 + 'px'
      style.paddingRight = style.paddingLeft
    }

    ;['span', 'offset', 'pull', 'push'].forEach(prop => {
      if (this[prop] || this[prop] === 0) {
        classList.push(
          prop !== 'span'
            ? `wt-col-${prop}-${this[prop]}`
            : `wt-col-${this[prop]}`
        )
      }
    })
    ;['xs', 'sm', 'md', 'lg', 'xl'].forEach(size => {
      if (typeof this[size] === 'number') {
        classList.push(`wt-col-${size}-${this[size]}`)
      } else if (typeof this[size] === 'object') {
        let props = this[size]
        Object.keys(props).forEach(prop => {
          classList.push(
            prop !== 'span'
              ? `wt-col-${size}-${prop}-${props[prop]}`
              : `wt-col-${size}-${props[prop]}`
          )
        })
      }
    })

    return h(
      this.tag,
      {
        class: ['wt-col', classList],
        style
      },
      this.$slots.default
    )
  }
}
</script>

<style scoped lang="scss">
// 属性选择器: 选择包含 'wt-col-'的元素
[class*='wt-col-'] {
  float: left;
  box-sizing: border-box;
}

@for $i from 1 through 24 {
  .wt-col-#{$i} {
    width: (1 / 24 * $i * 100) * 1%;
  }

  .wt-col-offset-#{$i} {
    margin-left: (1 / 24 * $i * 100) * 1%;
  }
}
</style>