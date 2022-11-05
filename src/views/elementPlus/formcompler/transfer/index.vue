<!--
 * @Author: BORING GHOST
 * @Date: 2022-09-14 08:29:46
 * @LastEditTime: 2022-09-14 09:41:19
 * @Description: 
-->
<template>
  <div>
    <!-- 普通用法+可搜索 -->
    <copyText :copy-text="inputs.transfer1Text">
      <div class="xlb-title-2">普通用法+可搜索</div>
      <el-transfer
        v-model="inputs.transfer1"
        filterable
        :data="data"
      ></el-transfer>
    </copyText>
    <div class="xlb-space-h"></div>
    <!-- 自定义用法 -->
    <copyText :copy-text="inputs.transfer2Text">
      <div class="xlb-title-2">自定义用法</div>
      <el-transfer
        :data="data"
        v-model="inputs.transfer2"
        :left-default-checked="leftDef"
        :right-default-checked="rightDef"
        :titles="['请选择', '已选择']"
        :button-texts="['去左边', '去右边']"
        filterable
      >
        <template #default="{ option }">
          <span>{{ option.key }} - 自定义label展示</span>
        </template>
        <template #left-footer>
          <el-button class="transfer-footer" size="small">
            左侧底部按钮插槽
          </el-button>
        </template>
        <template #right-footer>
          <el-button class="transfer-footer" size="small">
            右侧侧底部按钮插槽
          </el-button>
        </template>
      </el-transfer>
    </copyText>
  </div>
</template>

<script name="TransferElement" setup>
import { transfer1Text, transfer2Text } from "./conf";
// data
const data = ref([
  {
    key: "value",
    label: "Label",
    disabled: false,
  },
  {
    key: "value2",
    label: "Label2",
    disabled: false,
  },
  {
    key: "value3",
    label: "Label3",
    disabled: true,
  },
  {
    key: "value4",
    label: "Label4",
    disabled: false,
  },
  {
    key: "value5",
    label: "Label5",
    disabled: false,
  },
  {
    key: "value6",
    label: "Label6",
    disabled: false,
  },
]);
const leftDef = ref(["value4", "value5"]);
const rightDef = ref(["value2"]);
const inputs = reactive({
  transfer1Text,
  transfer2Text,
  transfer2: ["value2"],
});
</script>

<style lang="scss" scoped></style>
