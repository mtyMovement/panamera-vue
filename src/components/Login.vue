<template>
  <el-card>
    <body id="poster">
      
      <el-form class="login-container" ref="form" :model="form" label-width="80px">
        
        <el-row>
            <div class="grid-content bg-purple-light">
              <h3 class="login_title">系统登录</h3>

              <el-form-item label="用户名:">
                <el-input v-model="loginForm.userName" placeholder="请输入用户名"></el-input>
              </el-form-item>

              <el-form-item label="密码:">
                <el-input type="password" v-model="loginForm.password" placeholder="请输入密码"></el-input>
              </el-form-item>
              <el-button type="primary" plain @click="login">登录</el-button>
      
              <el-button type="primary" plain @click="cancleTest">取消</el-button>
            </div>
        </el-row>
        
      </el-form>

    </body>
  </el-card>
</template>

<script>

  export default {
    name: 'Login',
    data () {
      return {
        loginForm: {
          userName: '',
          password: ''
        },
        responseResult: []
      }
    },
    methods: {
      //登录按钮
      login () {
        this.$axios
          .post('/login', {
            userName: this.loginForm.userName,
            password: this.loginForm.password
          })
          .then(successResponse => {
            if (successResponse.data.code === "200") {
              console.info("didi");
              this.$router.replace({path: '/index'})
            }
          })
          .catch(failResponse => {
          })
      },

      //取消按钮
      cancleTest () {
        this.$axios
          .get('/cancelTest')
          .then(successResponse => {
            if (successResponse.data.code === "200") {
              console.info("cancel");
              this.$router.replace({path: '/helloWord'})
            }
          })
          .catch(failResponse => {
          })
      }
    }
    
  }
</script>

<style>
  .login-container {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 150px auto;
    width: 350px;
    height: 300px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }
  
  .login_title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }

  #poster {
    background:url("../assets/bg2.jpg") no-repeat;
    background-position: center;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;
  }

  body{
    margin: 0px;
  }

</style>