<!--
 * @Author: BORING GHOST
 * @Date: 2022-09-01 14:12:16
 * @LastEditTime: 2022-09-01 14:24:49
 * @Description: 
-->
<template>
  <div>
    <div class="xlb-title-2">local属性</div>
    <el-button @click="toggle">切换</el-button>
    <el-config-provider :locale="locale">
      <el-pagination :total="100" />
    </el-config-provider>
  </div>
</template>

<script name="ProviderElement" setup>
/* module */
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import en from "element-plus/dist/locale/en.mjs";
/* data */
const language = ref("zh-cn");
const locale = computed(() => (language.value === "zh-cn" ? zhCn : en));
/* methods */
function toggle() {
  language.value = language.value === "zh-cn" ? "en" : "zh-cn";
}
</script>

<style lang="scss" scoped></style>
