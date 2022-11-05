/*
 * @Author: BORING GHOST
 * @Date: 2022-09-14 08:36:41
 * @LastEditTime: 2022-09-14 09:42:24
 * @Description:
 */
export const transfer1Text = `<el-transfer v-model="inputs.transfer1" filterable :data="data"></el-transfer>`;

export const transfer2Text = `
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
</el-transfer>`;
