/*
 * @Author: BORING GHOST
 * @Date: 2022-09-15 15:07:54
 * @LastEditTime: 2022-09-15 15:19:41
 * @Description:
 */
export const progress1Text = `
<el-progress :percentage="50"></el-progress>
<el-progress :percentage="100" status="success" />
<el-progress :percentage="100" status="warning" />
<el-progress :percentage="50" status="exception" />
`;

export const progress2Text = `
<el-progress
:text-inside="true"
:stroke-width="26"
:percentage="50"
></el-progress>
<el-progress
:text-inside="true"
:stroke-width="26"
:percentage="100"
status="success"
/>
<el-progress
:text-inside="true"
:stroke-width="26"
:percentage="100"
status="warning"
/>
<el-progress
:text-inside="true"
:stroke-width="26"
:percentage="50"
status="exception"
/>
`;

export const progress3Text = `
<el-space>
    <el-progress type="dashboard" :percentage="50"></el-progress>
    <el-progress type="dashboard" :percentage="100" status="success" />
    <el-progress type="dashboard" :percentage="100" status="warning" />
    <el-progress type="dashboard" :percentage="50" status="exception" />
</el-space>
`;

export const progress4Text = `
<el-space fill>
<el-progress :indeterminate="true" :percentage="50"></el-progress>
<el-progress
  :duration="5"
  :indeterminate="true"
  :percentage="100"
  status="success"
/>
<el-progress
  :duration="1"
  :indeterminate="true"
  :percentage="100"
  status="warning"
/>
<el-progress
  :indeterminate="true"
  :percentage="50"
  status="exception"
/>
</el-space>
`;
