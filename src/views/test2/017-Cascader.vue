<template>
  <div class="wrapper">
    省份:
    <el-select v-model="province" placeholder="请选择" @change="provinceChange">
      <el-option
        v-for="item in provinceList"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      ></el-option>
    </el-select>市区:
    <el-cascader ref="cityCascader" :key="isResourceShow" v-model="city" :options="cityList" :props="props"></el-cascader>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      provinceList: [
        {
          label: '湖北省',
          value: '1'
        },
        {
          label: '湖南省',
          value: '2'
        }
      ],
      province: '1', // 设置默认值
      cityList: [],
      // 湖北省的市区数据
      cityList1: [
        {
          value: 'wh',
          label: '武汉市',
          children: [
            {
              value: 'xz',
              label: '新洲区'
            },
            {
              value: 'jh',
              label: '江汉区'
            }
          ]
        },
        {
          value: 'hg',
          label: '黄冈市'
        }
      ],
      // 湖南省的市区数据
      cityList2: [
        {
          value: 'cs',
          label: '长沙市',
          children: [
            {
              value: 'tx',
              label: '天心区'
            },
            {
              value: 'kf',
              label: '开福区'
            }
          ]
        },
        {
          value: 'cd',
          label: '常德市',
          children: [
            {
              value: 'wl',
              label: '武陵区'
            }
          ]
        }
      ],
      city: [],
      isResourceShow:0,
      props: { multiple: true } // 设置多选
    }
  },
  computed: {},
  components: {},
  created() {},
  mounted() {
    this.cityList = this.cityList1
    // this.city = [['wh','xz'],['wh','jh']]
    this.city = [['wh', 'xz']]
  },
  destroyed() {},
  watch: {},
  methods: {
    provinceChange(val) {
      console.log('省份改变事件')
      this.isResourceShow++
      this.cityList = this.cityList2
      //   this.city = [['cs','tx'],['cs','kf']]
      this.city = [['cs', 'tx']]
    }
  }
}
</script>
<style scoped>
</style>