<!--
 * @Author: BORING GHOST
 * @Date: 2022-08-26 14:55:36
 * @LastEditTime: 2022-08-26 15:06:44
 * @Description: 
-->
<template>
  <div style="padding: 0 15px" @click="toggleClick">
    <SvgIcon
      color="#ffffff"
      icon-class="cus_caidan"
      :class="{ 'is-active': isActive }"
    ></SvgIcon>
  </div>
</template>

<script setup>
import SvgIcon from "../SvgIcon/index.vue";
defineProps({
  isActive: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits();
const toggleClick = () => {
  emit("toggleClick");
};
</script>

<style scoped>
.hamburger {
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
}

.hamburger.is-active {
  transform: rotate(180deg);
}
</style>
