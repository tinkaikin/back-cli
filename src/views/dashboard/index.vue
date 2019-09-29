<template>
  <div class="dashboard">
    <!-- 实时概况 -->
    <el-card class="survey">
      <div class="sur__header">
        <h2>
          实时概况
          <span class="update-time">更新时间：</span>
          <i
          @click="isSwitchHide=!isSwitchHide"
          :class="isSwitchHide?'el-icon-view':'el-icon-c-scale-to-original'" data-event_name="实时概况-隐藏按钮"></i>
        </h2>
        <div class="header-action">
            <sk-edit><a>编辑</a></sk-edit>
        </div>
      </div>
      <div class="box">
        <el-row>
          <el-col :span="12" class="box_left">
            <el-col :span="12">
              <div class="index__style--1Oggc">
                <div class="title">支付订单数</div>
                <a
                  class="amount"
                  href="https://www.youzan.com/v2/statcenter/dashboard/index"
                  target="_blank"
                >
                  <span></span>
                  <span class="amount-today">{{isSwitchHide?'0':'***'}}</span>
                </a>
                <div class="amount-yesterday">
                  昨日：
                  <span>{{isSwitchHide?'0':'***'}}</span>
                </div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="index__style--1Oggc">
                <div class="title">支付金额(元)</div>
                <a
                  class="amount"
                  href="https://www.youzan.com/v2/statcenter/dashboard/index"
                  target="_blank"
                >
                  <span></span>
                  <span class="amount-today">{{isSwitchHide?'0.00':'***'}}</span>
                </a>
                <div class="amount-yesterday">
                  昨日：
                  <span>{{isSwitchHide?'0.00':'***'}}</span>
                </div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="index__style--1Oggc">
                <div class="title">浏览量</div>
                <a
                  class="amount"
                  href="https://www.youzan.com/v2/statcenter/dashboard/index"
                  target="_blank"
                >
                  <span></span>
                  <span class="amount-today">{{isSwitchHide?'0':'***'}}</span>
                </a>
                <div class="amount-yesterday">
                  昨日：
                  <span>{{isSwitchHide?'0':'***'}}</span>
                </div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="index__style--1Oggc">
                <div class="title">累积客户数</div>
                <a
                  class="amount"
                  href="https://www.youzan.com/v2/statcenter/dashboard/index"
                  target="_blank"
                >
                  <span></span>
                  <span class="amount-today">{{isSwitchHide?"0":'***'}}</span>
                </a>
                <div class="amount-yesterday" v-if="false">
                  昨日：
                  <span>0</span>
                </div>
              </div>
            </el-col>
          </el-col>
          <el-col :span="12" class="box_right">
            <el-col :span="12">
              <div class="index__style--1Oggc">
                <div class="title">本月目标(元)</div>
                <a
                  class="amount"
                  href="https://www.youzan.com/v2/statcenter/dashboard/index"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span class="amount-today">{{isSwitchHide?'--':'***'}}</span>
                </a>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="index__style--1Oggc">
                <div class="title">完成进度(%)</div>
                <a
                  class="amount"
                  href="https://www.youzan.com/v2/statcenter/dashboard/index"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span class="amount-today">{{isSwitchHide?'--':'***'}}</span>
                </a>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="index__style--1Oggc">
                <div class="title">可用店铺余额(元)</div>
                <a
                  class="amount"
                  href="https://www.youzan.com/v4/assets/dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span></span>
                  <span class="amount-today">{{isSwitchHide?'0.00':'***'}}</span>
                </a>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="index__style--1Oggc">
                <div class="title">待结算(元)</div>
                <a
                  class="amount"
                  href="https://www.youzan.com/v4/assets/dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span></span>
                  <span class="amount-today">{{isSwitchHide?'0.00':'***'}}</span>
                </a>
              </div>
            </el-col>
          </el-col>
        </el-row>
      </div>
    </el-card>
    <!-- 智能助手 -->
    <el-card class="survey">
      <div class="box box2">
        <div class="box2-left">
          <h4>智能助手</h4>
          <div class="progress-block">
            <div class="svnbox">
              <svg class="zent-progress-inner">
                <circle
                  class="zent-progress-inner-path"
                  cx="72"
                  cy="72"
                  r="63.5"
                  style="stroke: rgb(214, 231, 255); stroke-width: 17; stroke-dasharray: 398.982; stroke-dashoffset: 166.256;"
                />
              </svg>
              <div class="zent-progress-info">
                <div class="pending-status-text">
                  <p>
                    <span class="pending-status-text__count">15</span>项
                  </p>
                  <p>待处理</p>
                </div>
              </div>
            </div>
            <el-button type="primary">去处理</el-button>
          </div>
        </div>
        <div class="box2-right">
          <!-- @tab-click="handleClick" tab选中时触发
                v-model="activeName"  绑定值，选中选项卡的 name
          -->
          <el-tabs type="card" v-model="activeName">
            <el-tab-pane label="用户管理" name="1">
              <div class="zn-container">
                <div class="zn-container__major">
                  <a href>
                    <span class="major-data-item__desc">待发货订单</span>
                    <span class="major-data-item__value">0</span>
                  </a>
                  <a href>
                    <span class="major-data-item__desc">待发货订单</span>
                    <span class="major-data-item__value">0</span>
                  </a>
                  <a href>
                    <span class="major-data-item__desc">待发货订单</span>
                    <span class="major-data-item__value">0</span>
                  </a>
                  <a href>
                    <span class="major-data-item__desc">待发货订单</span>
                    <span class="major-data-item__value">0</span>
                  </a>
                  <a href>
                    <span class="major-data-item__desc">待发货订单</span>
                    <span class="major-data-item__value">0</span>
                  </a>
                  <a href>
                    <span class="major-data-item__desc">待发货订单</span>
                    <span class="major-data-item__value">0</span>
                  </a>
                </div>
                <div class="zn-container__box">
                  <div class="style__item">
                    <div>
                      <i class="el-icon-s-flag"></i>
                      <span>未创建客户分群</span>
                      <span class="subdesc">通过对客户行为、属性的分析，更好的针对不同客户进行运营管理</span>
                    </div>
                    <a class="link" href>立即创建</a>
                  </div>
                  <div class="style__item">
                    <div>
                      <i class="el-icon-s-flag"></i>
                      <span>未创建客户分群</span>
                      <span class="subdesc">通过对客户行为、属性的分析，更好的针对不同客户进行运营管理</span>
                    </div>
                    <a class="link" href>立即创建</a>
                  </div>
                  <div class="style__item">
                    <div>
                      <i class="el-icon-s-flag"></i>
                      <span>未创建客户分群</span>
                      <span class="subdesc">通过对客户行为、属性的分析，更好的针对不同客户进行运营管理</span>
                    </div>
                    <a class="link" href>立即创建</a>
                  </div>
                  <div class="style__item">
                    <div>
                      <i class="el-icon-s-flag"></i>
                      <span>未创建客户分群</span>
                      <span class="subdesc">通过对客户行为、属性的分析，更好的针对不同客户进行运营管理</span>
                    </div>
                    <a class="link" href>立即创建</a>
                  </div>
                  <div class="style__item">
                    <div>
                      <i class="el-icon-s-flag"></i>
                      <span>未创建客户分群</span>
                      <span class="subdesc">通过对客户行为、属性的分析，更好的针对不同客户进行运营管理</span>
                    </div>
                    <a class="link" href>立即创建</a>
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="店铺基础" name="2">
              <div class="zn-container">
                <div class="zn-container__box">
                  <div class="hongqi">
                    <div class="style__item">
                      <div>
                        <i class="el-icon-s-flag"></i>
                        <span>未创建客户分群</span>
                        <span class="subdesc">通过对客户行为、属性的分析，更好的针对不同客户进行运营管理</span>
                      </div>
                      <a class="link" href>立即创建</a>
                    </div>
                    <div class="style__item">
                      <div>
                        <i class="el-icon-s-flag"></i>
                        <span>未创建客户分群</span>
                        <span class="subdesc">通过对客户行为、属性的分析，更好的针对不同客户进行运营管理</span>
                      </div>
                      <a class="link" href>立即创建</a>
                    </div>
                    <div class="style__item">
                      <div>
                        <i class="el-icon-s-flag"></i>
                        <span>未创建客户分群</span>
                        <span class="subdesc">通过对客户行为、属性的分析，更好的针对不同客户进行运营管理</span>
                      </div>
                      <a class="link" href>立即创建</a>
                    </div>
                    <div class="style__item">
                      <div>
                        <i class="el-icon-s-flag"></i>
                        <span>未创建客户分群</span>
                        <span class="subdesc">通过对客户行为、属性的分析，更好的针对不同客户进行运营管理</span>
                      </div>
                      <a class="link" href>立即创建</a>
                    </div>
                  </div>
                  <div class="lanqi">
                    <div class="style__item">
                      <div>
                        <i class="el-icon-s-flag"></i>
                        <span>未创建客户分群</span>
                        <span class="subdesc">通过对客户行为、属性的分析，更好的针对不同客户进行运营管理</span>
                      </div>
                      <a class="link" href>立即创建</a>
                    </div>
                    <div class="style__item">
                      <div>
                        <i class="el-icon-s-flag"></i>
                        <span>未创建客户分群</span>
                        <span class="subdesc">通过对客户行为、属性的分析，更好的针对不同客户进行运营管理</span>
                      </div>
                      <a class="link" href>立即创建</a>
                    </div>
                    <div class="style__item">
                      <div>
                        <i class="el-icon-s-flag"></i>
                        <span>未创建客户分群</span>
                        <span class="subdesc">通过对客户行为、属性的分析，更好的针对不同客户进行运营管理</span>
                      </div>
                      <a class="link" href>立即创建</a>
                    </div>
                    <div class="style__item">
                      <div>
                        <i class="el-icon-s-flag"></i>
                        <span>未创建客户分群</span>
                        <span class="subdesc">通过对客户行为、属性的分析，更好的针对不同客户进行运营管理</span>
                      </div>
                      <a class="link" href>立即创建</a>
                    </div>
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="商品体验" name="3">
              <div class="zn-container">
                <div class="zn-container__box">
                  <div class="hongqi" v-if="false"></div>
                  <div class="lanqi">
                    <div class="style__item">
                      <div>
                        <i class="el-icon-s-flag"></i>
                        <span>未创建客户分群</span>
                        <span class="subdesc">通过对客户行为、属性的分析，更好的针对不同客户进行运营管理</span>
                      </div>
                      <a class="link" href>立即创建</a>
                    </div>
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="物流体验" name="4">
              <!-- 使用插槽 -->
              <zn-experience>
                <template v-slot:tabName>物流</template>
              </zn-experience>
            </el-tab-pane>
            <el-tab-pane label="售后体验" name="5">
              <zn-experience>
                <template v-slot:tabName>售后</template>
              </zn-experience>
            </el-tab-pane>
            <el-tab-pane label="服务体验" name="6">
              <zn-experience>
                <template v-slot:tabName>服务</template>
              </zn-experience>
            </el-tab-pane>
            <el-tab-pane label="流量表现" name="7">
              <div class="zn-container">
                <div class="zn-container__box">
                  <div class="hongqi" v-if="false"></div>
                  <div class="lanqi">
                    <div class="style__item">
                      <div>
                        <i class="el-icon-s-flag"></i>
                        <span>未创建客户分群</span>
                        <span class="subdesc">通过对客户行为、属性的分析，更好的针对不同客户进行运营管理</span>
                      </div>
                      <a class="link" href>立即创建</a>
                    </div>
                  </div>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </el-card>
    <!-- 常用功能 -->
    <el-card class="survey">
      <div class="sur__header">
        <h2>
          常用功能
        </h2>
        <div class="header-action">
          <a>编辑</a>
        </div>
      </div>
      <div class="box">
          <div class="box__list">
              <a href="" class="box__item">
                  <i class="iconf el-icon-picture"></i>发布商品
              </a>
              <a href="" class="box__item">
                  <i class="iconf el-icon-picture"></i>多网点
              </a>
              <a href="" class="box__item">
                  <i class="iconf el-icon-picture"></i>小程序
              </a>
              <a href="" class="box__item">
                  <i class="iconf el-icon-picture"></i>分销员
              </a>
              <a href="" class="box__item">
                  <i class="iconf el-icon-picture"></i>微信公众号
              </a>
              <a href="" class="box__item">
                  <i class="iconf el-icon-picture"></i>收入/提现
              </a>
              <a href="" class="box__item">
                  <i class="iconf el-icon-picture"></i>智能客服
              </a>
              <a href="" class="box__item">
                  <i class="iconf el-icon-picture"></i>订单查询
              </a>
          </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import ZnExperience from './components/Zn-experience'
