<!--
 * @Author: BORING GHOST
 * @Date: 2022-08-28 10:34:26
 * @LastEditTime: 2022-09-02 10:02:21
 * @Description: 
-->
<template>
  <div>
    <template v-for="item in dataList" :key="item[0]">
      <div class="attri-item">
        <h3 class="custom-fw">{{ item[0] }}</h3>
        <hr />
        <span>
          <template v-for="value in item[1]" :key="value">
            <el-button v-bind="{ [item[0]]: value }">{{ value }}</el-button>
          </template>
        </span>
      </div>
    </template>
  </div>
</template>

<script name="Buttonelement" setup>
/* api */
import { elementPlusApi } from "~/mock/modules/element-plus";
/* data */
let dataList = ref([]);
/* methods */
async function dataListApis() {
  let { attribute } = await elementPlusApi("button");
  dataList.value = attribute;
}
// 逻辑
dataListApis();
</script>
