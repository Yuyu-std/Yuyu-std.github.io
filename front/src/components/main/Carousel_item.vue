<!-- 
    走马灯中展示的数据
    传入数据：
    1. CarouselInfo {
        Vedio : {VedioId: '', VedioName: '', VedioCover: ''}
        CarouselCover : ''
    }
 -->
<template>
  <div>
    <Vedio_item class="carousel-video-item"
        :VedioInfo="CarouselInfo.Vedio" ref="vedio_item"></Vedio_item>
    <img class="carousel-img-item" :src="absUrl"
        style="object-fit: contain;" @click="jumpTo()" >
  </div>
</template>

<script>
import Vedio_item from '../util/Vedio_item.vue';

export default {
    name : "Carousel_item.vue",
    props : ["CarouselInfo"],
    components : {
        Vedio_item
    },
    data() {
        return {
            absUrl : "",
        }
    },
    mounted() {
        // ....
    },
    methods : {
        jumpTo() {
            this.$refs.vedio_item.jumpTo();
        }
    }
}
</script>

<style>

</style>