<!--
 * @Author: BORING GHOST
 * @Date: 2022-09-15 10:08:58
 * @LastEditTime: 2022-09-15 10:50:51
 * @Description: 
-->
<template>
  <div>
    <!-- 图片跟图片的尺寸 -->
    <copyText :copy-text="inputs.empty1Text">
      <div class="xlb-title-2">图片跟图片的尺寸</div>
      <el-empty
        image="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        :image-size="200"
      ></el-empty>
    </copyText>
    <div class="xlb-space-h"></div>
    <!-- 默认插槽 -->
    <copyText :copy-text="inputs.empty2Text">
      <div class="xlb-title-2">默认插槽</div>
      <el-empty>
        <el-button type="primary">Button</el-button>
      </el-empty>
    </copyText>
  </div>
</template>

<script name="EmptyElement" setup>
import { empty1Text, empty2Text } from "./conf";
// data
const inputs = reactive({
  empty1Text,
  empty2Text,
});
</script>

<style lang="scss" scoped></style>
