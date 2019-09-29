<template>
  <div class="skEdit-box">
    <el-button type="text" @click="dialogVisible = true">
      <slot>编辑</slot>
    </el-button>
    <!-- 弹框 -->
    <el-dialog
      title="自定义数据"
      :visible.sync="dialogVisible"
      width="822px"
      :before-close="handleClose"
    >
      <!-- 内容S -->
      <div class="sk-dialog">
        <!-- 数据类型排序 -->
        <div class="data-list">
          <span>已选数据类型:</span>
          <div class="sortable">
            <el-tag
              effect="plain"
              closable
              hit
              color="#fff"
              class="sortable__item"
              @close="closeHandle"
            >支付订单数</el-tag>
            <el-tag
              effect="plain"
              closable
              hit
              color="#fff"
              class="sortable__item"
              @close="closeHandle"
            >支付金额(元)</el-tag>
            <el-tag
              effect="plain"
              closable
              hit
              color="#fff"
              class="sortable__item"
              @close="closeHandle"
            >中等标签</el-tag>
            <el-tag
              effect="plain"
              closable
              hit
              color="#fff"
              class="sortable__item"
              @close="closeHandle"
            >中等标签</el-tag>
            <el-tag
              effect="plain"
              closable
              hit
              color="#fff"
              class="sortable__item"
              @close="closeHandle"
            >中等标签</el-tag>
            <el-tag
              effect="plain"
              closable
              hit
              color="#fff"
              class="sortable__item"
              @close="closeHandle"
            >中等标签</el-tag>
            <el-tag
              effect="plain"
              closable
              hit
              color="#fff"
              class="sortable__item"
              @close="closeHandle"
            >中等标签</el-tag>
            <el-tag
              effect="plain"
              closable
              hit
              color="#fff"
              class="sortable__item"
              @close="closeHandle"
            >中等标签</el-tag>
            <span class="sortable__maxWarn">数据最多选择8个哦</span>
          </div>
        </div>
        <!-- 搜索 -->
        <div class="seatchBox">
          <div class="seatchBox_o">
            <!-- v-model="input4" -->
            <el-input placeholder="请输入内容">
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
          </div>
        </div>
        <!-- 表格 -->
        <div class="table-static">
          <el-table
            ref="multipleTable"
            tooltip-effect="dark"
            @selection-change="handleSelectionChange"
            :data="tableData"
            style="width: 100%"
            height="362"
            max-height="362"
            size="mini"
          >
            <el-table-column fixed prop="date" label="数据类型" width="100"></el-table-column>
            <el-table-column type="selection" label="选择" width="100"></el-table-column>
            <el-table-column prop="province" label="数据名称" width="190"></el-table-column>
            <el-table-column prop="city" label="数据描述"></el-table-column>
            <!-- <el-table-column prop="address" label="地址" width="300"></el-table-column>
            <el-table-column prop="zip" label="邮编" width="120"></el-table-column>-->
          </el-table>
          <div style="margin-top: 16px">
            <el-button @click="toggleSelection([tableData[1], tableData[2]])">默认选择</el-button>
            <el-button @click="toggleSelection()">取消选择</el-button>
          </div>
        </div>
      </div>
      <!-- 内容E -->
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确定(8)</el-button>
        <el-button @click="dialogVisible = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialogVisible: false,
      multipleSelection: [],
      tableData: [
        {
          name: '王小虎',
          province: '支付订单数',
          city:
            '0点截至当前时间，成功付款的订单数，一个订单对应唯一一个订单号（拼团在成团时计入付款订单；货到付款在发货时计入付款订单）',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          name: '王小虎',
          province: '支付金额(元)',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }
      ]
    }
  },
  methods: {
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    closeHandle () {
      console.log(123)
    },
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    }
  }
}
</script>

<style lang="less" scoped>
// height: 35px;
// padding-bottom: 0;
// border-bottom: 1px solid #ccc;
.skEdit-box {
  & /deep/ .el-dialog__header {
    height: 35px;
    padding-bottom: 0;
    border-bottom: 1px solid #ccc;
    .el-dialog__title {
      font-size: 14px;
      line-height: 1;
      font-weight: 700;
      color: #333;
    }
  }
  .sk-dialog {
    margin: -10px 0 -30px;
  }
  & /deep/ .el-dialog__footer {
    padding: 20px;
  }
}
.sk-dialog {
  .data-list {
    width: 100%;
    height: 76px;
    display: flex;
    .sortable {
      flex: 1;
      margin-left: 5px;
      .sortable__item {
        margin-right: 13px;
        margin-bottom: 12px;
        height: 25px;
        line-height: 25px;
      }
      .sortable__maxWarn {
        padding-left: 8px;
        color: #ff9f00;
        font-size: 12px;
      }
    }
  }
  .seatchBox {
    text-align: right;
    .seatchBox_o {
      height: 30px;
      width: 190px;
      display: inline-block;
      & /deep/ input {
        height: 30px;
      }
    }
  }
  .table-static {
    width: 790px;
    margin-top: 16px;
    min-height: 362px;
    & /deep/ .el-table th {
      background-color: #f2f2f2;
    }
    & /deep/ .el-table tr {
      background-color: #fff;
    }
    & /deep/ .el-table .cell {
      font-size: 12px;
    }
  }
}
</style>

<style>
/*
*/
</style>
