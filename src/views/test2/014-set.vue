<template>
  <div id="app2">
    <p v-for="item in items" :key="item.id">{{item.message}}</p>
    <button class="btn" @click="handClick()">更改数据</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { message: 'one', id: '1' },
        { message: 'two', id: '2' },
        { message: 'three', id: '3' }
      ]
    }
  },
  mounted() {
    this.items[0] = { message: '测试', id: '4' } //此时对象的值更改了，但是视图没有更新
    // this.$set(this.items, 0, { message: '测试', id: '4' }) //$set可以触发更新视图
    console.log(this.items)
  },
  methods: {
    // 调用方法：Vue.set( target, key, value )

    // target：要更改的数据源(可以是对象或者数组)

    // key：要更改的具体数据

    // value ：重新赋的值
    handClick() {
      //Vue methods中的this 指向的是Vue的实例，这里可以直接在this中找到items
      this.$set(this.items, 0, { message: '更改one的值', id: '0' })
    }
  }
}
</script>

<style>
</style>