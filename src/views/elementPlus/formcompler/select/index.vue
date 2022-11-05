<!--
 * @Author: BORING GHOST
 * @Date: 2022-09-13 14:42:11
 * @LastEditTime: 2022-09-13 15:33:35
 * @Description: 
-->
<template>
  <div>
    <!-- 基础多选 -->
    <el-space fill :class="spaceClasslist">
      <div
        v-copyText="inputs.select1Text"
        v-copyText:callback="copyTextSuccess"
        class="xlb-button-copy xlb-son-right-top"
      >
        复制
      </div>
      <div class="xlb-title-2">基础多选可清空</div>
      <el-select v-model="inputs.select1" multiple clearable>
        <el-option value="opt1">Opt1</el-option>
        <el-option value="opt2">Opt2</el-option>
        <el-option value="opt3">Opt3</el-option>
      </el-select>
      <el-input
        v-model="inputs.select1Text"
        type="textarea"
        autosize
        :input-style="textarea_style"
      ></el-input>
    </el-space>
    <div class="xlb-space-h"></div>
    <!-- 自定义模板跟分组 -->
    <el-space fill :class="spaceClasslist">
      <div
        v-copyText="inputs.select2Text"
        v-copyText:callback="copyTextSuccess"
        class="xlb-button-copy xlb-son-right-top"
      >
        复制
      </div>
      <div class="xlb-title-2">自定义模板跟分组</div>
      <el-select v-model="inputs.select2">
        <el-option-group label="city">
          <el-option value="city1">City1</el-option>
          <el-option value="city2">
            <span style="float: left">City2</span>
            <span
              style="
                float: right;
                color: var(--el-text-color-secondary);
                font-size: 13px;
              "
            >
              City2
            </span>
          </el-option>
          <el-option value="city3">City3</el-option>
        </el-option-group>
        <el-option-group label="name">
          <el-option value="name1">Name1</el-option>
          <el-option value="name2">Name2</el-option>
          <el-option value="name3">Name3</el-option>
        </el-option-group>
      </el-select>
      <el-input
        v-model="inputs.select2Text"
        autosize
        :input-style="textarea_style"
        type="textarea"
      ></el-input>
    </el-space>
    <div class="xlb-space-h"></div>
    <!-- 创建新的选项 -->
    <el-space fill :class="spaceClasslist">
      <div
        v-copyText="inputs.select3Text"
        v-copyText:callback="copyTextSuccess"
        class="xlb-button-copy xlb-son-right-top"
      >
        复制
      </div>
      <div class="xlb-title-2">创建新的选项(可回车)</div>
      <el-select
        v-model="inputs.select3"
        multiple
        filterable
        allow-create
        default-first-option
      >
        <el-option value="opt1">Opt1</el-option>
        <el-option value="opt2">Opt2</el-option>
        <el-option value="opt3">Opt3</el-option>
      </el-select>
      <el-input
        v-model="inputs.select3Text"
        type="textarea"
        autosize
        :input-style="textarea_style"
      ></el-input>
    </el-space>
  </div>
</template>

<script name="SelectElement" setup>
import { select1Text, select2Text, select3Text } from "./conf";
const { proxy } = getCurrentInstance();
const textarea_style = shallowRef(inject("testarea_style"));
// data
const spaceClasslist = ref("xlb-box-border xlb-box-w xlb-father xlb-shadow");
const inputs = reactive({
  select1Text,
  select2Text,
  select3Text,
});
// methods
const copyTextSuccess = () => {
  proxy.$modal.msgSuccess("复制成功");
};
</script>

<style lang="scss" scoped>
.example-showcase .el-select-v2 {
  margin-right: 20px;
}
</style>
