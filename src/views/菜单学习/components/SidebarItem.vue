<template>
  <div v-if="item.children">
    <template v-if="item.children.length == 0">
        <el-menu-item :index="item.menuId">
          <i class="el-icon-menu"></i>
          {{item.menuName}}
        </el-menu-item>
    </template>

    <el-submenu v-else :index="item.menuId">
      <template slot="title" >
        <i class="el-icon-menu"></i>
        {{item.menuName}}
      </template>

      <template v-for="child in item.children">
        <sidebar-item
          v-if="child.children&&child.children.length>0"
          :item="child"
          :key="child.menuId"/>
        <el-menu-item v-else :key="child.menuId" :index="child.menuId">
          <i class="el-icon-location"></i>
          {{child.menuName}}
        </el-menu-item>
      </template>
    </el-submenu>
  </div>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>