<template>
  <div id="app2">
    {{msg}}
    <hr>
    <div v-for="item in students" :key="item.id">姓名:{{item.name}}</div>
    <button class="btn" @click="handClick()">更改数据</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'aaaaaaaaaaaa',
      students: [
        {
          id: 1,
          name: '乔峰'
        },
        {
          id: 2,
          name: '小龙女'
        }
      ]
    }
  },
  mounted() {
    this.msg = 'bbbbbbbbbbbbbbb'
    this.students[0] = {
      id: 1,
      name: '杨过ccccc'
    }
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