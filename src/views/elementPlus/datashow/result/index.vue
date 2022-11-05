<!--
 * @Author: BORING GHOST
 * @Date: 2022-09-15 15:21:20
 * @LastEditTime: 2022-09-15 15:32:02
 * @Description: 
-->
<template>
  <div>
    <!-- 基础用法 -->
    <copyText :copy-text="inputs.result1Text">
      <div class="xlb-title-2">基础用法</div>
      <el-space>
        <el-result
          icon="success"
          title="Success Tip"
          sub-title="Please follow the instructions"
        ></el-result>
        <el-result
          icon="error"
          title="Success Tip"
          sub-title="Please follow the instructions"
        ></el-result>
        <el-result
          icon="info"
          title="Success Tip"
          sub-title="Please follow the instructions"
        ></el-result>
        <el-result
          icon="warning"
          title="Success Tip"
          sub-title="Please follow the instructions"
        ></el-result>
      </el-space>
    </copyText>
  </div>
</template>

<script name="ResultElement" setup>
import { result1Text } from "./conf";
// data
const inputs = reactive({
  result1Text,
});
</script>

<style lang="scss" scoped></style>
