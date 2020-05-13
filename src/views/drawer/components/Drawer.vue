<template>
  <div class="drawer-container" v-show="visible">
    <div class="mask" @click="hide"></div>
    <div class="drawer-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    components: {

    },
    props: {
      visible: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {

      }
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    activated() {},
    deactivated() {},
    updated() {},
    destroyed() {},
    methods: {
      hide(){
        // 直接子组件内部修改props visible的值
        this.$emit('update:visible',false)
      }
    },
    filter: {}
  }

</script>
<style scoped lang="scss">
  .drawer-container {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    .mask {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, .5);
    }
    .drawer-content{
      width: 30%;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      background: #fff;
      animation: move-in .5s;
    }
  }

@keyframes move-in{
  0%{
    right: -30%;
  }
}
</style>
