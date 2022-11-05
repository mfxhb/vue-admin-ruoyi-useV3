<!--
 * @Author: BORING GHOST
 * @Date: 2022-09-15 15:32:49
 * @LastEditTime: 2022-09-15 17:12:43
 * @Description: 
-->
<template>
  <div>
    <!-- 基础用法 -->
    <copy-text :copy-text="inputs.skeleton1Text">
      <div class="xlb-title-2">基础用法</div>
      <el-skeleton animated style="--el-skeleton-circle-size: 100px">
        <template #template>
          <el-skeleton-item variant="circle" />
        </template>
      </el-skeleton>
      <el-skeleton :rows="0" />
    </copy-text>
    <div class="xlb-space-h"></div>
    <!-- 自定义样式 -->
    <copy-text :copy-text="inputs.skeleton2Text">
      <div class="xlb-title-2">自定义样式各类模板</div>
      <el-skeleton>
        <template #template>
          <el-skeleton-item
            variant="image"
            style="width: 240px; height: 240px"
          />
          <div style="padding: 14px">
            <el-skeleton-item variant="p" style="width: 50%" />
            <el-skeleton-item variant="text" style="margin-right: 16px" />
            <el-skeleton-item variant="text" style="width: 30%" />
          </div>
        </template>
      </el-skeleton>
    </copy-text>
  </div>
</template>

<script name="SkeletonElement" setup>
import { skeleton1Text, skeleton2Text } from "./conf";
// data
const inputs = reactive({
  skeleton1Text,
  skeleton2Text,
});
</script>

<style lang="scss" scoped></style>