import SkEdit from './components/Sk-edit'
export default {
  components: {
    ZnExperience,
    SkEdit
  },
  data () {
    return {
      activeName: '4',
      isSwitchHide: true // 实时概况数据可见否
    }
  }
}
</script>

<style lang="less" scoped>
.dashboard {
  .survey {
    margin-bottom: 20px;
  }
  .sur__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding-left: 5px;
    h2 {
      font-size: 16px;
      font-weight: 900;
      color: #333;
      i{
          font-size: 16px;
          cursor: pointer;
          margin-left: 10px;
      }
    }
    .update-time {
      font-size: 14px;
      color: #969799;
      margin-left: 7px;
      font-weight: 400;
    }
    .header-action>a{
        cursor: pointer;
        color: #38f;
    }
  }
  .box {
    padding: 0 20px;
    .el-row {
      padding: 0 20px;
    }
    .box_left {
      padding-right: 56px;
      border-right: 1px solid #efefef;
      .el-col-12:nth-child(3),
      .el-col-12:nth-child(4) {
        margin-top: 30px;
      }
    }
    .box_right {
      padding-left: 56px;
      border-right: 0;
      .el-col-12:nth-child(3),
      .el-col-12:nth-child(4) {
        margin-top: 30px;
      }
    }
    .index__style--1Oggc {
      color: #333;
      font-size: 12px;
      text-align: left;
      height: 85px;
      .title {
        font-size: 14px;
        line-height: 14px;
        color: #969799;
      }
      .amount-yesterday {
        color: #666;
        font-size: 14px;
        line-height: 14px;
      }
      .amount {
        display: none;
        position: relative;
        display: inline-block;
        height: 28px;
        cursor: pointer;
        margin: 15px 0 13px;
        color: #333;
        font-size: 16px;
        font-weight: bolder;
      }
      .amount-today {
        font-size: 28px;
      }
    }
  }
  .box2 {
    display: flex;
  }
  .box2-left {
    padding: 0;
    border-right: 1px solid #e5e5e5;
    margin: 0 30px 4px 0;
    width: 233px;
    height: 306px;
    h4 {
      height: 24px;
      line-height: 24px;
      padding: 0 10px;
      font-size: 16px;
      font-weight: 900;
      color: #333;
      margin: 0;
    }
    .progress-block {
      text-align: center;
      .svnbox {
        position: relative;
        margin: 33px auto 20px;
        width: 144px;
        height: 144px;
        border: 1px solid red;
        margin-top: 33px;
        .zent-progress-info {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          .pending-status-text {
            display: flex;
            justify-content: center;
            flex-direction: column;
            line-height: 14px;
            height: 100%;
            & p:first-child {
              margin-bottom: 5px;
            }
            p {
              .pending-status-text__count {
                color: #df4545;
                font-size: 40px;
              }
            }
          }
        }
      }
      .el-button {
        width: 90px;
        height: 30px;
        line-height: 7px;
      }
    }
  }
  .box2-right {
    width: 1204px;
    .zn-container {
      height: 240px;
      overflow: auto;
      .hongqi {
        padding-bottom: 12px;
        border-bottom: 1px solid #ccc;
      }
      .zn-container__major {
        height: 70px;
        padding: 16px 16px 16px 0;
        background-color: #f8f8f8;
        display: flex;
        flex-wrap: wrap;

        a {
          display: flex;
          align-items: center;
          width: 33%;
          justify-content: center;
          .major-data-item__value {
            font-size: 18px;
            font-weight: 700;
            color: #df4545;
          }
          .major-data-item__desc {
            margin-right: 10px;
            font-size: 14px;
            color: #323233;
          }
        }
      }
      .style__item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 16px;
        margin-left: 4px;
        i {
          margin-right: 10px;
        }
        .subdesc {
          color: #969799;
          margin-left: 10px;
        }
        .link {
          color: #38f;
        }
      }
    }
  }
// 常用功能--
  .box__list{
      height: 108px;
      margin: 0 -20px;
      display: flex;
      flex-wrap: wrap;
      .box__item{
          display: flex;
        flex-basis: 25%;
        color: #333;
        padding-left: 35px;
        box-sizing: border-box;
        line-height: 30px;
        margin-top: 24px;
        i{
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 10px;
            font-size: 16px;
            vertical-align: middle;
            width: 30px;
            height: 30px;
            border-radius: 5px;
            background-color: rgb(0, 191, 86);
        }
      }
  }
}
</style>
