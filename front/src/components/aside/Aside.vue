<!-- 
  左侧侧边栏的主文件 
-->
<template>
  <div>
    <Main_ICONVue></Main_ICONVue>
    <Nav_menuVue></Nav_menuVue>
  </div>
</template>

<script>
import Main_ICONVue from './Main_Icon.vue'
import Nav_menuVue from './Nav_menu.vue'

export default {
  name : "Aside.vue",
  components : {
    Main_ICONVue, Nav_menuVue
  }
}
</script>

<style>

</style>