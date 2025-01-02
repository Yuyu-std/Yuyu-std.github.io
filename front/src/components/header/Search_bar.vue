<!-- 
    搜索框组件
  -->
<template>
    <div class="search-bar">
        <el-input v-model="input" @keyup.enter.native="toSearch"
            placeholder="请输入要搜索的内容, 宁可少字也不要错字~~" class="search-input"></el-input>
        <el-button plain class="search-but" @click="toSearch">
            <i class="el-icon-search"></i>搜索
        </el-button>
    </div>
</template>

<script>
export default {
    name : "Search_bar.vue",
    data() {
        return {
            input : ""
        }
    },
    methods : {
        toSearch() {
            
        }
    }
}
</script>

<style scope>
.search-bar {
    margin-left: 32px;
    width: 50%;
    max-width: 650px;
    float: left;
}
.search-input {
    width: 80%;
}

.search-but i{
    margin-right: 5px;
}
</style>