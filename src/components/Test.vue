<template>
  <el-card>
    <body id="posterTest">
      
      <el-form class="login-container" ref="form" :model="form" label-width="80px">
        <el-row>
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <div>
                
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple-light">
              <h3 class="login_title">拦截测试</h3>
      
              <el-button type="primary" plain @click="intercepterTest">取消</el-button>
            </div>
          </el-col>
        </el-row>
        

      </el-form>
    </body>
  </el-card>
</template>

<script>

  export default {
    name: 'Test',
    methods: {
      //取消按钮
      intercepterTest () {
        this.$axios
          .get('/cancelTest')
          .then(successResponse => {
            if (successResponse.data.code === "200") {
              console.info("cancel");
              this.$router.replace({path: '/login'})
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
    width: 650px;
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

  #posterTest {
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