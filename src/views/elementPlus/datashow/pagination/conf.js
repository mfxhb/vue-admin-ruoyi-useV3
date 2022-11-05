/*
 * @Author: BORING GHOST
 * @Date: 2022-09-15 11:28:01
 * @LastEditTime: 2022-09-15 11:42:53
 * @Description:
 */
export const page1Text = `
// ->符号右侧的会靠右对齐
<el-pagination
layout="sizes,prev,pager,next,jumper,->,total,slot"
:total="50"
></el-pagination>
`;

export const page2Text = `
<el-row :gutter="24">
  <el-col :span="12" align="center">
    <el-space fill direction="vertical">
      <span>开启背景</span>
      <el-radio-group v-model="inputs.page2bg">
        <el-radio border :label="false">False</el-radio>
        <el-radio border :label="true">True</el-radio>
      </el-radio-group>
    </el-space>
  </el-col>
  <el-col align="center" :span="12">
    <el-space fill direction="vertical">
      <span>开启小型分页</span>
      <el-radio-group v-model="inputs.page2Size">
        <el-radio border :label="false">False</el-radio>
        <el-radio border :label="true">True</el-radio>
      </el-radio-group>
    </el-space>
  </el-col>
</el-row>
<el-pagination
:background="inputs.page2bg"
:small="inputs.page2Size"
layout="sizes,prev,pager,next,jumper,->,total,slot"
:total="550"
></el-pagination>
`;
