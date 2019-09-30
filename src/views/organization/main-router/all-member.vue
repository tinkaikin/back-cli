<template>
  <div class="all-member">
    <Header></Header>
    <Member></Member>
    <Member :tream="true"></Member>
    <Member></Member>
    <Member></Member>
  </div>
</template>

<script>
import Header from '../components/Header'
import Member from '../components/Member'
export default {
  components: {
    Header,
    Member
  }

}
</script>

<style lang="less" scoped>

</style>
