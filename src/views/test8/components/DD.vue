<template>
  <div class="wrapper">
    <button @click="test">test</button>
    <!-- <div v-for="item in list" :key="item.id">
      长度: {{ list.length }}
      <br>
      id: {{ item.id }}
      <br>
      name: {{ item.info.name }}
      <br>
      age: {{ item.info.age }}
      <br>
      score: {{ item.score[0]['name']}}
    </div> -->

    <div>
      {{ list[0]['info']['name'] }}
    </div>

  </div>
</template>

<script>
  export default {
    components: {},
    props: {
      list: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        data: []
      }
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {
      console.log('mounte', this.list)
    },
    activated() {},
    deactivated() {},
    updated() {},
    destroyed() {},
    methods: {
      test() {
        console.log('nameList', this.nameList)
      }
    },
    filter: {}
  }

</script>
<style scoped>
</style>
