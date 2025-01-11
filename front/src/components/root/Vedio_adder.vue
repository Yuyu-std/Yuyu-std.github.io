<template>
    <div>
      <el-button type="primary" icon="el-icon-edit" @click="dialogVisible = true"
          size="medium" style="margin-bottom: 8px;"> 添加影视</el-button>
  
      <el-dialog title="添加影视" :visible.sync="dialogVisible" width="44%" append-to-body>
        <el-form :label-position="'left'" label-width="100px" :model="createVedio">
            <el-form-item label="影视名称">
                <el-input v-model="createVedio.VedioName"></el-input>
            </el-form-item>
            <el-form-item label="上传封面">
                <Image_uploader ref="createImgUpload"></Image_uploader>
            </el-form-item>
            <el-form-item label="影视类别">
              <el-select v-model="createVedio.TypeId" placeholder="请选择类别">
                <el-option v-for="item in TypeList" :key="item.TypeId + 'type'"
                  :label="item.Name" :value="item.TypeId"></el-option>
              </el-select>              
            </el-form-item>
            <el-form-item label="影视描述">
                <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}"
                    placeholder="请输入内容" v-model="createVedio.Description"> </el-input>
            </el-form-item>
            <el-form-item label="前台可见性">
                <el-switch v-model="createVedio.Visable" active-text="可见" inactive-text="不可见"></el-switch>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm()">创建影视</el-button>
            </el-form-item>
        </el-form>
      </el-dialog>
    </div>
  </template>
  
  <script>
  import Image_uploader from '../util/Image_uploader.vue';
  export default {
      components : {
        Image_uploader
      },
      data() {
          return {
              dialogVisible : false,
              createVedio : {
                VedioName : "",
                VedioCover : "",
                Description : "",
                TypeId : null,
                Visable : false
              },
              TypeList : []
          }
      },
      methods : {
        submitForm() {
            this.createVedio.VedioCover = this.$refs.createImgUpload.getFileName()
            this.$api.admin.createVedio(this, this.createVedio);
        },
      },
      beforeCreate() {
        this.uploadUrl = this.$baseURL + "/root/upload"
        this.$api.admin.VedioType(this).then(res => {
          this.TypeList = res
          console.log(this.TypeList)
        })
      }
  }
  </script>
  
  <style>
  
  </style>