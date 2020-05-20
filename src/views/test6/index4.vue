<template>
  <div class="wrapper">
    <h2>列表</h2>
    <ul>
      <li v-for="i in 5" :key="i" @click="toDetails(i)"> {{ i }} </li>
    </ul>
    <hr>
    <h2>详细信息</h2>
    <router-view></router-view>
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
    computed: {
      id() {
        return this.$store.state.common.id
      }
    },
    methods: {
      toDetails(id) {
        if (id === this.id) {
          this.$store.commit('common/updateIsChange', true)
        } else{ // 第一进来 也不会触发监听路由代码
          this.$store.commit('common/updateId', id)
          this.$router.push({
            name: 'details',
            params: {
              id: id
            }
          })
        }
      }
    },
    filter: {}
  }

</script>
<style scoped>
</style>
