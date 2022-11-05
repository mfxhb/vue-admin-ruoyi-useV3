<!--
 * @Author: BORING GHOST
 * @Date: 2022-09-05 09:41:41
 * @LastEditTime: 2022-09-05 10:13:28
 * @Description: 
-->
<template>
  <div>
    <!-- 基础用法 -->
    <div>
      <div class="xlb-title-2">基础用法</div>
      <el-color-picker @change="pickerChangeEvent" v-model="vcolor" />
    </div>
    <!-- 允许选择透明度 -->
    <div>
      <div class="xlb-title-2">允许选择透明度</div>
      <el-color-picker
        @change="pickerChangeEvent"
        show-alpha
        v-model="vcolor2"
      />
    </div>
    <!-- 预定义颜色 -->
    <div>
      <div class="xlb-title-2">预定义颜色</div>
      <el-color-picker
        @change="pickerChangeEvent"
        v-model="vcolor3"
        :predefine="predefineList"
      />
    </div>
    <!-- 不同尺寸 -->
    <div>
      <div class="xlb-title-2">不同尺寸</div>
      <el-color-picker
        @change="pickerChangeEvent"
        v-model="vcolor3"
        size="large"
      />
      <el-color-picker
        @change="pickerChangeEvent"
        v-model="vcolor3"
        size="default"
      />

      <el-color-picker
        @change="pickerChangeEvent"
        v-model="vcolor3"
        size="small"
      />
    </div>
  </div>
</template>

<script name="ColorPickerElement" setup>
import { elementPlusApi } from "~/mock/modules/element-plus/index";
// data
const vcolor = ref("");
const vcolor2 = ref("");
const vcolor3 = ref("");
const predefineList = ref([]);

// methods
const dataListApis = async () => {
  let { predefineColors } = await elementPlusApi("colorPicker");
  predefineList.value = predefineColors;
  console.log(predefineColors);
};
const pickerChangeEvent = (v) => {
  console.log(v);
};

dataListApis();
</script>

<style lang="scss" scoped></style>
