<template>
    <div class="card">
        <div class="show" v-for="(item,index) in admindata" :key="index">
            <img
                src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                class="image"
            />
            <div class="son">
                <p>
                    <strong>姓名 :</strong>
                    {{item['elemname']}}
                </p>
                <p>
                    <strong>工号 :</strong>
                    {{item['elemid']}}
                </p>
                <p>
                    <strong>部门 :</strong>
                    {{item['unitname']}}
                </p>
                <p>
                    <strong style="margin-right:80px">启用 :</strong>
                    <el-switch
                        v-model="item['status']"
                        active-color="#13ce66"
                        inactive-color="#ff4949"
                        @change="changstatus(item['status'],item['elemid'])"
                    ></el-switch>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Admin",
    data() {
        return {
            value: true,
            admindata: []
        };
    },
    watch: {
        data: {
            handler() {},
            deep: true
        }
    },
    methods: {
        changstatus(value,id) {
            console.log(value,'你的值是')
            this.$axios({
                method:'post',
                url:'/api/chadmin',
                data:{
                    status:value,
                    elemid:id
                }
            })
        }
    },
    mounted() {
        console.log('niza')
        this.$axios
            .get("/api/adminer")
            .then(response => {
                response.data.forEach(item => {
                    item["status"] = Boolean(item["status"]);
                });
                this.admindata = response.data;
            })
            .catch(error => {
                console.log(error);
            });
    }
};
</script>
<style scoped>
.card {
    overflow: auto;
    height: 100%;
    text-align: left;
    display: flex;
    justify-content: space-between;
}
.show {
    height: 250px;
    width: 200px;
    background-color: #ffffff;
    text-align: center;
    display: inline-block;
    border-radius: 10px;
    margin: 10px;
    vertical-align: bottom;
}
.son {
    height: 150px;
    padding-left: 10px;
    line-height: 0;
    text-align: left;
}
p {
    line-height: 12px;
}
.show:hover {
    box-shadow: 1px 1px 11px #4e6f8f;
}
img {
    width: 100px;
    height: 100px;
    border-radius: 50px;
}
</style>