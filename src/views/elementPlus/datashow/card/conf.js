/*
 * @Author: BORING GHOST
 * @Date: 2022-09-14 17:01:11
 * @LastEditTime: 2022-09-14 17:18:16
 * @Description:
 */
export const card1Text = `
<el-card>
<template #header>
  <div class="card-header">
    <span>Card name</span>
    <el-button class="button" text>Operation button</el-button>
  </div>
</template>
Card Content!
</el-card>
`;

export const card2Text = `<el-card>Card Content!</el-card>`;

export const card3Text = `
<el-row>
<el-col :span="8">
  <el-card shadow="always">Always</el-card>
</el-col>
<el-col :span="8">
  <el-card shadow="hover">Hlways</el-card>
</el-col>
<el-col :span="8">
  <el-card shadow="never">Never</el-card>
</el-col>
</el-row>
`;
