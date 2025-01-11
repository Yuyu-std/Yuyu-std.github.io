<template>
  <div>
    <Carousel_view
        :carouselList="carouselList"></Carousel_view>
    <el-divider></el-divider>
    <el-button type="primary" size="medium" style="margin-bottom: 8px;" @click="dialogVisible = true">增加轮播图</el-button>
    <el-dialog title="添加轮播图" :visible.sync="dialogVisible" width="44%" append-to-body>
        <el-form :label-position="'left'" label-width="100px" :model="createInfo">
            <el-form-item label="上传图片">
                <Image_uploader ref="createCarouselImgUpload"></Image_uploader>
            </el-form-item>
            <el-form-item label="是否展示视频">
                <el-switch v-model="createInfo.IfShowVedio" active-text="可见" inactive-text="不可见"></el-switch>            
            </el-form-item>
            <el-form-item label="视频 ID" v-if="createInfo.IfShowVedio">
                <el-input v-model="createInfo.VedioId" placeholder="请输入视频 ID"></el-input>
            </el-form-item>
            <el-button type="primary" size="medium" @click="createCarousel">确认添加</el-button>
        </el-form>
    </el-dialog>

    <el-table :data="carouselList" style="width: 100%; max-width: 1200px;">
      <el-table-column  prop="CarouselId" label="轮播图 ID"></el-table-column>
      <el-table-column prop="Cover"  label="轮播图封面"></el-table-column>
      <el-table-column prop="IfShowVedio" label="是否展示视频">
        <template slot-scope="scope">
            <el-tag v-if="scope.row.IfShowVedio">展示</el-tag>
            <el-tag v-else>不展示</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="Vedio.VedioId" label="视频ID"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
            <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
        </el-table-column>
    </el-table>
  </div>
</template>

<script>
import Carousel_view from '../util/Carousel_view.vue';
import Image_uploader from '../util/Image_uploader.vue';
export default {
    components : {
        Carousel_view, Image_uploader
    },
    data() {
        return {
            carouselList : null,
            dialogVisible : false,
            createInfo : {
                Cover : "",
                IfShowVedio : false,
                VedioId : null
            }
        }
    },
    methods : {
        createCarousel() {
            this.createInfo.Cover = this.$refs.createCarouselImgUpload.getFileName()
            console.log(this.createInfo)
            this.createInfo.VedioId = parseInt(this.createInfo.VedioId)
            this.$api.admin.CreateCarousel(this, this.createInfo);
        }
    },
    beforeCreate() {
        this.$api.pub.ShowCarousel(this).then(res => {
            this.carouselList = res
        })
    }
}
</script>

<style>

</style>