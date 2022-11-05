<!--
 * @Author: BORING GHOST
 * @Date: 2022-09-15 14:41:08
 * @LastEditTime: 2022-09-15 15:18:47
 * @Description: 
-->
<template>
  <div>
    <!-- 直线进度条+不同状态 -->
    <copyText :copy-text="inputs.progress1Text">
      <div class="xlb-title-2">直线进度条+不同状态</div>
      <el-progress :percentage="50"></el-progress>
      <el-progress :percentage="100" status="success" />
      <el-progress :percentage="100" status="warning" />
      <el-progress :percentage="50" status="exception" />
    </copyText>
    <div class="xlb-space-h"></div>
    <!-- 进度条的高度+文字内部显示 -->
    <copyText :copy-text="inputs.progress2Text">
      <div class="xlb-title-2">直线进度条+不同状态</div>
      <el-progress
        :text-inside="true"
        :stroke-width="26"
        :percentage="50"
      ></el-progress>
      <el-progress
        :text-inside="true"
        :stroke-width="26"
        :percentage="100"
        status="success"
      />
      <el-progress
        :text-inside="true"
        :stroke-width="26"
        :percentage="100"
        status="warning"
      />
      <el-progress
        :text-inside="true"
        :stroke-width="26"
        :percentage="50"
        status="exception"
      />
    </copyText>
    <div class="xlb-space-h"></div>
    <!-- 环形进度条 -->
    <copyText :copy-text="inputs.progress3Text">
      <div class="xlb-title-2">环形进度条</div>
      <el-space>
        <el-progress type="dashboard" :percentage="50"></el-progress>
        <el-progress type="dashboard" :percentage="100" status="success" />
        <el-progress type="dashboard" :percentage="100" status="warning" />
        <el-progress type="dashboard" :percentage="50" status="exception" />
      </el-space>
    </copyText>
    <div class="xlb-space-h"></div>
    <!-- 动画进度条 -->
    <copyText :copy-text="inputs.progress4Text">
      <div class="xlb-title-2">动画进度条</div>
      <el-space fill>
        <el-progress :indeterminate="true" :percentage="50"></el-progress>
        <el-progress
          :duration="5"
          :indeterminate="true"
          :percentage="100"
          status="success"
        />
        <el-progress
          :duration="1"
          :indeterminate="true"
          :percentage="100"
          status="warning"
        />
        <el-progress
          :indeterminate="true"
          :percentage="50"
          status="exception"
        />
      </el-space>
    </copyText>
  </div>
</template>

<script name="ProgressElement" setup>
import {
  progress1Text,
  progress2Text,
  progress3Text,
  progress4Text,
} from "./conf";
// data
const inputs = reactive({
  progress1Text,
  progress2Text,
  progress3Text,
  progress4Text,
});
</script>

<style lang="scss" scoped></style>
