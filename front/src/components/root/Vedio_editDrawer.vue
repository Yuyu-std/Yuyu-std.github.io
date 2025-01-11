<!-- 
    编辑某个影视选项的抽屉框选项:
    监听事件
-->
<template>
    <div>
      <el-drawer
          :title="title" :visible.sync="drawer" size="56%"
          :direction="'rtl'" :before-close="handleClose">
          <el-form :label-position="'right'" label-width="16%" :model="form" class="editFrom">
              <el-form-item label="影视名称">
                  <el-input v-model="form.VedioName"></el-input>
              </el-form-item>
              <el-form-item label="影视封面">
                <img :src="imgUrl" class="imgSize" @click="uploadImg()">
                <el-dialog title="上传封面图片" :visible.sync="uploadImgVis" width="40%" append-to-body>
                    <Image_uploader ref="editImageUpload"></Image_uploader>
                    <el-button type="primary" @click="saveUploadImg" size="medium" style="margin-top: 15px;">保存更改</el-button>
                </el-dialog>
              </el-form-item>
              <el-form-item label="影视类别">
                <el-select v-model="form.TypeId" placeholder="请选择类别">
                  <el-option v-for="item in TypeList" :key="item.TypeId + 'type2'"
                    :label="item.Name" :value="item.TypeId"></el-option>
                </el-select>              
              </el-form-item>
              <el-form-item label="影视可见性">
                <el-switch v-model="form.Visable" active-text="可见" inactive-text="不可见"></el-switch>
              </el-form-item>
              <el-form-item label="影视简介">
                  <el-input type="textarea" autosize
                              v-model="form.Description" class="Editdiscrip">
                  </el-input>
              </el-form-item>
              <el-form-item label="每集信息管理">
                  <EposodeAdder :VedioName="form.VedioName" :key="resetCount_"
                        :EposodeNum="form.EpisodeInfos.length + 1" :VedioId="form.VedioId"></EposodeAdder>
                  <Episode_edit v-for="(pr, index) in form.EpisodeInfos" :key="'editEpisode' + pr + index + editCount2_"
                      :EpicInfo="pr"></Episode_edit>
              </el-form-item>
              <el-form-item>
                  <el-button type="primary" @click="onSubmit">保存更改</el-button>
              </el-form-item>
          </el-form>
      </el-drawer>
      <el-dialog :visible.sync="waitDialog" title="请等待...." append-to-body>
        <el-progress type="circle" :percentage="videoUploadPercent" class="wait"></el-progress>        
      </el-dialog>

    </div>
  </template>
  
  <script>
  import Episode_edit from './Episode_edit.vue';
  import EposodeAdder from './Eposode_adder.vue'
  import Image_uploader from '../util/Image_uploader.vue';
  import { EventBus } from '@/bus/Event_Bus';
  export default {
      components : {
        EposodeAdder, Episode_edit, Image_uploader
      },
      data() {
          return {
              ori_info : {},
              form : {
                EpisodeInfos : []
              },
              drawer : false,
              title : "",
              uploadImgVis : false,
              imgUrl : "",
              uploadVedioVis : false,
              resetCount_ : 1,
              waitDialog : false,
              videoUploadPercent : 0,
              editCount2_ : 1,
              TypeList : []
          }
      },
      methods : {
          handleOpen(ori_info) {
            this.form = JSON.parse(JSON.stringify(ori_info))
            console.log(this.form)
            this.title = this.form.VedioName
            this.imgUrl = this.$baseURL + "/image/" + this.form.VedioCover
            this.drawer = true
          },
          handleClose(done) {
              this.$confirm('请确保你的更改已保存?').then( _ => {
                  done();
              }).catch(_ => {});
          },
          uploadImg() {
            this.uploadImgVis = true
          },
          saveUploadImg() {
            this.form.VedioCover = this.$refs.editImageUpload.getFileName();
            this.imgUrl = this.$refs.editImageUpload.getTempUrl()
            this.uploadImgVis = false
          },
          onSubmit() {
            console.log(this.form);
            this.waitDialog = true
            let I = setInterval(() => {
              if(this.videoUploadPercent == 99 || this.videoUploadPercent == 100) {
                if(this.videoUploadPercent == 100) {
                  this.waitDialog = false
                }
                return
              }
              this.videoUploadPercent += 1
            }, 2000)
            this.$api.admin.editVedio(this, this.form).then(res => {
              this.videoUploadPercent = 100
              clearInterval(I)
              setTimeout(function(){
                  top.document.location.reload();
              }, 1000);
            })
          }
      },
      created() {
        EventBus.$on("UploadVedio", (payload) => {
            this.form.EpisodeInfos.push(payload)
            this.resetCount_ += 1;
        })
        EventBus.$on("UploadEpiso", (payload) => {
          console.log(payload)
          this.form.EpisodeInfos[payload.Num - 1] = payload
          this.editCount2_ += 1
        })
      },
      destroyed() {
        EventBus.$off("UploadVedio")
        EventBus.$off("UploadEpiso")
      },
      beforeCreate() {
        this.$api.admin.VedioType(this).then(res => {
          this.TypeList = res
          console.log(this.TypeList)
        })
      }
  }
  </script>
  
  <style>
  .editFrom {
      margin-left: 8px;
  }
  .editFrom .el-form-item {
      width: 96%;
  }
  .imgSize {
      width: 200px;
      border: solid 1px rgba(0,0,0,0.2);
  }
  .wait {
    margin-top: 10px;
    margin-left: 212px;
  }
  </style>