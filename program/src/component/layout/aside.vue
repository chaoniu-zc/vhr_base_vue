<template>
    <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#042249"
        text-color=" #fff"
    >
        <!-- 员工资料 -->
        <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>员工资料</span>
            </template>
            <el-menu-item-group>
                <router-link to="/baseinfo">
                    <el-menu-item index="1-1">基本资料</el-menu-item>
                </router-link>
            </el-menu-item-group>
        </el-submenu>
        <!-- 人事管理 -->
        <el-submenu index="2">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>人事管理</span>
            </template>
            <el-menu-item-group>
                <router-link to="/kaoqin">
                    <el-menu-item index="2-1">考勤管理</el-menu-item>
                </router-link>
                <router-link to="/peixun">
                    <el-menu-item index="2-2">培训管理</el-menu-item>
                </router-link>
                <router-link to="/diao">
                    <el-menu-item index="2-3">调动管理</el-menu-item>
                </router-link>
                <router-link to="/jiang">
                    <el-menu-item index="2-4">奖惩管理</el-menu-item>
                </router-link>
                <router-link to="/tiaoxin">
                    <el-menu-item index="2-5">调薪管理</el-menu-item>
                </router-link>
            </el-menu-item-group>
        </el-submenu>
        <!-- 统计管理 -->
        <el-submenu index="3">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>统计管理</span>
            </template>
            <el-menu-item-group>
                <router-link to="look">
                    <el-menu-item index="3-1">信息综合查询</el-menu-item>
                </router-link>
            </el-menu-item-group>
        </el-submenu>
        <!-- 工资管理 -->
        <el-submenu index="4">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>工资管理</span>
            </template>
            <el-menu-item-group>
                <router-link to="/company">
                    <el-menu-item index="4-1">公司账套</el-menu-item>
                </router-link>
                <router-link to="/persion">
                    <el-menu-item index="4-2">个人账套</el-menu-item>
                </router-link>
            </el-menu-item-group>
        </el-submenu>
        <!-- 系统管理 -->
        <el-submenu index="5">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>系统管理</span>
            </template>
            <el-menu-item-group>
                <router-link to="/admin">
                    <el-menu-item index="5-1">操作员管理</el-menu-item>
                </router-link>
                <router-link to="/unit">
                    <el-menu-item index="5-2">部门职位管理</el-menu-item>
                </router-link>
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
</template>
<script>
export default {
    name: "Aside"
};
</script>
<style scoped>
.el-menu {
    width: 100%;
    height: 100%;
}
</style>