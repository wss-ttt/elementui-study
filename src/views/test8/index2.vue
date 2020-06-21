<template>
  <div class="wrapper">
    <!-- <svg id="main" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"
      width="345px" height="167px" viewBox="-0.5 -0.5 345 167"
      content="&lt;mxfile modified=&quot;2020-06-20T09:51:51.045Z&quot; host=&quot;app.diagrams.net&quot; agent=&quot;5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36&quot; etag=&quot;hWJVc01_EyOqFgQKh1pE&quot; version=&quot;13.3.0&quot; type=&quot;google&quot;&gt;&lt;diagram id=&quot;Ht1M8jgEwFfnCIfOTk4-&quot; name=&quot;Page-1&quot;&gt;3ZbbbpwwEIafhssijHfZcJlst62ipqqUqFWvVg54waphqD0sbJ6+djGn0PSkTaX2Cub3eGzPN2Pw6LZoXytW5TeQcumFQdp69KUXhoRcrM3DKqdOiagTMiVS5zQKt+KBOzFwai1SrmeOCCBRVHMxgbLkCc40phQ0c7cDyPmqFcv4QrhNmFyqH0WKeadehJtRf8NFlvcrkyjuRgrWO7uT6Jyl0EwkuvPoVgFg91a0Wy5t8vq8dPNePTE6bEzxEn9lQnHzBe+uG/Lp4e7yWhx2H94BvnBRjkzW7sBus3jqM1CBKJGr3dGsY5NJPHp15AqFSdJbds/le9ACBZRm7B4QoTAOw2EDY6RM5zx1BpMis64Jt1GNkGMhH4W9dD4IVRersnsp2szWmM+lAa2sny/KtE4QlPYrQBNQMLlHxUp9AFVwtTdJvnInNKF5+2TqyADEVDKHgqM6GRc3IXYI+xp2ZjMWROzylk9qYeXcmCvBbIg7UjIvDtRvQAt/Du3vAkIFn4f2ID9Gps1MQ0lDrRKu/aRWloKzz4OLxqsZr/WSV89myit6Ll70P2qyrr32dN8YWZSZPg8yEoT+egaNhEtq0WZJLY6eidrq36amuBZ6ejXatJgrkZwH2NBBDtdmSYsE32myP7gUjTl+Jb+NTf416O4r&lt;/diagram&gt;&lt;/mxfile&gt;"
      style="background-color: rgb(255, 255, 255);">
      <defs />
      <g>
        <rect x="0" y="10" width="92" height="40" fill="none" stroke="none" pointer-events="all" />
        <ellipse cx="32" cy="30" rx="20" ry="20" fill="red" stroke="#000000" pointer-events="all" />
        <ellipse cx="60" cy="30" rx="20" ry="20" fill="none" stroke="#000000" pointer-events="all" />

        <path d="M 0 30 L 12 30 M 80 30 L 92 30" fill="none" stroke="#000000" stroke-miterlimit="10"
          pointer-events="all" />
        <ellipse cx="324" cy="40" rx="20" ry="20" fill="#ffffff" stroke="#000000" pointer-events="all" />
        <ellipse cx="324" cy="20" rx="20" ry="20" fill="green" stroke="#000000" pointer-events="all" />
        <ellipse cx="324" cy="40" rx="20" ry="20" fill="none" stroke="#000000" pointer-events="all" />
        <rect x="12.5" y="70" width="67" height="96" fill="none" stroke="none" pointer-events="all" />
        <path d="M 46 70 L 46 85.36 M 31.64 150.64 L 31.64 166 M 60.36 150.64 L 60.36 166" fill="none" stroke="#000000"
          stroke-miterlimit="10" pointer-events="all" />

        <ellipse :class="type[list[0].trans[0]['status']]" id="c1" cx="31.64" cy="131.44" rx="19.142857142857142" ry="19.2" fill="none"
          pointer-events="all" />
        <ellipse :class="type[list[0].trans[1]['status']]" id="c2" cx="60.36" cy="131.44" rx="19.142857142857142" ry="19.2" fill="none"
          pointer-events="all" />
        <ellipse :class="type[list[0].trans[2]['status']]" id="c3" cx="46" cy="104.56" rx="19.142857142857142" ry="19.2" fill="none"
          pointer-events="all" />

        <rect x="150" y="20" width="100" height="40" fill="none" stroke="none" pointer-events="all" />
        <rect x="168" y="20" width="64" height="20" fill="#ffffff" stroke="#000000" pointer-events="all" />
        <path d="M 150 30 L 168 30 M 232 30 L 250 30 M 200 40 L 200 60 M 195 45 L 200 40 L 205 45" fill="none"
          stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" pointer-events="all" />
      </g>


    </svg> -->
    <e-e></e-e>
  </div>
</template>

<script>
  import EE from './components/EE'
  export default {
    components: {
      EE
    },
    props: {},
    data() {
      return {
        type: ['normal', 'warning', 'abnormal'],
        list: [{
          name: '1线',
          trans: [{
            val: 88,
            status: 0
          }, {
            val: 99,
            status: 1
          }, {
            val: 10,
            status: 2
          }]
        }, {
          name: '2线',
          trans: [{
            val: 88,
            status: 0
          }, {
            val: 99,
            status: 1
          }, {
            val: 100,
            status: 2
          }]
        }, {
          name: '3线',
          trans: [{
            val: 11,
            status: 0
          }, {
            val: 22,
            status: 1
          }, {
            val: 33,
            statue: 2
          }]
        }]
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
  .normal {
    stroke: #03c1ff;
    animation: normal 2s linear infinite;
  }
  .warning {
    stroke: #fdb519;
    animation: warning 2s linear infinite;
  }
  .abnormal {
    stroke: #ff2419;
    animation: abnormal 2s linear infinite;
  }
  @keyframes normal{
    0% {
      stroke: rgba(3,193,255, .2);
    }
    50% {
      stroke:  rgba(3,193,255, 1);
    }
    100% {
      stroke:  rgba(3,193,255, .2);
    }
  }
  @keyframes warning {
    0% {
      stroke: rgba(253,181,25, .2);
    }
    50% {
      stroke:  rgba(253,181,25, 1);
    }
    100% {
      stroke:  rgba(253,181,25, .2);
    }
  }
  @keyframes abnormal {
    0% {
      stroke: rgba(255,36,25, .2);
    }
    50% {
      stroke:  rgba(255,36,25, 1);
    }
    100% {
      stroke:  rgba(255,36,25, .2);
    }
  }
</style>
