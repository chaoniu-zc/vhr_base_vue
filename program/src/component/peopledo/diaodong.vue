<template>
    <div>
        <!-- 查询 -->
        <Setlook :url="url" :who="who" :colums="colums"></Setlook>
        <!-- 列表 -->
        <Infolist :tableData="tableData" :colums="colums"></Infolist>
        <!-- 编辑 -->
        <Edit :url="url" :who="who"></Edit>
    </div>
</template>
<script>
import Infolist from "../public/infolist";
import Setlook from "../public/setlook";
import Edit from "../public/edit";
import { diaodog } from "../../enums/baseinfo";
import Takecolums from "../../utils/takecolums";
export default {
    name: "Diao",
    components: {
        Infolist,
        Setlook,
        Edit
    },
    data() {
        return {
            url: "/elemdiao",
            who: "diaodata",
            formInline: {
                user: "",
                unit: "",
                job: ""
            }
        };
    },
    computed: {
        tableData() {
            return this.$store.state.diaodata;
        },
        colums: {
            get() {
                return [{ type: "selection", label: "多选" },...Takecolums(diaodog)];
            },
            set() {}
        }
    },
    mounted() {
        // 获取调动列表数据
        this.$store.dispatch({
            type: "Suredeltet", //actio类
            who: this.who, //mutations类
            http: {
                method: "get",
                url: this.url
            }
        });
        //    设置表头格式
        this.colums = [
            { type: "selection", label: "多选" },
            ...Takecolums(diaodog)
        ];
    }
};
</script>
<style>
</style>