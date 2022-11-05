<!--
 * @Author: BORING GHOST
 * @Date: 2022-09-14 16:29:54
 * @LastEditTime: 2022-09-14 16:42:19
 * @Description: 
-->
<template>
  <div>
    <!-- 自定义日历的头部 -->
    <div class="xlb-title-3">{{ value }}</div>
    <el-calendar v-model="value" ref="calendar">
      <template #header="{ date }">
        <span>Custom header content</span>
        <span>{{ date }}</span>
      </template>
    </el-calendar>
  </div>
</template>

<script name="CalendarElement" setup>
const value = ref(new Date());
const calendar = ref();
</script>

<style lang="scss" scoped></style>
