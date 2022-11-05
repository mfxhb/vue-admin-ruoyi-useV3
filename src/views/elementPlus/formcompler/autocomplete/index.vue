<!--
 * @Author: BORING GHOST
 * @Date: 2022-09-01 14:29:59
 * @LastEditTime: 2022-09-01 15:31:40
 * @Description: 
-->
<template>
  <div>
    <div class="xlb-title-2">默认使用方式</div>
    <br />
    <el-autocomplete
      :fetch-suggestions="querySearch"
      placeholder="Please Input ~"
      v-model="vautocomplete"
    />
    <br />
    <br />
    <div class="xlb-title-2">插槽使用方式</div>
    <el-autocomplete
      placeholder="Please Input ~"
      v-model="vautocomplete2"
      :fetch-suggestions="querySearch"
    >
      <template #suffix>
        <el-icon class="el-input__icon">
          <edit />
        </el-icon>
      </template>
      <template #prefix>
        <el-icon class="el-input__icon">
          <edit />
        </el-icon>
      </template>
      <template #prepend>前置</template>
      <template #append>后置</template>
    </el-autocomplete>
  </div>
</template>

<script name="AutocompleteElement" setup>
/* data */
const vautocomplete = ref("");
const vautocomplete2 = ref("");
/* methods */
function querySearch(querystring, cb) {
  console.log(querystring);
  cb([
    { value: "vue", link: "https://github.com/vuejs/vue" },
    { value: "element", link: "https://github.com/ElemeFE/element" },
    { value: "cooking", link: "https://github.com/ElemeFE/cooking" },
    { value: "mint-ui", link: "https://github.com/ElemeFE/mint-ui" },
    { value: "vuex", link: "https://github.com/vuejs/vuex" },
    { value: "vue-router", link: "https://github.com/vuejs/vue-router" },
    { value: "babel", link: "https://github.com/babel/babel" },
  ]);
}
</script>

<style lang="scss" scoped></style>
