<!--
 * @Author: BORING GHOST
 * @Date: 2022-09-14 16:46:32
 * @LastEditTime: 2022-09-14 17:34:10
 * @Description: 
-->
<template>
  <div>
    <!-- 普通插槽用法 -->
    <copyText :copy-text="inputs.card1Text">
      <div class="xlb-title-2">普通插槽用法</div>
      <el-card>
        <template #header>
          <div class="card-header">
            <span>Card name</span>
            <el-button class="button" text>Operation button</el-button>
          </div>
        </template>
        Card Content!
      </el-card>
    </copyText>
    <div class="xlb-space-h"></div>
    <!-- 不显示头部 -->
    <copyText :copy-text="inputs.card2Text">
      <div class="xlb-title-2">不显示头部</div>
      <el-card>Card Content!</el-card>
    </copyText>
    <div class="xlb-space-h"></div>
    <!-- 带有阴影的卡片效果 -->
    <copyText :copy-text="inputs.card3Text">
      <div class="xlb-title-2">带有阴影的卡片效果</div>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-card shadow="always">Always</el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="hover">Hlways</el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="never">Never</el-card>
        </el-col>
      </el-row>
    </copyText>
  </div>
</template>

<script name="CardElement" setup>
import { card1Text, card2Text, card3Text } from "./conf";
// data
const inputs = reactive({
  card1Text,
  card2Text,
  card3Text,
});
</script>

<style lang="scss" scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
}
</style>
