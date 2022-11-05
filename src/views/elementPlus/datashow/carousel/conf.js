/*
 * @Author: BORING GHOST
 * @Date: 2022-09-15 09:01:11
 * @LastEditTime: 2022-09-15 09:18:13
 * @Description:
 */
export const carousel1Text = `
<el-carousel height="150px">
  <el-carousel-item>
    <div class="xlb-title-3">item1</div>
  </el-carousel-item>
  <el-carousel-item>
    <div class="xlb-title-3">item1</div>
  </el-carousel-item>
</el-carousel>
`;

export const carousel2Text = `
<el-carousel
:arrow="inputs.carousel2Arrow"
:indicator-position="inputs.carousel2Position"
height="150px"
>
  <el-carousel-item>
    <div class="xlb-title-3">item1</div>
  </el-carousel-item>
  <el-carousel-item>
    <div class="xlb-title-3">item1</div>
  </el-carousel-item>
</el-carousel>
`;

export const carousel3Text = `
<el-carousel height="200px" type="card">
  <el-carousel-item> item1 </el-carousel-item>
  <el-carousel-item> item2 </el-carousel-item>
  <el-carousel-item> item3 </el-carousel-item>
</el-carousel>
`;

export const carousel4Text = `
<el-carousel height="200px" :direction="inputs.carousel4Direction">
  <el-carousel-item>item1</el-carousel-item>
  <el-carousel-item>item2</el-carousel-item>
  <el-carousel-item>item3</el-carousel-item>
</el-carousel>
`;
