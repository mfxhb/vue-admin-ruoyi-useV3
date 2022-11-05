<!--
 * @Author: BORING GHOST
 * @Date: 2022-09-13 10:56:56
 * @LastEditTime: 2022-09-13 11:22:56
 * @Description: 
-->
<template>
  <div>
    <!-- 普通用法 -->
    <el-space fill class="xlb-box-border xlb-box-w xlb-father xlb-shadow">
      <div
        v-copyText="inputs.radio1Text"
        v-copyText:callback="copyTextSuccess"
        class="xlb-button-copy xlb-son-right-top"
      >
        复制
      </div>
      <div class="xlb-title-2">普通用法</div>
      <el-radio-group v-model="inputs.vradio">
        <el-radio border label="label1">Option1</el-radio>
        <el-radio border label="label2">Option2</el-radio>
      </el-radio-group>
      <el-radio-group v-model="inputs.vradio">
        <el-radio border size="small" label="label1">Option1</el-radio>
        <el-radio border size="small" label="label2">Option2</el-radio>
      </el-radio-group>
      <el-input
        v-model="inputs.radio1Text"
        type="textarea"
        autosize
        :input-style="testarea_style"
      ></el-input>
    </el-space>
    <div class="xlb-space-h"></div>
    <!-- 按钮样式 -->
    <el-space fill class="xlb-box-border xlb-box-w xlb-father xlb-shadow">
      <div
        v-copyText="inputs.radio2Text"
        v-copyText:callback="copyTextSuccess"
        class="xlb-button-copy xlb-son-right-top"
      >
        复制
      </div>
      <div class="xlb-title-2">按钮样式</div>
      <el-radio-group size="small" v-model="inputs.radio2">
        <el-radio-button label="value1">Option1</el-radio-button>
        <el-radio-button label="value2" disabled>Option2</el-radio-button>
        <el-radio-button label="value3">Option3</el-radio-button>
        <el-radio-button label="value4">Option4</el-radio-button>
        <el-radio-button label="value5">Option5</el-radio-button>
      </el-radio-group>
      <el-input
        v-model="inputs.radio2Text"
        type="textarea"
        autosize
        :input-style="testarea_style"
      ></el-input>
    </el-space>
  </div>
</template>

<script name="RadioElement" setup>
import { radio1Text, radio2Text } from "./conf";
const { proxy } = getCurrentInstance();
// data
const testarea_style = shallowRef(inject("testarea_style"));
const inputs = reactive({
  radio1Text,
  radio2Text,
});
// methods
const copyTextSuccess = () => {
  proxy.$modal.msgSuccess("复制成功");
};
</script>

<style lang="scss" scoped></style>
