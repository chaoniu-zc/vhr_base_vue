<template>
    <div class="query">
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#038da5"
            text-color=" #f7f4f4"
            active-text-color=" #e5e912"
        >
            <el-menu-item index="1">基本信息查询</el-menu-item>
            <el-menu-item index="2">调薪查询</el-menu-item>
            <el-menu-item index="3">调动查询</el-menu-item>
            <el-menu-item index="4">奖惩查询</el-menu-item>
            <el-menu-item index="5">培训查询</el-menu-item>
            <el-menu-item index="6">考勤查询</el-menu-item>
            <el-button type="primary" size="small" @click="ShowDlig(true)">多功能查询</el-button>
            <el-button type="primary" size="small" @click="off">退出查询</el-button>
            <el-button type="success" size="small " @click="output">导出数据</el-button>
        </el-menu>
        <el-table :data="tableData">
            <el-table-column v-for="(item,index) in colums" :key="index" v-bind="{...item}"></el-table-column>
        </el-table>
        <Queryedit :url='url' :who='who'></Queryedit>
    </div>
</template>
<script>
import Infolist from "../public/infolist";
import Queryedit from "../public/queryedit";
import {
    baseinfo,
    peixun,
    jiangcheng,
    kaoqin,
    tiaoxing,
    diaodog
} from "../../enums/baseinfo";
import { publick, base, pei, kao, jiang, tiao, diao } from "../../enums/query";
import Takecolums from "../../utils/takecolums";
import output from "../../utils/excle";
import { sheetname } from "../../enums/baseinfo";
export default {
    name: "Look",
    components: {
        Queryedit
    },
    data() {
        return {
            url: "/elembase",
            who: "basedata",
            activeIndex: "1",
            colum: baseinfo
        };
    },
    computed: {
        tableData() {
            return this.$store.state[this.who];
        },
        colums() {
            return [...Takecolums(this.colum)];
        }
    },
    methods: {
        // 获取列表数据
        getdata() {
            this.$store.dispatch({
                type: "Suredeltet", //actio类
                who: this.who, //mutations类
                http: {
                    method: "get",
                    url: this.url
                }
            });
        },
        handleSelect(key, keyPath) {
            switch (key) {
                case "1":
                    this.url = "/elembase";
                    this.who = "basedata";
                    this.colum = baseinfo;
                    this.getdata();
                    this.$store.dispatch("Setquery", [...publick, ...base]);
                    break;
                case "2":
                    this.url = "/elemtiao";
                    this.who = "tiaodata";
                    this.colum = tiaoxing;
                    this.getdata();
                    this.$store.dispatch("Setquery", [...publick, ...tiao]);
                    break;
                case "3":
                    this.url = "/elemdiao";
                    this.who = "diaodata";
                    this.colum = diaodog;
                    this.getdata();
                    this.$store.dispatch("Setquery", [...publick, ...diao]);
                    break;
                case "4":
                    this.url = "/elemjiang";
                    this.who = "jiangdata";
                    this.colum = jiangcheng;
                    this.getdata();
                    this.$store.dispatch("Setquery", [...publick, ...jiang]);
                    break;
                case "5":
                    this.url = "/elempei";
                    this.who = "peidata";
                    this.colum = peixun;
                    this.getdata();
                    this.$store.dispatch("Setquery", [...publick, ...pei]);
                    break;
                case "6":
                    this.url = "/elemkao";
                    this.who = "kaodata";
                    this.colum = kaoqin;
                    this.getdata();
                    this.$store.dispatch("Setquery", [...publick, ...kao]);
                    break;
                default:
                    console.log("无匹配信息");
            }
        },
        // 数据导出
        output() {
            let name = sheetname[this.who];
            let arr = [...Takecolums(this.colum)].map((item, index) => {
                return item.label;
            });
            output(name, arr, this.$store.state[this.who]);
        },
        // 多功能查询
        ShowDlig(boolean) {
            this.$store.commit("Showdlig", boolean);
        },
        // 退出查询
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
    },
    beforeMount() {},
    mounted() {
        this.$store.dispatch("Setquery", [...publick, ...base]);
        this.getdata();
    }
};
</script>
<style>
.el-menu {
    background: #f7f4f4;
}
.query {
    border: 1px #038da5 solid;
}
</style>