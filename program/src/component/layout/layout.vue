<template>
    <el-container>
        <el-aside width="200px">
            <Aside />
        </el-aside>
        <el-container>
            <el-header>基于Vue的人事管理系统</el-header>
            <el-main>
                <router-view class="main"></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
import Aside from "./aside";
export default {
    name: "Layout",
    components: {
        Aside
    }
};
</script>
<style  scoped>
.el-container {
    height: 100%;
}
.el-header {
    background-color: #042249;
    color: rgb(7, 169, 180);
    text-align: left;
    line-height: 60px;
}

.el-aside {
    background-color: #042249;
    color: #333;
    text-align: center;
    line-height: 200px;
}

.el-main {
    height: 100%;
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 60px;
    overflow: auto;
}
</style>
