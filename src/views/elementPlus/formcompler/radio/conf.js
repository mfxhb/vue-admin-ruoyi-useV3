/*
 * @Author: BORING GHOST
 * @Date: 2022-09-13 11:06:43
 * @LastEditTime: 2022-09-13 11:22:05
 * @Description:
 */
export const radio1Text = `
<el-radio-group v-model="inputs.vradio">
  <el-radio border label="label1">Option1</el-radio>
  <el-radio border label="label2">Option2</el-radio>
</el-radio-group>
<el-radio-group v-model="inputs.vradio">
  <el-radio border size="small" label="label1">Option1</el-radio>
  <el-radio border size="small" label="label2">Option2</el-radio>
</el-radio-group>`;

export const radio2Text = `
<el-radio-group size="small" v-model="inputs.radio2">
    <el-radio-button label="value1">Option1</el-radio-button>
    <el-radio-button label="value2" disabled>Option2</el-radio-button>
    <el-radio-button label="value3">Option3</el-radio-button>
    <el-radio-button label="value4">Option4</el-radio-button>
    <el-radio-button label="value5">Option5</el-radio-button>
</el-radio-group>`;
