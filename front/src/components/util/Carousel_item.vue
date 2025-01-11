<!-- 
    走马灯中展示的数据
    传入数据：
    CarouselInfo {
        { "VedioId": 1, "VedioName": "", "VedioCover": "",
            "Description": "", "Visable": true, "TypeId": 1 }
    }
    ifShowVedio {bool}
 -->
<template>
  <div>
    <Vedio_item class="carousel-video-item" v-if="ifShowVedio"
        :VedioInfo="CarouselInfo.Vedio" 
        :TypeId="CarouselInfo.Vedio.TypeId" 
        :ifShowName=false
        ref="vedio_item"></Vedio_item>
    <img class="carousel-img-item" :src="absUrl"
        style="object-fit: scale-down;" @click="jumpTo()" >
  </div>
</template>

<script>
import Vedio_item from '../util/Vedio_item.vue';

export default {
    name : "Carousel_item.vue",
    props : ["CarouselInfo", "ifShowVedio"],
    components : {
        Vedio_item
    },
    data() {
        return {
            absUrl : "",
        }
    },
    mounted() {
        console.log(this.CarouselInfo)
        this.absUrl = this.$baseURL + "/image/" + this.CarouselInfo.Cover
        console.log(this.absUrl)
    },
    methods : {
        jumpTo() {
            this.$refs.vedio_item.jumpTo();
        }
    }
}
</script>

<style>
.carousel-img-item{
    height: 24em;
    width: 100%;
}
.carousel-video-item {
    float: right;
    margin-right: 5vw;
    margin-top: 30px;
    position: absolute;
    transform: translate(62vw, 8vh);
}
</style>