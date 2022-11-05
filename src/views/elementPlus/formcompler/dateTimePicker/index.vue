<!--
 * @Author: BORING GHOST
 * @Date: 2022-09-05 14:29:00
 * @LastEditTime: 2022-09-05 14:58:33
 * @Description: 
-->
<template>
  <div>
    <!-- 基础使用 -->
    <div>
      <div class="xlb-title-2">基础使用</div>
      <el-date-picker
        v-model="vpicker"
        type="datetime"
        style="margin-bottom: 10px"
      />
    </div>
    <!-- 指定格式 -->
    <el-row :gutter="20" class="xlb-row">
      <el-col :sm="8" :xs="24">
        <span style="height: 20px; background-color: teal" class="xlb-col-box">
          <div class="xlb-title-3">value-format:default</div>
          <div class="xlb-title-null">{{ vpicker }}</div>
          <el-date-picker v-model="vpicker" type="datetime"></el-date-picker>
        </span>
      </el-col>
      <el-col :sm="8" :xs="24">
        <span style="height: 20px; background-color: teal" class="xlb-col-box">
          <div class="xlb-title-3">value-format:YYYY-MM-DD h:m:s a</div>
          <div class="xlb-title-null">{{ vpicker2 }}</div>
          <el-date-picker
            v-model="vpicker2"
            type="datetime"
            format="YYYY/MM/DD hh:mm:ss"
            value-format="YYYY-MM-DD h:m:s a"
          ></el-date-picker>
        </span>
      </el-col>
      <el-col :sm="8" :xs="24">
        <span style="height: 20px; background-color: teal" class="xlb-col-box">
          <div class="xlb-title-3">value-format:x</div>
          <div class="xlb-title-null">{{ vpicker3 }}</div>
          <el-date-picker
            v-model="vpicker3"
            type="datetime"
            format="YYYY/MM/DD hh:mm:ss"
            value-format="x"
          ></el-date-picker>
        </span>
      </el-col>
    </el-row>
    <!-- 日期和时间范围 -->
    <div>
      <div class="xlb-title-2">日期和时间范围</div>
      <el-date-picker
        v-model="vpickertime"
        type="datetimerange"
        unlink-panels
      ></el-date-picker>
    </div>
  </div>
</template>

<script name="DateTimePickerElement" setup>
//data
const vpickertime = ref("");
const vpicker = ref("");
const vpicker2 = ref("");
const vpicker3 = ref("");
</script>

<style lang="scss" scoped></style>
