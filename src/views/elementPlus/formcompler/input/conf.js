/*
 * @Author: BORING GHOST
 * @Date: 2022-09-07 11:24:25
 * @LastEditTime: 2022-09-08 10:21:41
 * @Description:
 */
export const input1Text = `<el-input v-model="inputs.input1"></el-input>`;

export const input2Text = `<el-input v-model="inputs.input2" disabled></el-input>`;

export const input3Text = `<el-input v-model="inputs.input3" clearable></el-input>`;

export const input4Text = `<el-input v-model="inputs.input4" show-password></el-input>`;

export const input5Text = `<el-input v-model="inputs.input5" suffix-icon="House" prefix-icon="Search"></el-input>`;

export const input6Text = `<el-input v-model="inputs.input6">
<template #prepend>http://</template>
<template #append>
  <el-select v-model="inputs.select">
    <el-option label="option1" value="option1"></el-option>
    <el-option label="option2" value="option2"></el-option>
  </el-select>
</template>
</el-input>`;
