/*
 * @Author: BORING GHOST
 * @Date: 2022-09-13 14:48:00
 * @LastEditTime: 2022-09-13 15:14:41
 * @Description:
 */
export const select1Text = `
<el-select v-model="inputs.select1" multiple clearable>
    <el-option value="opt1">Opt1</el-option>
    <el-option value="opt2">Opt2</el-option>
    <el-option value="opt3">Opt3</el-option>
</el-select>`;

export const select2Text = `
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
</el-select>`;

export const select3Text = `<el-select
v-model="inputs.select3"
multiple
filterable
allow-create
default-first-option
>
    <el-option value="opt1">Opt1</el-option>
    <el-option value="opt2">Opt2</el-option>
    <el-option value="opt3">Opt3</el-option>
</el-select>`;
