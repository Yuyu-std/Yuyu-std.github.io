<!-- 
    单一影视展示矩形，包含影视的封面、标题
    传入数据：
    1. {VedioId: '', VedioName: '', VedioCover: ''}
    2. clickable: true [可选]点击是否要跳转到播放页面
 -->
 <template>
    <div class="video-item">
      <img class="imgItem" :src="absUrl" @click="jumpTo()" >
      <div class="name" @click="jumpTo()" v-if="ifShowName">{{ show_name }}</div>
    </div>
  </template>
  
  <script>
  export default {
      props : {"VedioInfo" : Object, "clickable" : {
          type: Boolean,
          default : true
      },"ifShowName" : {
          type: Boolean,
          default : true
      }},
      data() {
          return {
              show_name : "",
              absUrl : "",
          }
      },
      methods : {
          jumpTo() {
              this.$router.push({ name:"video", query: {VedioInfo : this.VedioInfo} })
          },
          initInfo() {
              console.log(this.VedioInfo)
              if (this.VedioInfo.VedioName.length > 10) {
                  this.show_name = this.VedioInfo.VedioName.substring(0, 15);
                  this.show_name += "..."
              } else this.show_name = this.VedioInfo.VedioName
              this.absUrl = this.$baseURL + "image/" + this.VedioInfo.VedioCover;
          }
      },
      watch: {
        VedioInfo() {
              this.initInfo();
        }
      },
      mounted() {
          this.initInfo();
      }
  }
  </script>
  
  <style scoped>
  .video-item {
      width: 10em;
      max-width: 270px;
      min-width: 70px;
      aspect-ratio: 4/3;
      text-align: center;
      font-size: 16px;
      margin-right: 5px;
      margin-top:10px;
      background-color: #f7f8f9;
  }
  .name {
      width: 10em;
      max-width: 270px;
      min-width: 70px;
  }
  .imgItem {
      width: 100%; border-radius: 4px;
  }
  </style>