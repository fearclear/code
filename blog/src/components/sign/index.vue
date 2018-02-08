<template>
  <div class="form-wraper" :style="Kurumi">
    <div class="login-form">
      <div class="form-head">
        <el-tabs v-model="tabIndex" @tab-click="changeTabIndex" >
          <el-tab-pane label="登陆" name="signIn">
            <el-form :label-position="'top'" :model="form" ref="form" label-width="80px">
              <el-form-item label="用户名" prop="userName">
                <el-input v-model="form.userName" placeholder="请输入用户名"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input v-model="form.password" type="password" @keyup.enter.native="signIn(form)" placeholder="请输入密码"></el-input>
              </el-form-item>
              <el-form-item>
                  <el-button class="sign-button" type="primary" @click="signIn(form)">登陆</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="注册" name="signUp">
            <el-form :label-position="'top'" :model="form" status-icon :rules="rules" ref="formSignUp" label-width="80px">
              <el-form-item label="邮箱" prop="email">
                <el-input v-model="form.email" placeholder="请输入邮箱地址"></el-input>
              </el-form-item>
              <el-form-item label="用户名" prop="userName">
                <el-input v-model="form.userName" placeholder="请输入用户名"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input v-model="form.password" type="password" placeholder="请输入密码"></el-input>
              </el-form-item>
              <el-form-item label="确认密码" prop="passwordConfirm">
                <el-input v-model="form.passwordConfirm" type="password" @keyup.enter.native="signUpRule(form)" placeholder="再次输入密码"></el-input>
              </el-form-item>
              <el-form-item>
                  <el-button class="sign-button" type="primary" @click="signUpRule(form)">注册</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    let checkPassword = (rule, value, callback) => {
      if(value === '') {
        callback(new Error('请输入密码'))
      }else if(value.length < 6) {
        callback(new Error('密码长度过短'))
      }else if(value.length > 16) {
        callback(new Error('密码长度过长'))
      }else if(!/(?!.*[\u4E00-\u9FA5\s])(?!^[a-zA-Z]+$)(?!^[\d]+$)(?!^[^a-zA-Z\d]+$)^.{6,16}$/.test(value)) {
        callback(new Error('请至少包含字母、数字、特殊字符的两种'))
      }else {
        callback()
      }
    }
    let checkPasswordConfirm = (rule, value, callback) => {
      if(value === '') {
        callback(new Error('请再次输入密码'))
      }else if(value !== this.form.password) {
        callback(new Error('两次输入密码不一致!'))
      }else {
        callback()
      }
    }
    let checkUserNameValid = (rule, value, callback) => {
      let params = {
        userName: value
      }
      this.checkUserName(params)
        .then(doc => {
          if(doc.success) {
            callback()
          }else {
            callback(new Error(doc.message))
          }
        })
    }
    return {
      Kurumi: {background: `url(${require('^/Kurumi.jpg')}) no-repeat`, backgroundSize: 'cover'},
      form: {
        userName: '',
        email: '',
        password: '',
        passwordConfirm: ''
      },
      rules: {
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
        ],
        userName: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { validator: checkUserNameValid, trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { validator: checkPassword, trigger: 'change, blur' }
        ],
        passwordConfirm: [
          { required: true, message: '再次输入密码', trigger: 'blur' },
          { validator: checkPasswordConfirm, trigger: 'change, blur' }
        ]
      }
    }
  },
  computed: {
    tabIndex: {
      get() {
        return this.$store.state.user.tabIndex
      },
      set(value) {
        this.$store.commit('TAB_INDEX', value)
      }
    }
  },
  methods: {
    ...mapActions(['signIn']),
    ...mapActions(['signUp']),
    ...mapActions(['checkUserName']),
    ...mapActions(['changeTabIndex']),
    signUpRule(form) {
      this.$refs['formSignUp'].validate((valid) => {
        if(valid) {
          this.signUp(form)
        }else {
          return false
        }
      })
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
  font-size: 22px;
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
  background: rgba(255, 255, 255, .8);
  
}
.sign-button{
  margin-top: 18px;
  width: 100%;
}
</style>
<style>
  .el-form-item--small.el-form-item{
    margin-bottom: 10px;
  }
  .el-form--label-top .el-form-item__label{
    padding-bottom: 0;
  }
</style>

