// 列表页面
<template>
    <el-table 
    :data="tableData" 
    @select="Select"
    @select-all=" Select"
    @row-click="Getrow"
    max-height="500"
    >
        <el-table-column  v-for="(item,index) in colums" :key="index" v-bind="{...item}"></el-table-column>
        <el-table-column label="操作" width="150" fixed="right" align='center'>
            <el-button @click="ShowDlig(true)" type="primary" size="mini">编辑</el-button>
        </el-table-column>
    </el-table>
</template>
<script>
export default {
    name: "IfoList",
    props: ["tableData", "colums"],
    data() {
        return{
            deletedata:[]//待删除数据
        };
    },
    methods: {
        // 点击复选按钮获取待删除数据
        Select(selection){
           this.deletedata=selection.map(item=>{
               return item['jobid']?item['jobid']:item['accountid']
           })
           this.$store.commit('Deletedata',this.deletedata)
        },
        // store的commit的两种用法
        //展示编辑模态框
        ShowDlig (boolean){
            this.$store.commit("Showdlig",boolean)
        },
        //获取编辑的数据
        Getrow(row,colums){
            colums.label=='操作'?this.$store.commit({
                type:"Editdata",
                data:row
            }):''; 
        }
    },
};
</script>
<style scoped>
.el-table {
    line-height: 50px;
}
</style>