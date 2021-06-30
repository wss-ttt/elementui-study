<template>
  <button class="ws-button" :class="[ type ? 'ws-button--' + type : '', {
    'is-disabled': disabled
  }]" @click="handleClick">
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
  export default {
    components: {},
    props: {
      type: {
        type: String,
        default: 'default'
      },
      circle: Boolean,
      disabled: Boolean
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
      handleClick() {
        console.log('aaa')
      }
    },
    filters: {}
  }

</script>
<style scoped lang="scss">
  /// color|1|Functional Color|1
  $--color-success: #67C23A !default;
  /// color|1|Functional Color|1
  $--color-warning: #E6A23C !default;
  /// color|1|Functional Color|1
  $--color-danger: #F56C6C !default;
  /// color|1|Functional Color|1
  $--color-info: #909399 !default;
  /// color|1|Brand Color|0
  $--color-primary: #409EFF !default;
  /// color|1|Background Color|4
  $--color-white: #FFFFFF !default;
  /// color|1|Background Color|4
  $--color-black: #000000 !default;

  $--button-hover-tint-percent: 20% !default;
  $--button-active-shade-percent: 10% !default;

  $--button-success-font-color: $--color-white !default;

  $--button-success-background-color: $--color-success !default;

  $--button-success-border-color: $--color-success !default;

  @mixin button-plain($color) {
    color: $color;
    background: mix($--color-white, $color, 90%);
    border-color: mix($--color-white, $color, 60%);

    &:hover,
    &:focus {
      background: $color;
      border-color: $color;
      color: $--color-white;
    }

    &:active {
      background: mix($--color-black, $color, $--button-active-shade-percent);
      border-color: mix($--color-black, $color, $--button-active-shade-percent);
      color: $--color-white;
      outline: none;
    }

    &.is-disabled {

      &,
      &:hover,
      &:focus,
      &:active {
        color: mix($--color-white, $color, 40%);
        background-color: mix($--color-white, $color, 90%);
        border-color: mix($--color-white, $color, 80%);
      }
    }
  }

  @mixin button-variant($color, $background-color, $border-color) {
    color: $color;
    background-color: $background-color;
    border-color: $border-color;

    &:hover,
    &:focus {
      background: mix($--color-white, $background-color, $--button-hover-tint-percent);
      border-color: mix($--color-white, $border-color, $--button-hover-tint-percent);
      color: $color;
    }

    &:active {
      background: mix($--color-black, $background-color, $--button-active-shade-percent);
      border-color: mix($--color-black, $border-color, $--button-active-shade-percent);
      color: $color;
      outline: none;
    }

    &.is-active {
      background: mix($--color-black, $background-color, $--button-active-shade-percent);
      border-color: mix($--color-black, $border-color, $--button-active-shade-percent);
      color: $color;
    }

    &.is-disabled {

      &,
      &:hover,
      &:focus,
      &:active {
        color: $--color-white;
        background-color: mix($background-color, $--color-white);
        border-color: mix($border-color, $--color-white);
      }
    }

    &.is-plain {
      @include button-plain($background-color);
    }
  }


  /* .ws-button {
    &--success {
      @include button-variant($--button-success-font-color, $--button-success-background-color, $--button-success-border-color);
    }
  } */

  .ws-button {
    outline: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    line-height: 1;
    border: 1px solid #DCDFE6;
    background: #fff;
    color: #606266;
    cursor: pointer;
    &--primary {
      color: #fff;
      background-color: $--color-primary;
      border-color: $--color-primary;
    }
    &--success {
      color: #fff;
      background-color: $--color-success;
      border-color: $--color-success;
      &.disabled {
        color: #FFF;
        background-color: #b3e19d;
        border-color: #b3e19d;
      }
    }
    &--warning {
      color: #fff;
      background-color: $--color-warning;
      border-color: $--color-warning;
      &.disabled {

      }
    }
    &--danger {
      color: #fff;
      background-color: $--color-danger;
      border-color: $--color-danger;
    }
    &--info {
      color: #fff;
      background-color: $--color-info;
      border-color: $--color-info;
    }
    &.is-disabled {
      color: #C0C4CC;
      cursor: not-allowed;
      background-image: none;
      background-color: #FFF;
      border-color: #EBEEF5;
    }
  }

</style>
