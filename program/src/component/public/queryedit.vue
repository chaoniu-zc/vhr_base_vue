// 查询编辑
<template>
    <div>
        <el-dialog title="编辑" :visible.sync="showDlig" @close="Offdlig(false)">
            <el-form :inline="true">
                <el-form-item v-for="(item,index) in querylabel" :label="item.label" :key="index">
                    <el-input v-model="queryresult[item.value]"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="Offdlig(false)" type="primary">取 消</el-button>
                <el-button type="primary" @click="changesubmit">查询</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import { publick } from "../../enums/query";
export default {
    name: "Queryedit",
    props: ["url", "who"],
    data() {
        return {
            queryresult: {}
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
        querylabel() {
            return this.$store.state.setquerydata;
        }
    },
    watch: {
        querylabel: function() {
            this.queryresult = {};
            this.$store.state.setquerydata.map((item, index) => {
                this.$set(this.queryresult, item.value, "");
            });
        },
        // 深度监听数据的变化
        queryresult:{
            handler(){},
            depp:true
        }
    },
    methods: {
        //模态框关闭
        Offdlig(show) {
            this.$store.commit("Showdlig", show);
        },
        // 多功能查询
        changesubmit() {
            let queryobj = {};
            for (const key in this.queryresult) {
                if (this.queryresult[key]) {
                    queryobj[key] = this.queryresult[key];
                }
            }
            this.$store.dispatch({
                type: "Suredeltet", //actio类
                who: this.who, //mutations类
                http: {
                    method: "get",
                    url: this.url,
                    data: {
                        data: queryobj,
                        type: "query"
                    }
                }
            });
            this.Offdlig(false);
        }
    },
    mounted() {
        console.log(this.queryresult);
    }
};
</script>
<style scoped>
</style>