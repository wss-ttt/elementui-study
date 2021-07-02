<template>
  <div class="wt-rate">
    <span
      v-for="(item, index) in max"
      ref="rateItem"
      :key="index"
      class="wt-rate__item"
      @click="selectValue(item)"
      @mousemove="setCurrentValue(item)"
      @mouseleave="resetCurrentValue"
    ></span>
		<span v-if="showText" class="wt-rate__text">{{ text }}</span>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    value: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 5
		},
		showText: {
			type: Boolean,
			default: false
		},
    texts: {
      type: Array,
      default() {
        return ['极差', '失望', '一般', '满意', '惊喜']
      }
    }
  },
  data() {
    return {
      currentValue: ''
    }
  },
  computed: {
		text() {
			if(this.showText) {
				return this.texts[this.currentValue - 1]
			}
		}
	},
  watch: {},
  created() {
    // 这个地方的代码优秀
    if (!this.value) {
      this.$emit('input', 0)
    }
  },
  mounted() {
    this.selectValue(this.value)
  },
  activated() {},
  deactivated() {},
  updated() {},
  destroyed() {},
  methods: {
    selectValue(value) {
      this.currentValue = value
      this.$emit('input', value)
      this.$emit('change', value)
      const itemArr = this.$refs['rateItem']
      for (let i = 0; i < itemArr.length; i++) {
        if (i < value) {
          itemArr[i].classList.add('on')
        } else {
          itemArr[i].classList.remove('on')
        }
      }
    },
    setCurrentValue(value) {
      const itemArr = this.$refs['rateItem']
      for (let i = 0; i < itemArr.length; i++) {
        if (i < value) {
          itemArr[i].classList.add('on')
        } else {
          itemArr[i].classList.remove('on')
        }
      }
    },
    resetCurrentValue() {
      this.selectValue(this.currentValue)
    },
    isObject(obj) {
      return Object.prototype.toString.call(obj) === '[object Object]'
    }
  },
  filters: {}
}
</script>
<style scoped lang="scss">
.wt-rate {
  height: 20px;
	line-height: 1;
	display: flex;
	align-items: center;
  .wt-rate__item {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #ccc;
    margin-right: 10px;
    cursor: pointer;
    transition: 0.3s;
    &.on {
      background: rgb(247, 186, 42);
    }
	}
	.wt-rate__text {
		font-size: 14px;
		display: inline-block;
	}
}
</style>