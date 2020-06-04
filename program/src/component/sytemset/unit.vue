<template>
    <div>
        <el-table :data="tableData" border style="width: 100%" @cell-click="get">
            <el-table-column fixed prop="unitid" label="部门编号" align="center"></el-table-column>
            <el-table-column prop="unitname" label="部门名称"></el-table-column>
            <el-table-column prop="unitlader" label="部门领导"></el-table-column>
            <el-table-column label="查看所属职位" width="150" align="center">
                <el-button @click="out">查看职位</el-button>
            </el-table-column>
        </el-table>
        <div class="output" ref="output" v-show="show" fit="true">
            <el-table :data="jobtable" size="small" max-height="200px">
                <el-table-column fixed prop="jobname" label="部门职位列表" align="center" width="150px"></el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
export default {
    name: "Unit",
    data() {
        return {
            tableData: [],
            show: false,
            url: "/api/unitjob",
            who: "unitjob"
        };
    },
    computed: {
        jobtable() {
            return this.$store.state.unitjob;
        }
    },

    methods: {
        // 弹出表格框
        out(target) {
            this.show = !this.show;
            var element = this.$refs.output;
            element.style.right = `${document.body.clientWidth -
                target.clientX +
                target.offsetX}px`;
            if (
                target.clientY - target.offsetY + 200 >
                document.body.clientHeight
            ) {
                element.style.top = document.body.clientHeight - 220 + "px";
            } else {
                element.style.top = `${target.clientY - target.offsetY}px`;
            }
        },
        //获取表格数据
        get(row, column, cell, event) {
            console.log("1234567");
            if (column.label == "查看所属职位") {
                this.$store.dispatch({
                    type: "Suredeltet", //actio类
                    who: this.who, //mutations类
                    http: {
                        method: "post",
                        url: this.url,
                        data: {
                            unitid: row["unitid"]
                        }
                    }
                });
            }
        }
    },
    mounted() {
        this.$axios
            .get("/api/unit")
            .then(res => {
                this.tableData = res.data;
            })
            .catch(err => {
                console.log(err);
            });
    }
};
</script>
<style scoped>
.output {
    padding: 10px;
    position: fixed;
    height: 200px;
    background: rgba(23, 69, 90, 0.6);
    border-radius: 5px;
    z-index: 999;
    overflow: auto;
}
</style>