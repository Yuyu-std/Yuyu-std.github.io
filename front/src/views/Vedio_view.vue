<template>
    <div>
      <div style="width: 100px; height: 40px; "></div>
      <TitleSub :msg="cartoonBaseInfo.cartoonName"></TitleSub>
      <div style="width: 100px; height: 20px; "></div>
      <VideoPlay :source="sourceUrl" ref="videoInfo"></VideoPlay>
      <TitleSub :msg="'集数选择'"></TitleSub>
      <el-button  v-for="i in total_num" :key="'button' + i" plain
        class="choise-btn" @click="choiceEpisode(i)">{{ i }}</el-button>
      <TitleSub :msg="'简介'"></TitleSub>
      <VideoDiscrip :cartoonBaseInfo="cartoonBaseInfo"></VideoDiscrip>
    </div>
  </template>
  
  <script>
  import VideoPlay from '@/components/util/Video_play.vue';
  import TitleSub from '@/components/util/Title_sub.vue';
  import PlayBotton from '@/components/rightPart/main/Play_bottom.vue'
  import VideoDiscrip from '@/components/util/Video_discrip.vue'
  export default {
      components : {
          VideoPlay, TitleSub, PlayBotton, VideoDiscrip
      },
      data() {
          return {
            cartoonBaseInfo : {},
            total_num : 0,
            m3u8List : [],
            sourceUrl : ""
          }
      },
      created() {
        this.cartoonBaseInfo = this.$route.query.cartoonBaseInfo
        this.$api.project.getVideo({cartoonId : this.cartoonBaseInfo.cartoonId})
            .then((result) => {
          result = result.data
          if(result.code == 0) {
            this.$message.error('请求失败');
            return;
          }
          result = result.data
          this.total_num = result.num
          this.m3u8List = result.infos
          this.m3u8List.sort(function(a,b){
            return a.num - b.num;
          })
          this.sourceUrl = this.getUrl(this.cartoonBaseInfo.cartoonId, 1, result.infos[0].m3u8Url)
          this.$refs.videoInfo.changeSource(this.sourceUrl);
        })
      },
      methods: {
        getUrl( cartoonId, num, m3u8Url ) {
          let ss = this.$baseURL + "/video/" + cartoonId + "/";
          ss += String(num) + "/" + m3u8Url;
          return ss;
        },
        choiceEpisode( i ) {
          this.sourceUrl = this.getUrl(this.cartoonBaseInfo.cartoonId, i, this.m3u8List[i - 1].m3u8Url)
          this.$refs.videoInfo.changeSource(this.sourceUrl);
        }
      }
  }
  </script>
  
  <style>
  .choise-btn {
    margin-top: 1em;
  }
  </style>