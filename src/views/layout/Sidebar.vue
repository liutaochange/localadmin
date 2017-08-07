<template>
    <el-menu mode="vertical" theme="dark" :default-active="$route.path" :unique-opened="opened">
        <sidebar-item :routes='permission_routers'></sidebar-item>
    </el-menu>
</template>

<script>
    import { mapGetters } from 'vuex';
    import SidebarItem from './SidebarItem';
    export default {
      components: { SidebarItem },
      data(){
        return {
          opened : true
        }
      },
      computed: {
        ...mapGetters([
          'permission_routers'
        ])
      }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.el-menu {
    min-height: 100%;
}


</style>
