/*
 * @Author: BORING GHOST
 * @Date: 2022-09-15 10:29:14
 * @LastEditTime: 2022-09-15 10:40:21
 * @Description:
 */
export const image1Text = `
<el-image :src="src">
  <template #placeholder>
    <div class="image-slot">Loading<span class="dot">...</span></div>
  </template>
</el-image>
`;

export const image2Text = `
<el-image :src="src">
  <template #error>
    <div class="image-slot">
        <el-icon><Picture /></el-icon>
    </div>
  </template>
</el-image>
`;

export const image3Text = `
// 必须使用一个有overflow属性的容器包裹
<div class="demo-image__lazy">
  <el-image v-for="url in urls" :key="url" :src="url" lazy />
</div>
`;

export const image4Text = `
<el-image
style="width: 100px; height: 100px"
:src="src"
:preview-src-list="srcList"
:initial-index="4"
fit="cover"
/>
`;
