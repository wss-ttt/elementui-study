<template>
  <div class="card" :class=" type">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {
      type: {
        type: String,
        default: 'noraml',
        validator: function (value) {
          console.log(['noraml', 'warning', 'abnormal'].indexOf(value) !== -1)
          return ['noraml', 'warning', 'abnormal'].indexOf(value) !== -1;
        }
      },
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
    methods: {},
    filter: {}
  }

</script>
<style scoped lang="scss">
  .card {
    width: 200px;
    padding: 10px;
    border-radius: 10px;
    color: #fff;

    &.noraml {
      background: #03c1ff;
    }

    &.warning {
      background: #fdb519;
    }

    &.abnormal {
      background: #ff2419;
    }
  }

</style>
