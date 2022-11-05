<!--
 * @Author: BORING GHOST
 * @Date: 2022-09-15 09:33:21
 * @LastEditTime: 2022-09-15 10:08:12
 * @Description: 
-->
<template>
  <div>
    <!-- 普通用法 -->
    <copyText :copy-text="inputs.description1Text">
      <div class="xlb-title-2">普通用法</div>
      <el-descriptions title="Description1">
        <el-descriptions-item label="Label1">safwerw</el-descriptions-item>
        <el-descriptions-item label="Label2">safwsderw</el-descriptions-item>
        <el-descriptions-item label="Label3">asdsafwsderw</el-descriptions-item>
        <el-descriptions-item label="Label4">
          121asdsafwsderw
        </el-descriptions-item>
      </el-descriptions>
    </copyText>
    <div class="xlb-space-h"></div>
    <div>{{ inputs.description2Size }}</div>
    <!-- 不同尺寸+边框 -->
    <copyText :copy-text="inputs.description2Text">
      <div class="xlb-title-2">不同尺寸+边框</div>
      <span style="color: red; margin-left: 10px">BUG 无效</span>
      <el-col align="center" :span="24">
        <el-radio-group v-model="size">
          <el-radio label="large">Large</el-radio>
          <el-radio>Default</el-radio>
          <el-radio label="small">Small</el-radio>
        </el-radio-group>
      </el-col>
      <el-descriptions
        direction="vertical"
        :size="size"
        :column="2"
        border
        title="Description1"
      >
        <el-descriptions-item label="Label1">safwerw</el-descriptions-item>
        <el-descriptions-item label="Label2">safwsderw</el-descriptions-item>
        <el-descriptions-item label="Label3">asdsafwsderw</el-descriptions-item>
        <el-descriptions-item label="Label4">
          121asdsafwsderw
        </el-descriptions-item>
      </el-descriptions>
    </copyText>
    <div class="xlb-space-h"></div>
  </div>
</template>

<script name="DescriptionsElement" setup>
import { description1Text, description2Text } from "./conf";
// data
const size = ref("");
const inputs = reactive({
  description1Text,
  description2Text,
  description2Size: "",
});
</script>

<style lang="scss" scoped></style>
