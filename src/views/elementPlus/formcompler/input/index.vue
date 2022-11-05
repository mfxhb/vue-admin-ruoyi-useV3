<!--
 * @Author: BORING GHOST
 * @Date: 2022-09-06 16:15:00
 * @LastEditTime: 2022-09-08 10:25:40
 * @Description: 
-->
<template>
  <div>
    <!-- 基础用法 -->
    <el-space
      class="xlb-father xlb-box-border xlb-box-w"
      fill
      direction="vertical"
    >
      <div
        type="primary"
        class="xlb-son-right-top xlb-button-copy"
        v-copyText="inputs.input1Text"
        v-copyText:callback="copyTextSuccess"
      >
        复制
      </div>
      <div class="xlb-title-2">基础用法</div>
      <el-input v-model="inputs.input1"></el-input>
      <el-input
        readonly
        autosize
        :input-style="textarea_style"
        v-model="inputs.input1Text"
        type="textarea"
      ></el-input>
    </el-space>
    <!-- 禁用属性 -->
    <el-space
      fill
      class="xlb-father xlb-box-border xlb-box-w"
      direction="vertical"
    >
      <div
        type="primary"
        class="xlb-son-right-top xlb-button-copy"
        v-copyText="inputs.input2Text"
        v-copyText:callback="copyTextSuccess"
      >
        复制
      </div>
      <div class="xlb-title-2">禁用属性Disabled</div>
      <el-input v-model="inputs.input2" disabled></el-input>
      <el-input
        autosize
        :input-style="textarea_style"
        type="textarea"
        v-model="inputs.input2Text"
      ></el-input>
    </el-space>
    <!-- 可清空的 -->
    <el-space fill class="xlb-box-border xlb-box-w xlb-father">
      <div
        v-copyText="inputs.input3Text"
        v-copyText:callback="copyTextSuccess"
        class="xlb-button-copy xlb-son-right-top"
      >
        复制
      </div>
      <div class="xlb-title-2">可清空的</div>
      <el-input v-model="inputs.input3" clearable></el-input>
      <el-input
        readonly
        autosize
        :input-style="textarea_style"
        type="textarea"
        v-model="inputs.input3Text"
      ></el-input>
    </el-space>
    <!-- 密码框 -->
    <el-space fill class="xlb-father xlb-box-border xlb-box-w">
      <div
        v-copyText="inputs.input4Text"
        v-copyText:callback="copyTextSuccess"
        class="xlb-button-copy xlb-son-right-top"
      >
        复制
      </div>
      <div class="xlb-title-2">密码框</div>
      <el-input v-model="inputs.input4" show-password></el-input>
      <el-input
        v-model="inputs.input4Text"
        type="textarea"
        autosize
        :input-style="textarea_style"
      ></el-input>
    </el-space>
    <!-- 带图标的input -->
    <el-space fill class="xlb-father xlb-box-border xlb-box-w">
      <div
        v-copyText="inputs.input5Text"
        v-copyText:callback="copyTextSuccess"
        class="xlb-button-copy xlb-son-right-top"
      >
        复制
      </div>
      <div class="xlb-title-2">带图标的input</div>
      <el-input
        v-model="inputs.input5"
        suffix-icon="House"
        prefix-icon="Search"
      ></el-input>
      <el-input
        v-model="inputs.input5Text"
        type="textarea"
        autosize
        :input-style="textarea_style"
      ></el-input>
    </el-space>
    <!-- 复合型input框 -->
    <el-space fill class="xlb-father xlb-box-border xlb-box-w">
      <div
        v-copyText="inputs.input6Text"
        v-copyText:callback="copyTextSuccess"
        class="xlb-button-copy xlb-son-right-top"
      >
        复制
      </div>
      <div class="xlb-title-2">复合型input框</div>
      <el-input v-model="inputs.input6">
        <template #prepend>http://</template>
        <template #append>
          <el-select
            placeholder="Select"
            style="width: 150px"
            v-model="inputs.select"
          >
            <el-option label="option1" value="option1"></el-option>
            <el-option label="option2" value="option2"></el-option>
          </el-select>
        </template>
      </el-input>
      <el-input
        v-model="inputs.input6Text"
        type="textarea"
        autosize
        :input-style="textarea_style"
      ></el-input>
    </el-space>
  </div>
</template>

<script name="InputElement" setup>
import {
  input1Text,
  input2Text,
  input3Text,
  input4Text,
  input5Text,
  input6Text,
} from "./conf";
const textarea_style = shallowRef(inject("testarea_style"));

// data
const inputs = reactive({
  input1Text: input1Text,
  input2Text,
  input3Text,
  input4Text,
  input5Text,
  input6Text,
});
const { proxy } = getCurrentInstance();
// methods
/** 复制代码成功 */
function copyTextSuccess() {
  proxy.$modal.msgSuccess("复制成功");
}
</script>

<style lang="scss" scoped></style>
