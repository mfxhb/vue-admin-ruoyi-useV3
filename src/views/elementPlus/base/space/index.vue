<!--
 * @Author: BORING GHOST
 * @Date: 2022-09-01 11:08:49
 * @LastEditTime: 2022-09-01 11:52:02
 * @Description: 
-->
<template>
  <div>
    <!-- 自动折行 -->
    <div>
      <div class="xlb-title-2">自动折行</div>
      <el-space>
        <div class="xlb-box-1">1</div>
        <div class="xlb-box-1">2</div>
      </el-space>
    </div>
    <!-- 垂直布局 -->
    <div>
      <div class="xlb-title-2">垂直布局</div>
      <el-space direction="vertical">
        <div class="xlb-box-1">1</div>
        <div class="xlb-box-1">2</div>
      </el-space>
    </div>
    <!-- 间距大小 -->
    <div>
      <div class="xlb-title-2">通过size控制间距大小</div>
      <el-space :size="50">
        <div class="xlb-box-1">1</div>
        <div class="xlb-box-1">2</div>
      </el-space>
    </div>
    <!-- 分隔符 -->
    <div>
      <div class="xlb-title-2">分隔符</div>
      <el-space :size="20" spacer="😁">
        <div class="xlb-box-1">1</div>
        <div class="xlb-box-1">2</div>
      </el-space>
    </div>
    <!-- 对齐方式 -->
    <div>
      <div class="xlb-title-2">对齐方式</div>
      <el-space alignment="center">
        string
        <el-button> button </el-button>
        <div class="xlb-box-1"></div>
      </el-space>
    </div>
    <!-- fill自动填充 -->
    <div>
      <div class="xlb-title-2">fill自动填充</div>
      <el-space :fill="true">
        <div style="width: 200px; background-color: gray">1</div>
        <div class="xlb-box-1">2</div>
      </el-space>
    </div>
  </div>
</template>

<script name="SpaceElement" setup></script>

<style lang="scss" scoped></style>
