<template>
  <div class="experience">
    <div class="thumbUp">
      <h2>
        <i class="el-icon-picture-outline-round"></i>
        你已完成
        <slot name="tabName">服务</slot>体验的所有任务
      </h2>
      <p>看推荐资讯，助力店铺经营</p>
    </div>
    <div class="cmBlock">
      <div class="cmBlock__card">
        <div class="zent-card-body">
          <div class="style__cmsItemContent">
            <div>
              <a href>
                <div style="overflow-y: hidden; max-height: 43px;">
                  <span>开业 1 个月收入 200 万，把 10 ...</span>
                </div>
              </a>
              <a href class="cms-item__link">立即查看</a>
            </div>
            <img src="../../../assets/img/cms-pic-1.png" alt />
          </div>
        </div>
      </div>
      <div class="cmBlock__card">
        <div class="zent-card-body">
          <div class="style__cmsItemContent">
            <div>
              <a href>
                <div style="overflow-y: hidden; max-height: 43px;">
                  <span>卧底快手直播间，我学会了 20 个...</span>
                </div>
              </a>
              <a href class="cms-item__link">立即查看</a>
            </div>
            <img src="../../../assets/img/cms-pic-2.png" alt />
          </div>
        </div>
      </div>
      <div class="cmBlock__card">
        <div class="zent-card-body">
          <div class="style__cmsItemContent">
            <div>
              <a href>
                <div style="overflow-y: hidden; max-height: 43px;">
                  <span>7 天一口气卖了 60 多万，10 年甜品...</span>
                </div>
              </a>
              <a href class="cms-item__link">立即查看</a>
            </div>
            <img src="../../../assets/img/cms-pic-3.png" alt />
          </div>
        </div>
      </div>

      <div class="cmBlock__card-wrapper">
        <div>
          更多内容
          <br />...
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.experience {
  .thumbUp {
    width: 100%;
    height: 45px;
    margin: 34px 0 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h2 {
      font-size: 16px;
      line-height: 24px;
      color: #000;
      position: relative;
      i {
        font-size: 24px;
        vertical-align: middle;
      }
    }
    p {
      margin-top: 4px;
      font-size: 14px;
      line-height: 18px;
      color: #666;
    }
  }
  .cmBlock {
    width: 100%;
    margin-top: 10px;
    display: flex;
    .cmBlock__card {
      color: #969799;
      flex-basis: 30%;
      margin-right: 16px;
      background-color: #fff;
      border-radius: 2px;
      position: relative;
      border: 1px solid #e5e5e5;
      overflow: hidden;
      .zent-card-body {
        padding: 16px 10px 10px 16px;
        min-width: 110px;
        .style__cmsItemContent {
          height: 90px;
          padding-right: 50px;
          position: relative;
          a {
            color: #323233;
            display: block;
          }
          .cms-item__link {
            margin: 24px 0 6px;
            color: #38f;
          }
          img {
            width: 40px;
            height: 40px;
            position: absolute;
            bottom: 0;
            right: 0;
          }
        }
      }
    }
    .cmBlock__card-wrapper {
      width: 90px;
      border: 1px solid #e5e5e5;
      border-radius: 2px;
      background-color: #fff;
      overflow: hidden;
      & > div {
        height: 100%;
        min-width: 90px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        text-align: center;
        color: #38f;
        padding: 16px;
        cursor: pointer;
      }
    }
  }
}
</style>
