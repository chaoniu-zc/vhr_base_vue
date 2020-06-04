<template>
    <div>
        <!-- 查询 -->
        <Setlook :url="url" :who="who" :colums="colums"></Setlook>
        <!-- 列表 -->
        <el-table :data="tableData" @select="Select" @select-all=" Select" @row-click="Getrow">
            <el-table-column v-for="(item,index) in colums" :key="index" v-bind="{...item}"></el-table-column>
            <el-table-column label="账套部门" width="150" fixed="right" align="center">
                <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top" open-delay="800">
                        <p
                            v-for="(value,key,index) in proverinfo(scope.row.accountid)"
                            :key="index"
                        ><strong> {{key}}:</strong>{{value}}</p>
                        <div slot="reference" class="name-wrapper">
                            <el-tag size="medium">{{ scope.row.accountbelong }}</el-tag>
                        </div>
                    </el-popover>
                </template>
            </el-table-column>
            <el-table-column label="操作" width="150" fixed="right" align="center">
                <el-button @click="ShowDlig(true)" type="danger" size="mini">修改账套</el-button>
            </el-table-column>
        </el-table>
        <!--编辑提交 -->
        <el-dialog title="编辑" :visible.sync="showDlig" @close="Offdlig(false)">
            <el-select v-model="value" placeholder="请选择">
                <el-option
                    v-for="item in accountlist"
                    :key="item.value+'a'"
                    :label="item.label"
                    :value="item.value"
                ></el-option>
            </el-select>
            <div slot="footer" class="dialog-footer">
                <el-button @click="Offdlig(false)">取 消</el-button>
                <el-button type="primary" @click="changesubmit">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import Setlook from "./lookpersion";
import { persionacc,companyacc } from "../../enums/baseinfo";
import Takecolums from "../../utils/takecolums";
export default {
    name: "Persion",
    components: {
        Setlook
        // Edit
    },
    data() {
        return {
            url: "/persion",
            who: "persiondata",
            deletedata: [], //待删除数据
            value: "",
            options: []
        };
    },
    computed: {
        // 模态框关闭显示属性
        showDlig: {
            get: function() {
                return this.$store.state.showDlig;
            },
            set: function() {}
        },
        // 个人账套列表数据
        tableData() {
            return this.$store.state.persiondata;
        },
        // 个人账套列表格式
        colums() {
            return [
                { type: "selection", label: "多选" },
                ...Takecolums(persionacc)
            ];
        },
        // 获取公司账套信息
        accountlist: function() {
             this.$store.state.companydata.forEach((item, index) => {
                this.$set(this.options, index, {
                    value: item["accountid"],
                    label: item["accountname"] + "账套"
                });
            });
            return this.options
        }
    },
    watch: {
        //监听公司账套值是否发生变化
        accountlist: function() {
            this.$store.state.companydata.forEach((item, index) => {
                this.$set(this.options, index, {
                    value: item["accountid"],
                    label: item["accountname"] + "账套"
                });
            });
        },
    },
    methods: {
        //模态框关闭
        Offdlig(show) {
            this.$store.commit("Showdlig", show);
        },
        // 获取弹出框账套信息
        proverinfo: function(id) {
            let arr = [];
            let obj={}
            arr = this.$store.state.companydata.filter(item => {
                return item["accountid"] == id;
            });
            for (const key in arr[0]) {
                obj[companyacc[key]]=arr[0][key]
            }
             return  obj;
        },
        // 提交修改
        changesubmit() {
            this.$store.dispatch({
                type: "Suredeltet", //actio类
                who: this.who, //mutations类
                http: {
                    method: "post",
                    url: this.url,
                    data: {
                        data: { accountid: this.value },
                        type: "edit"
                    }
                }
            });
            this.Offdlig(false);
        },
        // 点击复选按钮获取待删除数据
        Select(selection) {
            this.deletedata = selection.map(item => {
                return item["jobid"] ? item["jobid"] : item["accountid"];
            });
            this.$store.commit("Deletedata", this.deletedata);
        },

        //展示编辑模态框
        ShowDlig(boolean) {
            this.$store.commit("Showdlig", boolean);
        },
        //获取编辑的数据
        Getrow(row, colums) {
            colums.label == "操作"
                ? this.$store.commit({
                      type: "Editdata",
                      data: row
                  })
                : "";
        }
    },
    mounted() {
        // 首次获取列表的值
        this.$store.dispatch({
            type: "Suredeltet", //actio类
            who: this.who, //mutations类
            http: {
                method: "get",
                url: this.url
            }
        });
        // 判断公司账套是否存在
        if (!this.$store.state.companydata) {
            console.log(123)
            this.$store.dispatch({
                type: "Suredeltet", //actio类
                who: "companydata", //mutations类
                http: {
                    method: "get",
                    url: "/company"
                }
            });
        }
    }
};
</script>
<style scoped>
.el-popover{
    background: rgb(137, 196, 159);
}
.el-table{
    overflow: scroll;
}
</style>