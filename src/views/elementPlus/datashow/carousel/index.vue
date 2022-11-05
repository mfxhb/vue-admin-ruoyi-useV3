<!--
 * @Author: BORING GHOST
 * @Date: 2022-09-15 08:52:22
 * @LastEditTime: 2022-09-15 09:18:17
 * @Description: 
-->
<template>
  <div>
    <!-- 普通用法 -->
    <copyText :copy-text="inputs.carousel1Text">
      <div class="xlb-title-2">普通用法</div>
      <el-carousel height="150px">
        <el-carousel-item>
          <div class="xlb-title-3">item1</div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="xlb-title-3">item1</div>
        </el-carousel-item>
      </el-carousel>
    </copyText>
    <div class="xlb-space-h"></div>
    <!-- 指示器的位置 -->
    <copyText :copy-text="inputs.carousel2Text">
      <div class="xlb-title-2">指示器的位置+箭头显示时机</div>
      <el-row :gutter="24">
        <el-col align="center" :span="12">
          <el-radio-group v-model="inputs.carousel2Position">
            <el-radio-button label="outside">Outside</el-radio-button>
            <el-radio-button label="none">None</el-radio-button>
          </el-radio-group>
        </el-col>
        <el-col align="center" :span="12">
          <el-radio-group v-model="inputs.carousel2Arrow">
            <el-radio-button label="always">Always</el-radio-button>
            <el-radio-button label="never">Never</el-radio-button>
            <el-radio-button label="hover">Hover </el-radio-button>
          </el-radio-group>
        </el-col>
      </el-row>
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
    </copyText>
    <div class="xlb-space-h"></div>
    <!-- 卡片化 -->
    <copyText :copy-text="inputs.carousel3Text">
      <div class="xlb-title-2">卡片化</div>
      <el-carousel height="200px" type="card">
        <el-carousel-item> item1 </el-carousel-item>
        <el-carousel-item> item2 </el-carousel-item>
        <el-carousel-item> item3 </el-carousel-item>
      </el-carousel>
    </copyText>
    <div class="xlb-space-h"></div>
    <!-- 垂直布局 -->
    <copyText :copy-text="inputs.carousel4Text">
      <div class="xlb-title-2">垂直布局</div>
      <el-col :span="24">
        <el-radio-group v-model="inputs.carousel4Direction">
          <el-radio-button label="horizontal">Horizontal</el-radio-button>
          <el-radio-button label="vertical">Vertical</el-radio-button>
        </el-radio-group>
      </el-col>
      <el-carousel height="200px" :direction="inputs.carousel4Direction">
        <el-carousel-item>item1</el-carousel-item>
        <el-carousel-item>item2</el-carousel-item>
        <el-carousel-item>item3</el-carousel-item>
      </el-carousel>
    </copyText>
  </div>
</template>

<script name="CarouselElement" setup>
import {
  carousel1Text,
  carousel2Text,
  carousel3Text,
  carousel4Text,
} from "./conf";
// data
const inputs = reactive({
  carousel1Text,
  carousel2Text,
  carousel2Position: "outside",
  carousel2Arrow: "hover",
  carousel3Text,
  carousel4Text,
});
</script>

<style lang="scss" scoped>
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
