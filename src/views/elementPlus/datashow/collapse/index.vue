<!--
 * @Author: BORING GHOST
 * @Date: 2022-09-15 09:20:30
 * @LastEditTime: 2022-09-15 09:31:20
 * @Description: 
-->
<!--
 * @Author: BORING GHOST
 * @Date: 2022-09-15 09:20:30
 * @LastEditTime: 2022-09-15 09:25:45
 * @Description: 
-->
<template>
  <div>
    <!-- 基础用法 -->
    <copyText :copy-text="inputs.collapse1Text">
      <div class="xlb-title-2">普通用法</div>
      <el-collapse v-model="inputs.collapse1">
        <el-collapse-item title="Title1" name="1">
          <div class="xlb-title-3">item1</div>
        </el-collapse-item>
        <el-collapse-item title="Title2" name="2">
          <div class="xlb-title-3">item2</div>
        </el-collapse-item>
        <el-collapse-item title="Title3" name="3">
          <div class="xlb-title-3">item3</div>
        </el-collapse-item>
      </el-collapse>
    </copyText>
    <div class="xlb-space-h"></div>
    <!-- 手风琴效果 -->
    <copyText :copy-text="inputs.collapse2Text">
      <div class="xlb-title-2">手风琴效果</div>
      <el-collapse accordion v-model="inputs.collapse2">
        <el-collapse-item title="Title1" name="1">
          <div class="xlb-title-3">item1</div>
        </el-collapse-item>
        <el-collapse-item title="Title2" name="2">
          <div class="xlb-title-3">item2</div>
        </el-collapse-item>
        <el-collapse-item title="Title3" name="3">
          <div class="xlb-title-3">item3</div>
        </el-collapse-item>
      </el-collapse>
    </copyText>
    <div class="xlb-space-h"></div>
    <!-- 自定义面板标题 -->
    <copyText :copy-text="inputs.collapse3Text">
      <div class="xlb-title-2">自定义面板标题</div>
      <el-collapse accordion v-model="inputs.collapse3">
        <el-collapse-item name="1">
          <template #title>
            Consistency<el-icon class="header-icon">
              <info-filled />
            </el-icon>
          </template>
          <div class="xlb-title-3">item1</div>
        </el-collapse-item>
        <el-collapse-item title="Title2" name="2">
          <div class="xlb-title-3">item2</div>
        </el-collapse-item>
        <el-collapse-item title="Title3" name="3">
          <div class="xlb-title-3">item3</div>
        </el-collapse-item>
      </el-collapse>
    </copyText>
  </div>
</template>

<script name="CollapseElement" setup>
import { collapse1Text, collapse2Text, collapse3Text } from "./conf";
// data
const inputs = reactive({
  collapse1Text,
  collapse2Text,
  collapse3Text,
});
</script>

<style lang="scss" scoped></style>
