<!--
 * @Author: BORING GHOST
 * @Date: 2022-09-08 10:26:58
 * @LastEditTime: 2022-09-08 17:24:58
 * @Description: 
-->
<template>
  <div>
    <!-- 基础用法 -->
    <el-space
      style="overflow: hidden"
      fill
      class="xlb-shadow xlb-box-border xlb-box-w xlb-father"
    >
      <div
        v-copyText="inputs.input1Text"
        v-copyText:callback="copyTextSuccess"
        class="xlb-son-right-top xlb-button-copy"
      >
        复制
      </div>
      <div class="xlb-title-2">基础用法</div>
      <el-input-number v-model="inputs.input1"></el-input-number>
      <el-input
        v-model="inputs.input1Text"
        type="textarea"
        readonly
        autosize
        :input-style="textarea_style"
      ></el-input>
    </el-space>
    <div class="xlb-space-h"></div>
    <!-- 禁用状态 -->
    <el-space fill class="xlb-shadow xlb-box-border xlb-box-w xlb-father">
      <div
        v-copyText="inputs.input2Text"
        v-copyText:callback="copyTextSuccess"
        class="xlb-son-right-top xlb-button-copy"
      >
        复制
      </div>
      <div class="xlb-title-2">禁用状态</div>
      <el-input-number v-model="inputs.input2" disabled></el-input-number>
      <el-input
        v-model="inputs.input2Text"
        type="textarea"
        autosize
        :input-style="textarea_style"
      ></el-input>
    </el-space>
    <div class="xlb-space-h"></div>
    <!-- 步进属性,step步长 -->
    <el-space fill class="xlb-shadow xlb-box-border xlb-box-w xlb-father">
      <div
        v-copyText="inputs.input3Text"
        v-copyText:callback="copyTextSuccess"
        class="xlb-son-right-top xlb-button-copy"
      >
        复制
      </div>
      <div class="xlb-title-2">步进属性step步长</div>
      <el-input-number :step="5" v-model="inputs.input3"></el-input-number>
      <el-input
        type="textarea"
        v-model="inputs.input3Text"
        autosize
        :input-style="textarea_style"
      ></el-input>
    </el-space>
    <div class="xlb-space-h"></div>
    <!-- 严格步进 -->
    <el-space fill class="xlb-shadow xlb-box-border xlb-box-w xlb-father">
      <div
        v-copyText="inputs.input4Text"
        v-copyText:callback="copyTextSuccess"
        class="xlb-son-right-top xlb-button-copy"
      >
        复制
      </div>
      <div class="xlb-title-2">严格步进,输出只能是这个数值的倍数</div>
      <el-input-number
        v-model="inputs.input4"
        :step="5"
        step-strictly
      ></el-input-number>
      <el-input
        v-model="inputs.input4Text"
        type="textarea"
        autosize
        :input-style="textarea_style"
      ></el-input>
    </el-space>
    <div class="xlb-space-h"></div>
    <!-- 精度值 -->
    <el-space fill class="xlb-shadow xlb-box-border xlb-box-w xlb-father">
      <div
        v-copyText="inputs.input5Text"
        v-copyText:callback="copyTextSuccess"
        class="xlb-son-right-top xlb-button-copy"
      >
        复制
      </div>
      <div class="xlb-title-2">精度值,小数位</div>
      <el-input-number
        v-model="inputs.input5"
        :step="0.1"
        :precision="3"
      ></el-input-number>
      <el-input
        v-model="inputs.input5Text"
        type="textarea"
        autosize
        :input-style="textarea_style"
      ></el-input>
    </el-space>
    <!-- 按钮的位置 -->
    <el-space fill class="xlb-shadow xlb-box-border xlb-box-w xlb-father">
      <div
        v-copyText="inputs.input6Text"
        v-copyText:callback="copyTextSuccess"
        class="xlb-son-right-top xlb-button-copy"
      >
        复制
      </div>
      <div class="xlb-title-2">按钮的位置</div>
      <el-input-number
        v-model="inputs.input6"
        controls-position="right"
      ></el-input-number>
      <el-input
        v-model="inputs.input6Text"
        type="textarea"
        autosize
        :input-style="textarea_style"
      ></el-input>
    </el-space>
  </div>
</template>

<script name="NumberInputElement" setup>
import {
  input1Text,
  input2Text,
  input3Text,
  input4Text,
  input5Text,
  input6Text,
} from "../numberInput/conf";
const { proxy } = getCurrentInstance();
const textarea_style = shallowRef(inject("testarea_style"));
// data
const inputs = reactive({
  input1Text,
  input2Text,
  input3Text,
  input4Text,
  input5Text,
  input6Text,
});
// methods
const copyTextSuccess = () => {
  proxy.$modal.msgSuccess("复制成功");
};
</script>

<style lang="scss" scoped></style>
