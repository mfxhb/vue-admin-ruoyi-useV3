<!--
 * @Author: BORING GHOST
 * @Date: 2022-09-01 09:33:49
 * @LastEditTime: 2022-09-01 10:09:55
 * @Description: 
-->
<template>
  <div>
    <!--  -->
    <div class="xlb-title-2">基础用法</div>
    <div>
      <template v-for="item in typeList" :key="item">
        <el-link href="http://www.baidu.com" :type="item" target="_blank">
          --{{ item }}--|
        </el-link>
      </template>
    </div>
    <!--  -->
    <div class="xlb-title-2">禁用状态</div>
    <div>
      <el-link href="javascropt:void(0)" disabled>百度首页</el-link>
    </div>
    <!--  -->
    <div class="xlb-title-2">文字的下划线</div>
    <div class="xlb-title-3">公共样式去除了a标签的下划线</div>
    <div>
      <el-link href="javascript:void(0)" :underline="true">有下划线</el-link>
      ---
      <el-link href="javascript:void(0)" :underline="false">无下划线</el-link>
    </div>
    <!--  -->
    <div class="xlb-title-2">图标(左侧跟右侧)</div>
    <div>
      <el-link href="javascript:void(0)" icon="House">百度首页</el-link>
      ---
      <el-link>
        百度首页
        <el-icon href="javascript:void(0)" class="el-icon--right">
          <House />
        </el-icon>
      </el-link>
    </div>
  </div>
</template>

<script name="LinkElement" setup>
/* api */
import { elementPlusApi } from "~/mock/modules/element-plus";
/* data */
let typeList = ref([]);
/* methods */
async function dataListApis() {
  let { type } = await elementPlusApi("link");
  typeList.value = type;
  console.log(type);
}
/* run */
dataListApis();
</script>

<style lang="scss" scoped></style>
