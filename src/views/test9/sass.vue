<template>
  <div class="wrapper">
    <ul>
      <li class="bg-red">001</li>
      <li class="bg-green">002</li>
      <li class="bg-blue">003</li>
      <li class="success">004</li>
      <li class="error">005</li>
      <li class="warning">006</li>
    </ul>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {},
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
    filters: {}
  }

</script>
<style scoped lang="scss">
  .wrapper {
    height: 100%;
  }

  ul {
    /**
      1.数据类型
        map、list、数字类型、字符串类型、boolean类型、null、color
    **/
    // 1.1 map类型 -> 用小括号括起来
    $style: (color: #fb3,
        fontSize: 30px);

    li:nth-child(1) {
      color: map-get($style, 'color'); // map-get 通过key来获取value值
      font-size: map-get($style, 'fontSize'); // map-get 通过key来获取value值
    }


    // 1.2 list累心 -> 可以用空格分开或者逗号分开或者括号分开
    $colors: red green blue;
    $padding: 5px 10px 5px 10px;

    li:nth-child(1) {
      color: nth($colors, 1); // 通过nth可以取出list中的数据,注意索引值是从1开始不是从0开始的
      padding: $padding;
      // padding-left: nth($padding, 4);
    }

    // 1.3 数字类型
    $n1: 20;
    $fontSize: 30px;

    li:nth-child(2) {
      font-size: $n1 + px; // 注意: 这个地方的px不需要加单引号或者双引号
    }

    li:nth-child(3) {
      font-size: $fontSize;
    }

    // 1.4 字符串类型
    $s1: 'success';
    $s2: 'error';
    $s3: 'warning';

    .#{$s1} {
      color: green;
    }

    .#{$s2} {
      color: red;
    }

    .#{$s3} {
      color: yellow;
    }

    // 1.5 boolean类型
    $t: true;
    $f: false;

    li:nth-child(4) {
      @if $t {
        background: brown;
      }

      @else {
        background: yellow;
      }
    }

    // 1.6 null类型
    $null: null;

    li:nth-child(4) {
      @if $null==null {
        padding: 10px;
      }
    }

    // 1.7 color类型
    $c1: blue;
    $c2: #ccc;
    $c3: rgba(0, 0, 0, .5);

    li:nth-child(5) {
      background: $c2;
    }

    /**
    2.for循环的使用
      1.1 语法:
      @for $i from 1 through 10 {
        // 取值为 [1, 10]
      } 
      1.2 语法:
      @for $i from 1 to 10 {
        // 取值为 [1, 10)
      }
  **/

    @for $i from 1 through 5 {

      // 取值为 [1, 5]
      li:nth-child(#{$i}) {
        // 注意这个地方是怎么使用变量的
        font-size: 16 + $i + px; // 这个地方的px 不能写成 'px' 也就是不能加双引号或者单引号
      }
    }

    @for $i from 1 to 5 {

      // 取值为 [1, 5) 也就是没有取到 5
      li:nth-child(#{$i}) {
        // 注意这个地方是怎么使用变量的
        font-size: 16 + $i + px; // 这个地方的px 不能写成 'px' 也就是不能加双引号或者单引号
      }
    }

    /**
    3.if分支判断
    **/
    $bg: black; // 颜色数据类型 是不需要加单引号
    $msg: 'aaa'; // 字符串类型

    @if $bg==black {
      background: $bg;
    }

    @else {
      background: #fb3;
    }

    @if $msg=='aaa' {
      color: #fff
    }

    @else {
      color: red;
    }

    /**
    4.each遍历list类型 
    **/

    $list: red green blue;

    @each $item in $list {
      .bg-#{$item} {
        background: $item;
      }
    }

    $staus: success error warning; // list数据类型 可以用空格分开或者逗号分开或者括号分开
    $map: ( // map 数据类型
      success: green,
      error: red,
      warning: yellow);

    @each $item in $staus {
      .#{$item} {
        color: map-get($map, $item); // map-get方法的使用
      }
    }
  }

</style>
