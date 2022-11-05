<!--
 * @Author: BORING GHOST
 * @Date: 2022-08-31 14:01:19
 * @LastEditTime: 2022-09-01 09:31:51
 * @Description: 
-->
<template>
  <div>
    <div class="xlb-title-3">默认就是flex布局,跟24份</div>
    <hr />
    <div class="xlb-title-2">普通span</div>
    <div class="xlb-title-3">多出的会换行</div>
    <div class="item">
      <el-row class="xlb-row">
        <el-col :span="8" style="height: 50px">
          <div class="xlb-col-box"></div>
        </el-col>
        <el-col :span="8"><div class="xlb-col-box"></div></el-col>
        <el-col :span="8"><div class="xlb-col-box"></div></el-col>
      </el-row>
      <el-row class="xlb-row">
        <el-col :span="8" style="height: 50px">
          <div class="xlb-col-box"></div>
        </el-col>
        <el-col :span="8">
          <div class="xlb-col-box"></div>
        </el-col>
        <el-col :span="8">
          <div class="xlb-col-box"></div>
        </el-col>
      </el-row>
    </div>
    <hr />
    <!--  -->
    <div class="xlb-title-2">Gutter间隔</div>
    <el-row class="xlb-row" :gutter="24">
      <el-col style="height: 100px" :span="8">
        <div style="width: 100%; height: 100%" class="xlb-col-box"></div>
      </el-col>
      <el-col :span="8">
        <div style="width: 100%; height: 100%" class="xlb-col-box"></div>
      </el-col>
      <el-col :span="8">
        <div style="width: 100%; height: 100%" class="xlb-col-box"></div>
      </el-col>
    </el-row>
    <hr />
    <!--  -->
    <div class="xlb-title-2">混合布局</div>
    <div class="xlb-row">
      <el-row :gutter="5">
        <el-col style="height: 50px" :span="16">
          <div class="xlb-col-box"></div>
        </el-col>
        <el-col :span="8">
          <div class="xlb-col-box"></div>
        </el-col>
      </el-row>
      <el-row class="xlb-row" :gutter="5">
        <el-col :span="8" style="height: 50px">
          <div class="xlb-col-box"></div>
        </el-col>
        <el-col :span="8"><div class="xlb-col-box"></div></el-col>
        <el-col :span="4"><div class="xlb-col-box"></div></el-col>
        <el-col :span="4"><div class="xlb-col-box"></div></el-col>
      </el-row>
      <el-row :gutter="5">
        <el-col :span="4" style="height: 50px"
          ><div class="xlb-col-box"></div
        ></el-col>
        <el-col :span="16"><div class="xlb-col-box"></div></el-col>
        <el-col :span="4"><div class="xlb-col-box"></div></el-col>
      </el-row>
    </div>
    <hr />
    <!--  -->
    <div class="xlb-title-2">偏移量</div>
    <div>
      <el-row class="xlb-row" :gutter="10">
        <el-col :span="6" :offset="1" style="height: 50px">
          <div class="xlb-col-box"></div>
        </el-col>
        <el-col :span="6" :offset="6"><div class="xlb-col-box"></div></el-col>
      </el-row>
      <el-row class="xlb-row" :gutter="10">
        <el-col :span="6" :offset="6" style="height: 50px">
          <div class="xlb-col-box"></div>
        </el-col>
        <el-col :span="6" :offset="6">
          <div class="xlb-col-box"></div>
        </el-col>
      </el-row>
      <el-row :gutter="10" class="xlb-row">
        <el-col :offset="6" :span="16" style="height: 50px">
          <div class="xlb-col-box"></div>
        </el-col>
      </el-row>
    </div>
    <hr />
    <!--  -->
    <div class="xlb-title-2">flex对齐方式</div>
    <div>
      <el-row justify="center" class="xlb-row">
        <el-col
          :span="6"
          style="height: 50px"
          class="xlb-radius-8 xlb-bg-color-gray-2"
        >
        </el-col>
        <el-col :span="6" class="xlb-radius-8 xlb-bg-color-gray-3"> </el-col>
        <el-col :span="6" class="xlb-radius-8 xlb-bg-color-gray-2"> </el-col>
      </el-row>
    </div>
    <hr />
    <!--  -->
    <div class="xlb-title-2">响应式布局</div>
    <div>
      <el-row :gutter="10" class="xlb-row">
        <el-col :xs="6" :sm="6" :lg="12" style="height: 50px">
          <div class="xlb-col-box xlb-bg-color-gray-3"></div>
        </el-col>
        <el-col :xs="6" :sm="6" :lg="12">
          <div class="xlb-col-box xlb-bg-color-gray-3"></div>
        </el-col>
      </el-row>
    </div>
    <!--  -->
    <div class="xlb-title-2">断点隐藏</div>
    <div class="xlb-title-3">hidden-xs-only - 当视口在 xs 尺寸时隐藏</div>
    <div class="xlb-box-1 hidden-xs-only"></div>
  </div>
</template>

<script name="LayoutElement" setup></script>

<style lang="scss" scoped>
.xlb-col-box {
  background-color: var(--el-border-color-lighter);
  border-radius: 8px;
}
</style>
