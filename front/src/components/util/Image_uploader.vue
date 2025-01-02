<template>
<div>
    <el-upload :action="uploadUrl"
        :headers="header" :limit="1"
        :on-success="handleSuccess" :on-remove="handleRemove"
        :file-list="fileList" list-type="picture">
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
</div>
</template>

<script>
export default {
    name : "image_uploader.vue",
    data() {
        return {
            header : {
                'Authorization' : localStorage.getItem("token")
            },
            fileName : "",
            uploadUrl : "",
            fileList : [],
            tempUrl : ""
        }
    },
    methods : {
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handleSuccess(response, file, fileList) {
            this.fileName = file.name
            this.tempUrl = file.url
        },
        getFileName() {
            return this.fileName
        },
        getTempUrl() {
            return this.tempUrl
        }
    },
    created() {
        this.uploadUrl = this.$baseURL + "/root/uploadImg"
    }
}
</script>

<style>

</style>