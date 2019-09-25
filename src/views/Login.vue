<template>
  <div class="login">
    <div class="containe">
      <div class="poswrap">
        <router-link class="brand" to="http://www.teambition.com/"></router-link>
      </div>
      <div class="login-form">
        <!-- :model="ruleForm"表单数据对象 status-icon是否在输入框中显示校验结果反馈图标 :rules="rules"表单验证规则 ref="ruleForm"  -->
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
          <el-form-item label prop="phoneOrEmail" >
            <el-input type="text" autocomplete="off" placeholder="你的手机号或工作邮箱" v-model="ruleForm.phoneOrEmail"></el-input>
          </el-form-item>
          <el-form-item label prop="pass" class="password" >
            <el-input type="password" placeholder="密码" v-model="ruleForm.pass"></el-input>
            <i class="el-icon-camera"></i>
            <span class="forgot-password" @click="forgotPassword">忘记密码？</span>
          </el-form-item>
          <!-- 登录按钮 -->
          <!-- 这里要做判断，如果没密码错误显示 用v-show -->
          <span class="error-block" v-show="errorBlock"><span class="el-icon-circle-close"></span><span class="error-block-message">登录状态已失效，请刷新页面并重新登录</span></span>
          <el-form-item label class="loginBtn">
            <el-button type="primary" @click="submitForm('ruleForm')">
              登录
              <span class="el-icon-thumb"></span>
            </el-button>
          </el-form-item>
          <div class="horizontal-line"></div>
          <!--  -->
          <el-form-item label>
            <el-button type="success" plain>
              <span class="text">使用 微信 登录</span>
              <span class="el-icon-user wechat"></span>
            </el-button>
          </el-form-item>
          <!--  -->
          <div class="third-bind-hid">
            <router-link to>使用 SSO 登录</router-link>
            <span class="text-delimit"></span>
            <router-link class="third-login" to>第三方账号登录</router-link>
          </div>
          <div class="info-field">
            还没有账号？
            <router-link to="#">注册新账号</router-link>
          </div>
          <span class="switch-service">中国服务器</span>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    var phoneOrEmail = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入手机号或邮箱'))
      } else {
        if (this.ruleForm.phoneOrEmail !== '') {
          this.$refs.ruleForm.validateField('phoneOrEmail')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码！'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        phoneOrEmail: '',
        pass: ''
      },
      rules: {
        phoneOrEmail: [{ validator: phoneOrEmail, trigger: 'blur' }],
        pass: [{ validator: validatePass2, trigger: 'blur' }]
      },
      errorBlock: true
    }
  },
  methods: {
    // 跳转到重置密码
    forgotPassword () {
      this.$router.push('/forgot')
    },
    // 表单整体校验
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  line-height: 1.42857143;
  color: #383838;
  background-color: #fff;
  .containe {
    width: 340px;
    margin: 110px auto 0;
    .poswrap {
      .brand {
        width: 202px;
        background-image: url(../assets/img/logo@2x.440e5e41.jpg);
        background-size: 202px;
        display: block;
        height: 46px;
        margin: 0 auto 35px;
        background-position: center bottom;
        background-repeat: no-repeat;
      }
    }
    .login-form {
      width: 340px;
      .el-form-item {
        margin-bottom: 25px;
        .el-input {
            font-size: 16px;
        }
      }
    .error-block{
        width: 100%;
        text-align: left;
        position: relative;
        display: inline-block;
        padding: 0 15px 0 0;
        color: #F74555;
        border-radius: 3px;
        font-size: 14px;
        span:first-child{
            margin-right:5px;
        }
    }
      .el-button--primary:hover .el-icon-thumb {
        display: inline-block;
      }
      .el-icon-thumb {
        display: none;
      }
      .password {
        position: relative;
        i {
          position: absolute;
          top: 15px;
          right: 10px;
        }
        .forgot-password {
          position: absolute;
          right: 0;
          color: #a6a6a6;
          line-height: 30px;
          height: 30px;
          bottom: -30px;
          cursor: pointer;
        }
      }
      .el-button {
        width: 100%;
        margin-top: 10px;
        height: 46px;
      }
      .horizontal-line {
        width: 100%;
        height: 1px;
        background-color: #979797;
        opacity: 0.9;
        margin-bottom: 36px;
      }
      .el-button--success.is-plain {
        background-color: #fff;
        margin-top: 0;
      }
      .wechat {
        // position: absolute;
        color: #fff;
        font-size: 20px;
        display: none;
      }
      .text {
        color: #32c25a;
        display: block;
      }
      .el-form-item__content:hover .is-plain {
        background-color: #32c25a;
        color: #32c25a;
        // display: block;
        & .wechat {
          display: block;
        }
        & .text {
          display: none;
        }
      }
    }
  }
  .third-bind-hid {
    font-size: 14px;
    text-align: center;
    padding-bottom: 28px;
    background-color: #fff;
    margin-top: -9px;
    a {
      color: #03a9f4;
      display: inline-block;
    }
    .text-delimit {
      margin: 0 13px 0 12px;
      border-right: 1px solid #ccc;
      display: inline-block;
      vertical-align: middle;
      height: 14px;
    }
  }
  .info-field {
    text-align: center;
    color: #a6a6a6;
    margin: 0 -1px;
    a {
      color: #03a9f4;
      display: inline-block;
    }
  }
  .switch-service {
    padding-top: 10px;
    color: #3da8f5;
    text-align: center;
    display: inline-block;
    line-height: 20px;
    font-size: 14px;
    width: 100%;
    margin-top: 30px;
    cursor: pointer;
    user-select: none;
  }
  .el-form-item /deep/ .el-input__inner {
    height: 46px;
  }
}
</style>
