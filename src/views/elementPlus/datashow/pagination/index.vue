<!--
 * @Author: BORING GHOST
 * @Date: 2022-09-15 11:12:11
 * @LastEditTime: 2022-09-15 14:40:29
 * @Description: 
-->
<template>
  <div>
    <!-- 基础用法 -->
    <copyText :copy-text="inputs.page1Text">
      <div class="xlb-title-2">基础用法</div>
      <el-pagination
        layout="sizes,prev,pager,next,jumper,->,total,slot"
        :total="550"
      ></el-pagination>
    </copyText>
    <div class="xlb-space-h"></div>
    <!-- 带背景+小型分页+隐藏 -->
    <copyText :copy-text="inputs.page2Text">
      <div class="xlb-title-2">带背景+小型分页+隐藏</div>
      <el-row :gutter="24">
        <el-col :span="12" align="center">
          <el-space fill direction="vertical">
            <span>开启背景</span>
            <el-radio-group v-model="inputs.page2bg">
              <el-radio border :label="false">False</el-radio>
              <el-radio border :label="true">True</el-radio>
            </el-radio-group>
          </el-space>
        </el-col>
        <el-col align="center" :span="12">
          <el-space fill direction="vertical">
            <span>开启小型分页</span>
            <el-radio-group v-model="inputs.page2Size">
              <el-radio border :label="false">False</el-radio>
              <el-radio border :label="true">True</el-radio>
            </el-radio-group>
          </el-space>
        </el-col>
      </el-row>
      <el-pagination
        :background="inputs.page2bg"
        :small="inputs.page2Size"
        layout="sizes,prev,pager,next,jumper,->,total,slot"
        :total="550"
      ></el-pagination>
    </copyText>
  </div>
</template>

<script name="PaginationElement" setup>
import { page1Text, page2Text } from "./conf";
// data
const inputs = reactive({
  page1Text,
  page2bg: false,
  page2Size: false,
  page2Text,
});
</script>

<style lang="scss" scoped></style>
