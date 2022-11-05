/*
 * @Author: BORING GHOST
 * @Date: 2022-09-08 10:35:46
 * @LastEditTime: 2022-09-08 11:46:03
 * @Description:
 */
export const input1Text = `<el-input-number v-model="inputs.input1"></el-input-number>`;

export const input2Text = `<el-input-number v-model="inputs.input2" disabled></el-input-number>`;

export const input3Text = `<el-input-number :step="5" v-model="inputs.input3"></el-input-number>`;

export const input4Text = `<el-input-number v-model="inputs.input4" :step="5" step-strictly></el-input-number>`;

export const input5Text = `<el-input-number v-model="inputs.input5" :step="0.1" :precision="3"></el-input-number>`;

export const input6Text = `<el-input-number v-model="inputs.input6" controls-position="right"></el-input-number>`;
