<template>
    <div>
        <el-dialog title="编辑" :visible.sync="showDlig" @close="Offdlig(false)" width="80%">
            <el-form :inline="true">
                <el-form-item
                    v-for="(val,key,index) in editData "
                    :key="index"
                    :label="editlable[key]"
                    :rules="editrules[index]"
                >
                    <!-- 输入框 -->
                    <el-input
                        v-if="key!='unitname' && key!='jobname'&&key!='birthday'&&key!='intojob'"
                        v-model="editdata[key]"
                        value="editData[key]"
                    ></el-input>
                    <!-- 部门选择器 -->
                    <el-select v-if="key=='unitname'" v-model="editdata[key]" placeholder="请选择">
                        <el-option
                            v-for="item in unitinfo"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        ></el-option>
                    </el-select>
                    <!-- 职位选择器 -->
                    <el-select v-if="key=='jobname'" v-model="editdata[key]" placeholder>
                        <el-option
                            v-for="item in jobinfo"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        ></el-option>
                    </el-select>
                    <!-- 出生选择器 -->
                    <el-date-picker
                        v-model="editdata[key]"
                        v-if="key=='birthday'"
                        align="right"
                        type="date"
                        placeholder="选择日期"
                    ></el-date-picker>
                    <!-- 就职日期选择器 -->
                    <el-date-picker
                        v-model="editdata[key]"
                        v-if="key=='intojob'"
                        align="right"
                        type="date"
                        placeholder="选择日期"
                    ></el-date-picker>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="Offdlig(false)">取 消</el-button>
                <el-button type="primary" @click="changesubmit">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import { baseinfo } from "../../../enums/baseinfo";
import { isArray } from "util";
export default {
    name: "Edit",
    props: ["url", "who"],
    data() {
        return {
            editdata: {},
            editlable: baseinfo,
            editrules: [],
            html: `<p>哈哈</p>`
        };
    },
    computed: {
        // 模态框关闭计算属性
        showDlig: {
            get: function() {
                return this.$store.state.showDlig;
            },
            set: function() {}
        },
        // 渲染编辑数据
        editData() {
            this.$set(this.$data, "editdata", {
                ...this.$store.state.editData
            });
            return { ...this.$store.state.editData };
        },
        // 部门选择
        unitinfo() {
            let obj = { value: "", label: "" };
            let arr = [];
            if (isArray(this.$store.state.unitinfo)) {
                arr = this.$store.state.unitinfo.map(item => {
                    return { value: item["unitid"], label: item["unitname"] };
                });
            }
            console.log(arr, "的身份");
            return arr;
        },
        // 职位选择
        jobinfo() {
            let obj = { value: "", label: "" };
            let arr = [];
            if (isArray(this.$store.state.jobinfo)) {
                arr = this.$store.state.jobinfo.map(item => {
                    return { value: item["jobid"], label: item["jobname"] };
                });
            }
            console.log(arr, "的身份");
            return arr;
        }
    },
    methods: {
        //模态框关闭
        Offdlig(show) {
            this.$store.commit("Showdlig", show);
        },
        // 提交修改
        changesubmit() {
            // 检索出改变的值有哪些
            let obj={}
            for (let key in this.editdata) {
                if ((this.editdata[key]!=this.editData[key])||key=='unitid') {
                    obj[key]=this.editdata[key]
                }
            }
            console.log(obj)
            this.$store.dispatch({
                type: "Suredeltet", //actio类
                who: this.who, //mutations类
                http: {
                    method: "post",
                    url: this.url,
                    data: {
                        data: this.editdata,
                        type: "edit"
                    }
                }
            });
            this.Offdlig(false);
        },
        
    },
    mounted() {
        // 设置编辑规则
        this.editrules = [
            { required: true, message: "不能为空" },
            { required: true, message: "不能为空" },
            { required: true, message: "不能为空" },
            { required: true, message: "不能为空" },
            { required: true, message: "不能为空" },
            { required: true, message: "不能为空" },
            { required: true, message: "不能为空" },
            { required: true, message: "不能为空" },
            { required: true, message: "不能为空" },
            { required: true, message: "不能为空" },
            { required: true, message: "不能为空" },
            { required: true, message: "不能为空" },
            { required: true, message: "不能为空" },
            { required: true, message: "不能为空" },
            { required: true, message: "不能为空" }
        ]
        // 获取部门信息
        this.$store.dispatch({
            type: "Suredeltet", //actio类
            who: "unitinfo", //mutations类
            http: {
                method: "get",
                url: "/api/unit"
            }
        });
        // 获取职位信息
        this.$store.dispatch({
            type: "Suredeltet", //actio类
            who: "jobinfo", //mutations类
            http: {
                method: "get",
                url: "/api/job"
            }
        });
    }
};
</script>
<style scoped>
</style>