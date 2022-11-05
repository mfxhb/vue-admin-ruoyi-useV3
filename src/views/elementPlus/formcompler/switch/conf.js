/*
 * @Author: BORING GHOST
 * @Date: 2022-09-13 16:21:18
 * @LastEditTime: 2022-09-13 16:31:40
 * @Description:
 */
export const switch1Text = `
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
></el-switch>`;

export const switch2Text = `
<div class="xlb-title-2">开关的值跟阻止切换</div>
<el-switch
  v-model="inputs.switch2"
  :loading="loading"
  :before-change="beforeChange1"
></el-switch>`;
