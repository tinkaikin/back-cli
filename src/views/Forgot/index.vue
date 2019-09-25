<template>
  <div class="login">
    <div class="containe">
      <div class="poswrap">
        <router-link class="brand" to="http://www.teambition.com/"></router-link>
      </div>
      <div class="forgotTitle">
        <h4>重置密码</h4>
      </div>
      <div class="login-form">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
          <el-form-item label prop="phoneOrEmail">
            <el-input type="text" autocomplete="off" placeholder="你的手机号或工作邮箱" v-model="ruleForm.phoneOrEmail"></el-input>
          </el-form-item>
          <el-form-item label class="btn">
            <el-button type="primary">重置密码</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="info-field">
        <span>如无法通过手机或邮箱找回请发送邮件至support@teambition.com 寻求帮助</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ruleForm: {
        phoneOrEmail: ''
      },
      rules: {
        phoneOrEmail: [
          { required: true, message: '请输入你的手机号或工作邮箱', trigger: 'blur' }
        ]
      }
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
        background-image: url(../../assets/img/logo@2x.440e5e41.jpg);
        background-size: 202px;
        display: block;
        height: 46px;
        margin: 0 auto 35px;
        background-position: center bottom;
        background-repeat: no-repeat;
      }
    }
    // 重置密码的h4文本
    .forgotTitle {
      text-align: center;
      color: #a6a6a6;
      margin: 0 -1px;
      h4 {
        font-size: 18px;
        font-weight: 400;
        margin: 0 0 25px;
        line-height: inherit;
        color: grey;
      }
    }
    // 提示
    .info-field {
      text-align: center;
      color: #a6a6a6;
      margin: 0 -1px;
      &>span{
          display: block;
      }
    }
    .login-form {
      width: 340px;

      .el-form-item {
        margin-bottom: 25px;
        .el-input {
          font-size: 16px;
          & /deep/ .el-input__inner {
            height: 46px;
          }
        }
      }
      .el-button {
        width: 100%;
        height: 46px;
      }
    }
  }
}
</style>
