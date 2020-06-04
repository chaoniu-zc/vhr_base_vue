// 查询页面
<template>
    <div>
        <el-form :inline="true" :model="formInline" class="demo-form-inline" size="mini">
            <el-form-item label="账套编号">
                <el-input v-model="formInline.accountid"></el-input>
            </el-form-item>
            <el-form-item label="账套名称">
                <el-input v-model="formInline.accountname"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="query">查询</el-button>
                <el-button type="primary" @click="off">取消查询</el-button>
            </el-form-item>
        </el-form>
        <div class="daochu">
            <el-button type="danger" size="mini" class="daochu" @click="delselete">删除</el-button>
            <el-button type="success" size="small " @click="output">导出数据</el-button>
        </div>
    </div>
</template>
<script>
import output from "../../utils/excle";
import { sheetname } from "../../enums/baseinfo";
export default {
    name: "Setlook",
    props: ["url", "who", "colums"],
    data() {
        return {
            formInline: {
                accountid: "",
                accountname: "",
            }
        };
    },
    computed: {
        Deletedata: {
            get() {
                return this.$store.state.deleteData;
            },
            set() {}
        }
    },
    methods: {
        // 删除
        delselete: async function() {
            this.$store.dispatch({
                type: "Suredeltet", //actio类
                who: this.who, //mutations类
                http: {
                    method: "get",
                    url: this.url,
                    data: {
                        data: this.$store.state.deleteData,
                        type: "delete"
                    }
                }
            });
            this.$store.commit("Deletedata", []);
        },
        // 查询
        query() {
            let queryobj = {};
            for (const key in this.formInline) {
                if (this.formInline[key]) {
                    queryobj[key] = this.formInline[key];
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
        },
        // 取消查询
        off() {
            this.$store.dispatch({
                type: "Suredeltet", //actio类
                who: this.who, //mutations类
                http: {
                    method: "get",
                    url: this.url
                }
            });
        },
        // 数据导出
        output() {
            let name = sheetname[this.who];
            let arr = this.colums.map((item, index) => {
                return item.label;
            });
            output(name, arr, this.$store.state[this.who]);
        }
    }
};
</script>
<style scoped>
.demo-form-inline {
    line-height: 0px;
    text-align: left;
}
.daochu {
    display: flex;
    justify-content: space-between;
    line-height: 20px;
    padding: 10px;
}
.daochu .el-button {
    padding: 5px;
}
</style>