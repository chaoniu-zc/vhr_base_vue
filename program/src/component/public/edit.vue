// 编辑页面
<template>
    <div>
        <el-dialog title="编辑" :visible.sync="showDlig" @close="Offdlig(false)">
            <el-form :inline="true">
                <el-form-item
                    v-for="(val,key,index) in editData "
                    :key="index"
                    :label="editlable[key]"
                    :rules="editrules[index]"
                >
                    <el-input v-model="editData[key]" value="editData[key]"></el-input>
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
import { baseinfo } from "../../enums/baseinfo";
export default {
    name: "Edit",
    props: ['url','who'],
    data() {
        return {
            editdata: {},
            editlable: baseinfo,
            editrules: []
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
        editData(){
                this.$set(this.$data,'editdata',{...this.$store.state.editData})
                return this.editdata
        }
    },
    methods: {
        //模态框关闭
        Offdlig(show) {
            this.$store.commit("Showdlig", show);
        },
        // 提交修改
        changesubmit(){
            console.log(this.url,this.who)
            this.$store.dispatch({
                type: "Suredeltet", //actio类
                who: this.who, //mutations类
                http: {
                    method: "post",
                    url: this.url,
                    data: 
                    {
                        data:this.editdata,
                        type:'edit'
                    }
                }
            });
            this.Offdlig(false);
        }
    },
    mounted() {
        this.editrules = [
            { required: true, message: "年龄不能为空" },
            { required: true, message: "年龄不能为空" },
            { required: true, message: "年龄不能为空" },
            { required: true, message: "年龄不能为空" },
            { required: true, message: "年龄不能为空" },
            // { type: "number", message: "年龄必须为数字值" }
        ];
    }
};
</script>
<style scoped>
</style>