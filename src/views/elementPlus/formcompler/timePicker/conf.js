/*
 * @Author: BORING GHOST
 * @Date: 2022-09-13 16:43:50
 * @LastEditTime: 2022-09-13 16:49:36
 * @Description:
 */
export const time1Text = `<el-time-picker v-model="inputs.time1" is-range></el-time-picker>`;

export const time2Text = `
<el-time-select
v-model="inputs.time2"
start="08:30"
step="00:15"
end="18:30"
></el-time-select>`;

export const time3Text = `
<el-time-select
v-model="inputs.time3"
start="08:30"
step="00:15"
end="18:30"
format="hh:mm A"
></el-time-select>
<el-time-select
v-model="inputs.time4"
start="08:30"
step="00:15"
end="18:30"
format="hh:mm A"
></el-time-select>
`;
