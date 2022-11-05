<!--
 * @Author: BORING GHOST
 * @Date: 2022-08-26 14:55:36
 * @LastEditTime: 2022-08-26 15:10:04
 * @Description: 
-->
<template>
  <div>
    <div @click="goto">
      <svg-icon icon-class="question" />
      <span class="label" style="font-weight: 700; margin-left: 3px">文档</span>
    </div>
  </div>
</template>

<script setup>
const url = ref("http://doc.ruoyi.vip/ruoyi-vue");

function goto() {
  window.open(url.value);
}
</script>
