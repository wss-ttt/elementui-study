<template>
  <div class="zMenu">
    <template v-for="menu in menus">
      <el-submenu v-if="menu.children && menu.children.length >= 1" :index="menu.menuId + ''" :key="menu.menuId">
        <template slot="title">
          <i :class="menu.icon"></i>
          <span slot="title">{{menu.menuName}}</span>
        </template>
        <z-menu :menus="menu.children"></z-menu>
      </el-submenu>
      <el-menu-item v-else :index="menu.menuId + ''" @click="handleRouter(menu)" :key="menu.menuId">
        <i :class="menu.icon"></i>
        <span slot="title">{{menu.menuName}}</span>
      </el-menu-item>
    </template>
  </div>
</template>
<script>
export default {
  name: 'zMenu', // 至关重要，就靠这个名字递归了
  props: {
    menus: {
      type: Array,
      default: function () {
        return [];
      },
      required: false
    }
  },
  methods: {
    handleRouter(menu) {
      // 跳转路由
      this.$router.push(menu.route);
    }
  }
}
</script>

<style>
</style>