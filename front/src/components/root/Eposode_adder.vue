 <template>
    <div> 
      <el-button size="mini" @click="dialogVisible = true">增加集数</el-button>
      <el-dialog :visible.sync="dialogVisible" :title="'添加 ' + VedioName + ' 集数（第' + EposodeNum + '集）'" width="44%" append-to-body>
        <el-form v-model="form" :label-position="'right'" label-width="20%">
          <el-form-item label="导入方式">
            <el-switch v-model="form.localImport" active-text="本地导入" inactive-text="url导入"></el-switch>
          </el-form-item>
          <el-form-item label="名称">
            <el-input v-model="name" placeholder="请输入名称"></el-input>
          </el-form-item>
          <el-form-item label="本地导入" v-show="form.localImport">
            <Vedio_uploader ref="AddVedioUpload"></Vedio_uploader>
          </el-form-item>
          <el-form-item label="url导入" v-show="!form.localImport">
            <el-input v-model="form.internetUrl" placeholder="请输入绝对路径"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button size="medium" @click="submitUpload">确认添加</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>
  </template>
  
  <script>
  import Vedio_uploader from '../util/Vedio_uploader.vue';
  import { EventBus } from '@/bus/Event_Bus';
  export default {
      props : ["VedioName", "EposodeNum", "VedioId"],
      components : {
        Vedio_uploader
      },
      data() {
          return {
              dialogVisible : false,
              form : {
                localImport : true,
                internetUrl : ""
              },
              name : ""
          }
      },
      methods : {
        submitUpload() {
          let mes = {
            VedioId : this.VedioId,
            Num : this.EposodeNum,
            Name : this.name,
            Type : 0,
            Url : ""
          }
          if(! this.form.localImport) {
            mes.Type = 1
            mes.Url = this.form.internetUrl
          } else {
            mes.Url = this.$refs.AddVedioUpload.getFileName()
          }
          EventBus.$emit("UploadVedio", mes);
          this.$message.success("成功添加")
          setTimeout(()=> {
            this.dialogVisible = false;
          }, 200)
        }
      },
      created() {
      },
      watch : {
        dialogVisible() {
          this.timmer = new Date().getTime()
        }
      }
  }
  </script>
  
  <style>
  
  </style>