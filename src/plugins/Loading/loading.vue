<!--
 * @Author: BORING GHOST
 * @Date: 2022-08-27 11:06:23
 * @LastEditTime: 2022-08-28 10:39:34
 * @Description: 
-->
<template>
  <div class="plugin-loading" v-show="conf.show">
    <!-- loading -->
    <div class="loading"></div>
  </div>
</template>

<script setup name="Loading">
defineProps({
  conf: Object,
});
</script>

<style lang="scss" scoped>
.plugin-loading {
  cursor: wait;
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 99;
  top: 0;
  .loading {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 6px;
    height: 10px;

    animation: rectangle infinite 1s ease-in-out -0.2s;

    background-color: #000;
  }

  .loading:before,
  .loading:after {
    position: absolute;
    width: 6px;
    height: 10px;
    content: "";
    background-color: #000;
  }

  .loading:before {
    left: -14px;

    animation: rectangle infinite 1s ease-in-out -0.4s;
  }

  .loading:after {
    right: -14px;

    animation: rectangle infinite 1s ease-in-out;
  }

  @keyframes rectangle {
    0%,
    80%,
    100% {
      height: 20px;
      box-shadow: 0 0 #000;
    }

    40% {
      height: 30px;
      box-shadow: 0 -20px #000;
    }
  }
}
</style>
