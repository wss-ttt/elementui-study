<template>
  <div class="wrapper">
    <v-button @click="test" disabled>默认按钮</v-button>
    <v-button type="primary" @click="test" disabled>主要按钮</v-button>
    <v-button type="success" @click="test" disabled>成功按钮</v-button>
    <v-button type="info" @click="test" disabled>信息按钮</v-button>
    <v-button type="warning" @click="test" disabled>警告按钮</v-button>
    <v-button type="danger" @click="test" disabled>危险按钮</v-button>
    <hr>
    <my-button>我的按钮</my-button>
    <my-button type="primary">我的按钮</my-button>
    <my-button type="success">我的按钮</my-button>
    <my-button type="info">我的按钮</my-button>
    <my-button type="warning">我的按钮</my-button>
    <my-button type="danger" disabled>我的按钮</my-button>
    <hr />
    <div class="box rl">
      <div></div>
    </div>
    <div class="box bml">
      <div></div>
    </div>
  </div>
</template>

<script>
  import VButton from './components/Button.vue'
  import MyButton from './components/MyButton.vue'
  export default {
    components: {
      VButton,
      MyButton
    },
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
    methods: {
      test() {
        console.log('aa')
      }
    },
    filters: {}
  }

</script>
<style scoped lang="scss">
@import 'rl.scss';
@import 'bml.scss';
.box {
  width: 200px;
  height: 200px;
}
</style>
