<!--
 * @Author: BORING GHOST
 * @Date: 2022-08-30 14:18:34
 * @LastEditTime: 2022-08-30 16:09:55
 * @Description: 
-->
<template>
  <div>
    <div class="item">
      <h1>Border边框</h1>
      <hr />
      <div>border: 1px solid var(--el-border-color)</div>
      <div class="box" style="border: 1px solid var(--el-border-color)"></div>
    </div>
    <div class="item">
      <h1>圆角</h1>
      <hr />

      <div>border-radius: var(--el-border-radius);</div>
      <div
        class="custom-border box"
        style="border-radius: var(--el-border-radius)"
      >
        0px
      </div>
      <br />
      <div>border-radius: var(--el-border-radius-small);</div>
      <div
        class="custom-border box"
        style="border-radius: var(--el-border-radius)"
      >
        small 小号
      </div>
      <br />
      <div>--el-border-radius-base</div>
      <div
        class="custom-border box"
        style="border-radius: var(--el-border-radius-base)"
      >
        Base
      </div>
      <br />
      <div></div>
      <div
        class="custom-border box"
        style="border-radius: var(--el-border-radius-round)"
      >
        round 圆角
      </div>
    </div>
    <div class="item">
      <h1>阴影</h1>
      <hr />
      <el-row :gutter="10">
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
          <div class="custom-height" style="box-shadow: var(--el-box-shadow)">
            --el-box-shadow
          </div>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
          <div
            class="custom-height"
            style="box-shadow: var(--el-box-shadow-light)"
          >
            --el-box-shadow-light
          </div>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
          <div
            class="custom-height"
            style="box-shadow: var(--el-box-shadow-lighter)"
          >
            --el-box-shadow-lighter
          </div>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
          <div
            class="custom-height"
            style="box-shadow: var(--el-box-shadow-dark)"
          >
            --el-box-shadow-dark
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script name="Styleelement" setup></script>

<style lang="scss" scoped>
.box {
  width: 200px;
  height: 100px;
}
.custom-border {
  border: 1px solid var(--el-border-color);
}
.custom-height {
  height: 100px;
}
</style>
