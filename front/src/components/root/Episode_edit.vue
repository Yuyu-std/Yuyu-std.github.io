<template>
    <div>
      <el-row>
          <el-col :span="4">第 {{ EpicInfo.Num }} 集:</el-col>
          <el-col :span="16">
              <el-link @click="jumpToVideo()" target="_blank">{{ EpicInfo.Name }}</el-link>
          </el-col>
          <el-col :span="4">
              <el-button size="mini" @click="editVis = true">Edit</el-button>
          </el-col>
      </el-row>
  
      <el-dialog :title="'更改第' + EpicInfo.Num + '集信息'" 
            :visible.sync="editVis" width="44%" append-to-body>
            <el-form :label-position="'right'" label-width="16%" :model="temEpicInfo" class="editFrom">
              <el-form-item label="本集名称">
                  <el-input v-model="temEpicInfo.Name"></el-input>
              </el-form-item>
              <el-form-item label="本集片源">
                  <span>{{ temEpicInfo.Url }}</span>
                  <Vedio_uploader ref="editEpiso"></Vedio_uploader>
              </el-form-item>
              <el-form-item>
                  <el-button @click="onSubmit">保存更改</el-button>
              </el-form-item>
            </el-form>
      </el-dialog>
    </div>
  </template>
  
  <script>
  import { EventBus } from '@/bus/Event_Bus';
  import Vedio_uploader from '../util/Vedio_uploader.vue';
  export default {
      props : ["EpicInfo"],
      components : {
        Vedio_uploader
      },
      data() {
          return {
              editVis : false,
              temEpicInfo : {}
          }
      },
      methods : {
          jumpToVideo() {
  
          },
          onSubmit() {
            this.temEpicInfo.Url = this.$refs.editEpiso.getFileName()
            EventBus.$emit("UploadEpiso", this.temEpicInfo)
            this.$message.success("保存成功")
            setTimeout(()=> {
                this.editVis = false
            }, 500)
          }
      },
    created() {
        this.temEpicInfo = JSON.parse(JSON.stringify(this.EpicInfo))
    }
  }
  </script>
  
  <style>
  </style>