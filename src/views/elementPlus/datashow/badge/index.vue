<!--
 * @Author: BORING GHOST
 * @Date: 2022-09-14 15:47:39
 * @LastEditTime: 2022-09-14 16:27:04
 * @Description: 
-->
<template>
  <div>
    <!-- 基础用法 -->
    <copyText :copy-text="inputs.badge1Text">
      <div class="xlb-title-2">基础用法</div>
      <el-col :span="1">
        <el-badge value="123">123</el-badge>
      </el-col>
    </copyText>
    <div class="xlb-space-h"></div>
    <!-- 小红点 -->
    <copyText :copy-text="inputs.badge2Text">
      <div class="xlb-title-2">小红点</div>
      <el-col :span="1">
        <el-badge is-dot>123</el-badge>
      </el-col>
    </copyText>
  </div>
</template>

<script name="BadgeElement" setup>
// data
const inputs = reactive({});
</script>

<style lang="scss" scoped></style>
