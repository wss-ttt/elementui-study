<template>
  <div class="box">
    <template v-if="type === '1'">
      站点:
      <el-select v-model="form.station" @change="stationChange">
        <el-option
          v-for="item in stationList"
          :label="item.label"
          :value="item.value"
          :key="item.value"
        ></el-option>
      </el-select>
    </template>
    <template v-if="type === '2'">
      位置:
      <el-select v-model="form.position" @change="positionChange">
        <el-option
          v-for="item in positionList"
          :label="item.label"
          :value="item.value"
          :key="item.value"
        ></el-option>
      </el-select>
    </template>
    <el-button @click="search">搜索</el-button>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: '1'
    }
  },
  data() {
    return {
      stationList: [
        {
          label: '武汉站',
          value: 1
        },
        {
          label: '黄冈站',
          value: 2
        }
      ],
      positionList: [
        {
          label: 'A相线',
          value: 'A'
        },
        {
          label: 'B相线',
          value: 'B'
        },
        {
          label: 'C相线',
          value: 'C'
        }
      ],
      form:{
          station:1,
          position:'A'
      }
    }
  },
  computed: {},
  components: {},
  created() {},
  mounted() {
  },
  destroyed() {},
  watch: {},
  methods: {
    stationChange(val) {
      console.log(val)
    },
    positionChange(val) {
      console.log(val)
    },
    search(){
        this.$emit('search',this.form)
    }
  }
}
</script>
<style scoped>
</style>