/*
 * @Author: BORING GHOST
 * @Date: 2022-09-15 15:44:46
 * @LastEditTime: 2022-09-16 08:52:05
 * @Description:
 */
export const skeleton1Text = `
<el-skeleton animated style="--el-skeleton-circle-size: 100px">
    <template #template>
      <el-skeleton-item variant="circle" />
    </template>
    </el-skeleton>
<el-skeleton :rows="0" />
`;

export const skeleton2Text = `
<el-skeleton>
    <template #template>
      <el-skeleton-item
        variant="image"
        style="width: 240px; height: 240px"
      />
      <div style="padding: 14px">
        <el-skeleton-item variant="p" style="width: 50%" />
        <el-skeleton-item variant="text" style="margin-right: 16px" />
        <el-skeleton-item variant="text" style="width: 30%" />
      </div>
    </template>
</el-skeleton>
`;
