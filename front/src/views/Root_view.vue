<template>
  <div>
    <Title_sub :msg="'欢迎来到管理员控制面板 :)'" ></Title_sub>
    <Dashboard></Dashboard>
  </div>
</template>

<script>
import Title_sub from '@/components/util/Title_sub.vue';
import Dashboard from '@/components/root/Dashboard.vue';
export default {
    name : "Root_view.vue",
    components : {
        Title_sub, Dashboard
    }
}
</script>

<style>

</style>