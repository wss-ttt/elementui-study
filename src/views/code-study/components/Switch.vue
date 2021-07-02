<template>
  <div
    class="wt-switch"
		ref="switch"
    :class="{ 'is-checked': checked }"
    :style="{ 'width': coreWidth + 'px' }"
    @click="handleClick"
  ></div>
</template>

<script>
export default {
	components: {},
  props: {
		// 提供一个value的props, 是为了在父组件中使用 v-madel
		value: {
			type: [Boolean, String, Number],
			default: false
		},
    width: {
      type: Number,
      default: 40
		},
		activeColor: {
			type: String,
			default: ''
		},
		inactiveColor: {
			type: String,
			default: ''
		},
		activeValue: {
			type: [Boolean, String, Number],
			default: true
		},
		inactiveValue: {
			type: [Boolean, String, Number],
			default: false
		}
  },
  data() {
    return {
      checked: this.value === this.activeValue,
      coreWidth: this.width
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
	},
  activated() {},
  deactivated() {},
  updated() {},
  destroyed() {},
  methods: {
    handleClick() {
			this.checked = !this.checked
			const val = this.checked ? this.activeValue : this.inactiveValue
			// 发射input事件, 是
			this.$emit('input', val)
			this.setBackgroundColor()
		},
		setBackgroundColor() {
			let newColor = this.checked ? this.activeColor : this.inactiveColor
			this.$refs['switch'].style.backgroundColor = newColor
		}
  },
  filters: {}
}
</script>
<style scoped lang="scss">
.wt-switch {
  width: 40px;
  height: 20px;
  background-color: rgb(255, 73, 73);
  position: relative;
  border-radius: 10px;
  cursor: pointer;
  &.is-checked {
    background: rgb(19, 206, 102);
    &::after {
      /*与边界有2px的间隙*/
      left: 100%;
      transform: translate(calc(-100% - 2px), -50%);
    }
  }
  &::after {
    content: '';
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
    top: 50%;
    /*与边界有2px的间隙*/
    left: 2px;
    transform: translate(0, -50%);
    transition: all 0.3s;
  }
}
</style>