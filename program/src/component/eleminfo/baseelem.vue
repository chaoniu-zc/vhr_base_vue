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
// import Infolist from "./table/infolist";
import Infolist from "../public/infolist";
import Setlook from "../public/setlook";
// import Edit from "./table/edit";
import Edit from "../public/edit";
import { baseinfo } from "../../enums/baseinfo";
import Takecolums from "../../utils/takecolums";
export default {
    name: "Baseinfo",
    components: {
        Infolist,
        Setlook,
        Edit
    },
    data() {
        return {
            url: "/elembase",
            who: "basedata",
            formInline: {
                user: "",
                unit: "",
                job: ""
            }
        };
    },
    computed: {
        tableData() {
            return this.$store.state.basedata;
        },
        colums() {
            return [
                { type: "selection", label: "多选" },
                ...Takecolums(baseinfo)
            ];
        },
        
    },
    mounted() {
        this.$store.dispatch({
            type: "Suredeltet", //actio类
            who:this.who, //mutations类
            http: {
                method: "get",
                // url: '/api/elembaseinfo'
                url: '/elembase'
            }
        });
       
    }
};
</script>
<style scoped>
</style>