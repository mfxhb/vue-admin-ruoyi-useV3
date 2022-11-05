/*
 * @Author: BORING GHOST
 * @Date: 2022-09-13 13:54:44
 * @LastEditTime: 2022-09-13 14:39:33
 * @Description:
 */
export const rate1Text = `<el-rate v-model="inputs.rate1" :colors="colors"></el-rate>`;

export const rate2Text = `<el-rate v-model="inputs.rate2" size="small" allow-half></el-rate>`;

export const rate3Text = `<el-rate v-model="inputs.rate3" show-text :texts="['oops', 'disappointed', 'normal', 'good', 'great']"></el-rate>`;

export const rate4Text = `<el-rate v-model="inputs.rate4" :icons="icons" void-icon="ChatRound">
</el-rate>`;

export const rate5Text = `<el-rate v-model="inputs.rate4" disabled :icons="icons" show-score void-icon="ChatRound">
</el-rate>`;
