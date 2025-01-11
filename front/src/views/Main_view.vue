<template>
  <div>
    <Carousel_view :carouselList="carouselList"></Carousel_view>
    <Title_sub :msg="'全部影视目录'"></Title_sub>
    <el-tabs v-model="activeName">
      <el-tab-pane v-for="(pr, index) in typeInfo"  :label="pr.Name"
        :name="pr.Name" :key="pr + 'type' + index" class="tab">
          <Vedio_menu v-if="typeInfo != null && allVedioInfos != null"
            :menuInfo="allVedioInfos[pr.TypeId]" :vedioType="allVedioInfos[pr.TypeId][0].TypeId"></Vedio_menu>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Carousel_view from '@/components/util/Carousel_view.vue';
import Title_sub from '@/components/util/Title_sub.vue';
import Vedio_menu from '@/components/main/Vedio_menu.vue';
export default {
    name : "Main_view.vue",
    components : {
        Carousel_view, Title_sub, Vedio_menu
    },
    data() {
      return {
        typeInfo : null,
        allVedioInfos : null,
        carouselList : null,
        activeName : ""
      }
    },
    beforeCreate() {
      this.$api.pub.VedioType(this).then(res => {   
        this.typeInfo = res.TypeInfos
        this.activeName = this.typeInfo[0].Name
      })
      this.$api.pub.ShowIndex(this).then(res => {
        this.allVedioInfos = res
      })
      this.$api.pub.ShowCarousel(this).then(res => {
        this.carouselList = res
      })
    }
}
</script>

<style>
.tab {
  min-width: 50px;
}
</style>