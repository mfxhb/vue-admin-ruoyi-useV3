<!--
 * @Author: BORING GHOST
 * @Date: 2022-09-13 15:43:52
 * @LastEditTime: 2022-09-13 16:02:33
 * @Description: 
-->
<template>
  <div>
    <!-- 基础使用跟格式化 -->
    <el-space fill :class="spaceClasslist">
      <div
        v-copyText="inputs.slider1Text"
        v-copyText:callback="copyTextSuccess"
        class="xlb-button-copy xlb-son-right-top"
      >
        复制
      </div>
      <div class="xlb-title-2">基础使用跟格式化</div>
      <el-slider
        v-model="inputs.slider1"
        :format-tooltip="formatTooltip"
      ></el-slider>
      <el-input
        type="textarea"
        v-model="inputs.slider1Text"
        autosize
        :input-style="textarea_style"
      ></el-input>
    </el-space>
    <!-- 选择范围+显示标记 -->
    <el-space fill :class="spaceClasslist">
      <div
        v-copyText="inputs.slider2Text"
        v-copyText:callback="copyTextSuccess"
        class="xlb-button-copy xlb-son-right-top"
      >
        复制
      </div>
      <div class="xlb-title-2">选择范围+显示标记</div>
      <el-slider v-model="inputs.slider2" range :marks="marks"></el-slider>
      <el-input
        type="textarea"
        v-model="inputs.slider2Text"
        autosize
        :input-style="textarea_style"
      ></el-input>
    </el-space>
  </div>
</template>

<script name="SliderElement" setup>
import { slider1Text, slider2Text } from "./conf";
const { proxy } = getCurrentInstance();
const textarea_style = shallowRef(inject("testarea_style"));
// data
const marks = reactive({
  0: "0°C",
  8: "8°C",
  37: "37°C",
  50: {
    style: {
      color: "#1989FA",
    },
    label: "50%",
  },
});
const spaceClasslist = ref("xlb-box-border xlb-box-w xlb-father xlb-shadow");
const inputs = reactive({
  slider1Text,
  slider2Text,
  slider2: [3, 6],
});

// methods
const formatTooltip = (val) => {
  return val / 100;
};
const copyTextSuccess = () => {
  proxy.$modal.msgSuccess("复制成功");
};
</script>

<style lang="scss" scoped></style>
