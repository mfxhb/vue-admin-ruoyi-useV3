<!--
 * @Author: BORING GHOST
 * @Date: 2022-09-14 15:12:57
 * @LastEditTime: 2022-09-14 15:46:34
 * @Description: 
-->
<template>
  <div>
    <!-- 形状+大小 -->
    <copyText :copy-text="inputs.avatar1Text">
      <div class="xlb-title-2">形状+大小</div>
      <el-row>
        <el-col :span="12">
          <el-space direction="vertical">
            <el-radio-group v-model="inputs.avatar1Shape">
              <el-radio-button label="circle">Circle</el-radio-button>
              <el-radio-button label="square">Square</el-radio-button>
            </el-radio-group>
            <el-avatar :shape="inputs.avatar1Shape" :src="squareUrl" />
          </el-space>
        </el-col>
        <el-col :span="12">
          <el-space direction="vertical">
            <el-radio-group v-model="inputs.avatar1Size">
              <el-radio-button label="large">Large</el-radio-button>
              <el-radio-button label="default">Default</el-radio-button>
              <el-radio-button label="small">Small</el-radio-button>
            </el-radio-group>
            <el-avatar :size="inputs.avatar1Size" :src="squareUrl" />
          </el-space>
        </el-col>
      </el-row>
    </copyText>
    <div class="xlb-space-h"></div>
    <!-- 图标 文字 图片展示 -->
    <copyText :copy-text="inputs.avatar2Text">
      <div class="xlb-title-2">图标 文字 图片展示</div>
      <el-space spacer="|">
        <el-avatar icon="UserFilled" />
        <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
        <el-avatar> user </el-avatar>
      </el-space>
    </copyText>
    <div class="xlb-space-h"></div>
    <!-- 头像加载失败回退行为 -->
    <copyText :copy-text="inputs.avatar3Text">
      <el-col :span="3">
        <el-avatar src="https://empty" @error="errorHandler"> user </el-avatar>
      </el-col>
    </copyText>
    <div class="xlb-space-h"></div>
  </div>
</template>

<script name="AvatarElement" setup>
import { avatar1Text, avatar2Text, avatar3Text } from "./conf";
// data
const squareUrl = ref(
  "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
);
const inputs = reactive({
  avatar1Text,
  avatar2Text,
  avatar3Text,
});
// methods
const errorHandler = () => true;
</script>

<style lang="scss" scoped></style>
