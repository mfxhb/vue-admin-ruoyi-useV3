<!--
 * @Author: BORING GHOST
 * @Date: 2022-09-13 16:04:29
 * @LastEditTime: 2022-09-13 16:37:57
 * @Description: 
-->
<template>
  <div>
    <!-- 自定义图标,内外显示 -->
    <copyText :copy-text="inputs.switch1Text">
      <div class="xlb-title-2">自定义图标,内外显示</div>
      <el-switch
        v-model="inputs.switch1"
        active-icon="Check"
        inactive-icon="Close"
      ></el-switch>
      <el-switch
        v-model="inputs.switch1"
        active-icon="Check"
        inline-prompt
        inactive-icon="Close"
      ></el-switch>
    </copyText>
    <div class="xlb-space-h"></div>
    <!-- 开关的值跟阻止切换 -->
    <copyText :copy-text="inputs.switch2Text">
      <div class="xlb-title-2">开关的值跟阻止切换</div>
      <el-switch
        v-model="inputs.switch2"
        :loading="loading"
        :before-change="beforeChange1"
      ></el-switch>
    </copyText>
  </div>
</template>

<script name="SwitchElement" setup>
import { switch1Text, switch2Text } from "./conf";

// data
const { proxy } = getCurrentInstance();
const inputs = reactive({
  switch1Text,
  switch2Text,
});
const loading = ref(false);
// methods
const beforeChange1 = () => {
  loading.value = true;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      loading.value = false;
      proxy.$modal.msgSuccess("通过");
      resolve(true);
    }, 1500);
  });
};
</script>

<style lang="scss" scoped></style>
