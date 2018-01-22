<template>
  <div class="form-wraper" :style="Kurumi">
    <div class="login-form">
      <div class="form-head">
        登陆
      </div>
      <el-form :label-position="'top'" :model="form" ref="form" label-width="80px">
        <el-form-item label="用户名" prop="name">
          <el-input v-model="form.name" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button class="sign-button" type="primary" @click="signIn('form')">登陆</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Kurumi: {background: `url(${require('^/Kurumi.jpg')}) no-repeat`, backgroundSize: 'cover'},
      form: {
        name: '',
        password: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入用密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    signIn(form) {
      // do something
    }
  }
}
</script>

<style lang="less" scoped>
.form-wraper{
  width: 100%;
  height: 100%;
}
.form-head{
  padding: 10px;
  margin-bottom: 18px;
  font-size: 16px;
  color: #606266;
  border-bottom: 1px solid #ddd;
}
.login-form {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  max-width: 300px;
  border-radius: 10px;
  transform: translateX(-50%) translateY(-50%);
  box-shadow: 0 0 100px rgba(0,0,0,.08);
  padding: 20px;
  background: rgba(255, 255, 255, .1);
  
}
.sign-button{
  margin-top: 18px;
  width: 100%;
}
</style>
<style>
  .el-form--label-top .el-form-item__label{
    padding-bottom: 0;
  }
</style>

