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
import Setlook from "./lookcompany";
import Edit from "../public/edit";
import { companyacc } from "../../enums/baseinfo";
import Takecolums from "../../utils/takecolums";
export default {
    name: "Company",
    components: {
        Infolist,
        Setlook,
        Edit
    },
    data() {
        return {
            url: "/company",
            who: "companydata",
            formInline: {
                user: "",
                unit: "",
                job: ""
            }
        };
    },
    computed: {
        tableData() {
            return this.$store.state.companydata;
        },
        colums() {
            return [
                { type: "selection", label: "多选" },
                ...Takecolums(companyacc)
            ];
        }
    },
    mounted() {
        this.$store.dispatch({
            type: "Suredeltet", //actio类
            who: this.who, //mutations类
            http: {
                method: "get",
                url: this.url
            }
        });
    }
};
</script>
<style scoped>
</style>