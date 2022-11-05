<!--
 * @Author: BORING GHOST
 * @Date: 2022-09-13 16:39:24
 * @LastEditTime: 2022-09-13 16:50:11
 * @Description: 
-->
<template>
  <div>
    <!-- 任意时间范围 -->
    <copyText :copy-text="inputs.time1Text">
      <div class="xlb-title-2">任意时间范围</div>
      <el-time-picker v-model="inputs.time1" is-range></el-time-picker>
    </copyText>
    <div class="xlb-space-h"></div>
    <!-- 固定时间点,步长,起始结束时间 -->
    <copyText :copy-text="inputs.time2Text">
      <div class="xlb-title-2">固定时间点,步长,起始结束时间</div>
      <el-time-select
        v-model="inputs.time2"
        start="08:30"
        step="00:15"
        end="18:30"
      ></el-time-select>
    </copyText>
    <div class="xlb-space-h"></div>
    <!-- 固定时间范围跟格式 -->
    <copyText :copy-text="inputs.time3Text">
      <div class="xlb-title-2">固定时间点,步长,起始结束时间</div>
      <el-time-select
        v-model="inputs.time3"
        start="08:30"
        step="00:15"
        end="18:30"
        format="hh:mm A"
      ></el-time-select>
      <el-time-select
        v-model="inputs.time4"
        start="08:30"
        step="00:15"
        end="18:30"
      ></el-time-select>
    </copyText>
  </div>
</template>

<script name="TimePickerElement" setup>
import { time1Text, time2Text, time3Text } from "./conf";
// data
const inputs = reactive({
  time1Text,
  time2Text,
  time3Text,
});
</script>

<style lang="scss" scoped></style>
