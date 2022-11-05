<!--
 * @Author: BORING GHOST
 * @Date: 2022-08-26 14:55:36
 * @LastEditTime: 2022-08-26 15:09:33
 * @Description: 
-->
<template>
  <div>
    <div @click="goto">
      <svg-icon icon-class="github" />
      <span class="label" style="font-weight: 700; margin-left: 3px">源码</span>
    </div>
  </div>
</template>

<script setup>
const url = ref("https://gitee.com/y_project/RuoYi-Vue");

function goto() {
  window.open(url.value);
}
</script>
