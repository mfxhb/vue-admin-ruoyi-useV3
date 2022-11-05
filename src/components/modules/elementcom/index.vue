<!--
 * @Author: BORING GHOST
 * @Date: 2022-09-13 16:11:59
 * @LastEditTime: 2022-09-13 16:25:11
 * @Description: 
-->
<template>
  <el-space fill :class="spaceClasslist">
    <div
      v-copyText="copyText"
      v-copyText:callback="copyTextSuccess"
      class="xlb-button-copy xlb-son-right-top"
    >
      复制
    </div>
    <slot></slot>
    <el-input
      type="textarea"
      v-model="copyText"
      autosize
      readonly
      :input-style="textarea_style"
    ></el-input>
  </el-space>
</template>

<script name="ElementTem" setup>
const { proxy } = getCurrentInstance();
const textarea_style = shallowRef(inject("testarea_style"));
// data
const spaceClasslist = ref("xlb-box-border xlb-box-w xlb-father xlb-shadow");
// props
defineProps({
  copyText: {
    type: String,
  },
});
// methods
const copyTextSuccess = () => {
  proxy.$modal.msgSuccess("复制成功");
};
</script>

<style lang="scss" scoped></style>
