<!--
 * @Author: BORING GHOST
 * @Date: 2022-09-16 08:52:34
 * @LastEditTime: 2022-09-16 11:01:11
 * @Description: 
-->
<template>
  <div>
    <div class="xlb-box-border xlb-shadow">
      <el-space spacer="|">
        <el-button @click="setCurrent(data[1])" type="text">
          单选第二行
        </el-button>
        <el-button @click="toggleSelection([data[1], data[3]])" type="text">
          选中多行
        </el-button>
      </el-space>
      <el-input
        type="textarea"
        v-model="inputs.table2Text"
        autosize
        readonly
        :input-style="textarea_style"
      ></el-input>
    </div>
    <div class="xlb-space-h"></div>
    <!-- 带斑马纹+边框+行背景+固定表头+固定列+内容过长时 -->
    <copyText :copy-text="inputs.table1Text">
      <div class="xlb-title-2">
        带斑马纹+边框+行背景+固定表头+固定列+内容过长时
      </div>
      <el-table
        ref="singleTableRef"
        highlight-current-row
        :row-class-name="tableRowClassName"
        stripe
        border
        height="250"
        :data="data"
        style="width: 100%"
      >
        <el-table-column fixed="left" type="selection" width="55" />
        <el-table-column
          sortable
          :sort-method="tableDateSort"
          prop="date"
          label="Date"
          width="150"
        />
        <el-table-column
          :formatter="formatter"
          prop="name"
          label="Name"
          width="120"
        />
        <el-table-column prop="state" label="State" width="120" />
        <el-table-column prop="city" label="City" width="320" />
        <el-table-column
          show-overflow-tooltip
          prop="address"
          label="Address"
          width="600"
        />
        <el-table-column fixed="right" prop="zip" label="Zip" width="120" />
      </el-table>
    </copyText>
    <div class="xlb-space-h"></div>
    <!-- 筛选 -->
    <copyText :copy-text="inputs.table3Text">
      <div class="xlb-title-2">筛选</div>
      <el-table style="width: 100%" height="250" :data="data">
        <el-table-column
          :filters="data.map((v) => ({ text: v.date, value: v.date }))"
          :filter-method="filterHandler"
          prop="date"
          label="Date"
          width="150"
        />
        <el-table-column prop="name" label="Name" width="120" />
        <el-table-column prop="state" label="State" width="120" />
        <el-table-column prop="city" label="City" width="320" />
        <el-table-column prop="address" label="Address" width="600" />
        <el-table-column prop="zip" label="Zip" width="120" />
      </el-table>
    </copyText>
  </div>
</template>

<script name="TableElement" setup>
import { data, table1Text, table2Text, table3Text } from "./conf";
// data
const singleTableRef = ref();
const textarea_style = shallowRef(inject("testarea_style"));
const inputs = {
  table1Text,
  table2Text,
  table3Text,
};

// methods
const filterHandler = (value, row, column) => {
  return row[column["property"]] === value;
};
const formatter = (row) => {
  return row.name + "-custom";
};
const tableDateSort = (a, b) => {
  return false;
};
const toggleSelection = (rows) => {
  rows.forEach((item) => {
    singleTableRef.value?.toggleRowSelection(item);
  });
};
const setCurrent = (row) => {
  singleTableRef.value?.setCurrentRow(row);
};
const tableRowClassName = ({ rowIndex }) => {
  const className = rowIndex % 2 === 0 ? "warning-row" : "success-row";
  return className;
};
</script>

<style lang="scss" scoped>
.el-table {
  :deep(.warning-row) {
    --el-table-tr-bg-color: var(--el-color-warning-light-9);
  }
  :deep(.success-row) {
    --el-table-tr-bg-color: var(--el-color-success-light-9);
  }
}
</style>
