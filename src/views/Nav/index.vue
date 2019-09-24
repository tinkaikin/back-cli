<template>
    <div class="top-nav">
        <div class="top-nav__log">放置log</div>
        <div class="top-nav__seatch">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        </div>
        <div class="top-nav__oth">
        其他
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      input: ''
    }
  }
}
</script>

<style lang="less" scoped>
.top-nav{
    display: flex;
    justify-content: space-between;
    align-items:center;
    // border-bottom: 1px solid #000;
    // box-shadow: 0 0 0 .2px;
    margin: 0 -20px;
    padding: 0 20px;
    box-shadow:0px 0px 10px #ccc;
    &__log{
        width: 100px;
    }
    &__seatch{
        border-radius: 30px;
        overflow: hidden;
        border: 1px solid #8c8c8c;
        width: 252px;
        height: 40px;
        margin: 8px;
    }
    .el-input {
        color: #8c8c8c;
        font-size: 14px;
    }
}

</style>
