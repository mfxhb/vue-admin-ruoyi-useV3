<!--
 * @Author: BORING GHOST
 * @Date: 2022-08-26 14:55:36
 * @LastEditTime: 2022-08-26 15:10:45
 * @Description: 
-->
<template>
  <div>
    <div @click="toggle">
      <svg-icon :icon-class="isFullscreen ? 'exit-fullscreen' : 'fullscreen'" />
      <span class="label" style="font-weight: 700; margin-left: 3px">全屏</span>
    </div>
  </div>
</template>

<script setup>
import { useFullscreen } from "@vueuse/core";

const { isFullscreen, enter, exit, toggle } = useFullscreen();
</script>

<style lang="scss" scoped>
.screenfull-svg {
  display: inline-block;
  cursor: pointer;
  fill: #5a5e66;
  width: 20px;
  height: 20px;
  vertical-align: 10px;
}
</style>
