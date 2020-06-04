<template>
    <div class="login">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px">
            <el-form-item label="用户名" prop="user">
                <el-input v-model="ruleForm.user" clearable size="medium"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop='pass'>
                <el-input v-model="ruleForm.pass" show-password clearable size="medium"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" size="small" @click="submit('ruleForm')">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    name: "Sign",
    data() {
        return {
            ruleForm: {
                user: '',
                pass: ''
            },
            rules: {
                user: [
                    {
                        required: true,
                        message: "用户名不能为空",
                        trigger: "blur"
                    }
                ],
                pass:[
                    {
                        required: true,
                        message: "密码不能为空",
                        trigger: "blur"
                    }
                ]
            }
        };
    },
    methods: {
      submit(formName){
          this.$refs[formName].validate((valid) => {
          if (valid) {
           this.$store.dispatch({
                    type: "Suredeltet", //actio类
                    // who: this.who, //mutations类
                    http: {
                        method: "post",
                        url: '/api/signup',
                        data: {
                            username: this.ruleForm.user,
                            password: this.ruleForm.pass
                        }
                    }
                });
            console.log('sda')
            this.$router.push({
                path:'home'
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }  
    },
    mounted () {
       
    }
};
</script>
<style scoped>
.login {
    width: 300px;
    height: 200px;
    position: absolute;
    left: 50%;
    bottom: 50%;
    margin-left: -150px;
    margin-bottom: -100px;
    padding: 20px;
    border: 1px #ffffff solid;
    border-radius: 5px;
    box-shadow: 1px 1px 11px #123456;
}
</style>