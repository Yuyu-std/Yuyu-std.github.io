<!-- 
  左侧的导航栏,点击可前往不同的路由
 -->
 <template>
    <div>
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo">
  
        <el-menu-item index="1" @click="returnHome()">
          <i class="el-icon-s-home"></i>
          <span slot="title" >首页</span>

        </el-menu-item>
      </el-menu>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      returnHome() {
        this.$router.push({name:"home"}).catch(err => {})
      }
    },
  }
  </script>
  