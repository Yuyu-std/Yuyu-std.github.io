<!-- 
    点击增加上传视频后弹出的组件
    传入参数 : actionUrl : ''[相应的后端api], unclickable[是否允许上传]
 -->
 <template>
    <div>
      <el-upload style="margin-top: 16px" drag :headers="header" :action="actionUrl"
        :show-file-list="true" :limit="1"
        :disabled="finished"
        :on-success="handleVideoSuccess"
        :before-upload="beforeUploadVideo"
        :file-list="fileList"
        :on-progress="uploadVideoProcess">
        <i v-if="!finished"  class="el-icon-upload"></i>
        <div v-if="!finished" class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <el-result v-if="finished" icon="success" style="margin-top: 20px;n"></el-result>
      </el-upload>
    </div>
  </template>
  
  <script>
  export default {
      data() {
          return {
              videoUploadPercent: 0,
              fileList : [],
              actionUrl : "",
              header : {
                'Authorization' : localStorage.getItem("token")
              },
              finished : false,

              fileName : ""
          }
      },
      methods : {
          beforeUploadVideo(file) {
              if (['video/mp4', 'video/ogg', 'video/flv', 'video/avi', 'video/wmv', 'video/rmvb'].indexOf(file.type) === -1) {
                  this.$message.error('请上传正确的视频格式')
                  return false
              }
              return true;
          },
          uploadVideoProcess(event, file, fileList) {
              this.videoUploadPercent = Number(file.percentage)
          },
          handleVideoSuccess(res, file) {
            this.finished = true
            this.fileName = file.name
          },
          getFileName() {
            return this.fileName
          }
      },
      created() {
        this.actionUrl = this.$baseURL + "root/uploadVedio"
      }
  }
  </script>
  
  <style>
  
  </style>