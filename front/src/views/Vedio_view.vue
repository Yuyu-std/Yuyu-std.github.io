<template>
    <div>
      <div style="width: 100px; height: 40px; "></div>
      <Title_sub :msg="VedioInfo.VedioName"></Title_sub>
      <div style="width: 100px; height: 20px; "></div>
      <Vedio_play :source="sourceUrl" ref="videoInfo"></Vedio_play>
      <Title_sub :msg="'集数选择'"></Title_sub>
        <el-scrollbar style="height: 240px; margin-top: 10px;">
          <div v-for="item in playInfoList" :key="item.Name + 'playinfo'" 
            class="eachEp" @click="choiceEpisode(item.Num)">{{ item.Name }}</div>
        </el-scrollbar>
      <Title_sub :msg="'简介'"></Title_sub>
      <div v-if="VedioInfo.Description == ''" class="top">占时木有简介哦</div>
      <div v-else class="top">{{ VedioInfo.Description }}</div>
    </div>
  </template>
  
  <script>
  import Title_sub from '@/components/util/Title_sub.vue';
  import Vedio_play from '@/components/util/Vedio_play.vue';
  export default {
      components : {
        Title_sub, Vedio_play
      },
      data() {
          return {
            VedioInfo : {},
            sourceUrl : "",
            playInfoList : []
          }
      },
      beforeCreate() {
        this.VedioInfo = this.$route.query.VedioInfo
      },
      mounted() {
        this.VedioInfo = this.$route.query.VedioInfo
        console.log(this.$route.query.VedioInfo)
        if(this.$route.query.VedioInfo.VedioId != null) {
          localStorage.setItem('VedioviewInfo', JSON.stringify(this.VedioInfo));
        } else {
          this.VedioInfo = JSON.parse(localStorage.getItem('VedioviewInfo'));
        }
        this.$api.user.GetPlayList(this, { VedioId : this.VedioInfo.VedioId })
          .then(res => {
            this.playInfoList = res
            this.choiceEpisode(1)
          })
      },
      methods: {
        getUrl( vedioId, num, m3u8Url ) {
          let ss = this.$baseURL + "vedio/" + String(vedioId) + "/";
          ss += String(num) + "/" + m3u8Url;
          return ss;
        },
        choiceEpisode( i ) {
          if (this.playInfoList.length == 0) return 
          this.sourceUrl = this.getUrl(this.VedioInfo.VedioId, i, this.playInfoList[i - 1].Url)
          this.$refs.videoInfo.changeSource(this.sourceUrl);
        }
      }
  }
  </script>
  
  <style>
  .top {
    margin-top: 10px;
  }
  .el-scrollbar__wrap {
    overflow-x: hidden !important;
  }
  .is-horizontal {
    display: none;
  }
  .eachEp {
    height: 32px;
    border-bottom-style: solid ;
    border-bottom-width: 1px;
    border-bottom-color: #E4E7ED;
    display: flex;
    align-items: center;
    margin-left: 16px;
  }
  .eachEp:hover {
    background-color: #d9dce2; /* 鼠标悬浮时的背景色 */
  }
  .eachEp:active {
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1); /* 按下时的阴影效果 */
    /* transform: translateY(1px); 按下时向下移动 */
  }
  </style>