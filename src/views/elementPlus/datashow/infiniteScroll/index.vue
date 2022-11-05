<!--
 * @Author: BORING GHOST
 * @Date: 2022-09-15 10:44:50
 * @LastEditTime: 2022-09-15 11:17:39
 * @Description: 
-->
<template>
  <div>
    <!-- 普通用法 -->
    <copyText :copy-text="inputs.scroll1Text">
      <div class="xlb-title-2">普通用法</div>
      <ul
        v-infinite-scroll="load"
        class="infinite-list"
        style="overflow: auto; height: 150px"
      >
        <li v-for="i in count" :key="i" class="infinite-list-item">{{ i }}</li>
      </ul>
    </copyText>
    <div class="xlb-space-h"></div>
    <!-- 禁用后停止继续加载 -->
    <copyText :copy-text="inputs.scroll2Text">
      <div class="xlb-title-2">禁用后停止继续加载</div>
      <div class="infinite-list-wrapper" style="overflow: auto">
        <ul
          v-infinite-scroll="load2"
          class="list"
          :infinite-scroll-disabled="disabled"
        >
          <li v-for="i in count" :key="i" class="list-item">{{ i }}</li>
        </ul>
        <p v-if="loading">Loading...</p>
        <p v-if="noMore">No more</p>
      </div>
    </copyText>
  </div>
</template>

<script name="InfiniteScrollElement" setup>
import { scroll1Text, scroll2Text } from "./conf";
// data
const inputs = reactive({
  scroll1Text,
  scroll2Text,
});
const count = ref(0);
const load = () => {
  count.value += 2;
};
const loading = ref(false);
const noMore = computed(() => count.value >= 20);
const disabled = computed(() => loading.value || noMore.value);
const load2 = () => {
  loading.value = true;
  setTimeout(() => {
    count.value += 2;
    loading.value = false;
  }, 2000);
};
</script>

<style lang="scss" scoped>
.infinite-list-wrapper {
  height: 300px;
  text-align: center;
}
.infinite-list-wrapper .list {
  padding: 0;
  margin: 0;
  list-style: none;
}

.infinite-list-wrapper .list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: var(--el-color-danger-light-9);
  color: var(--el-color-danger);
}
.infinite-list-wrapper .list-item + .list-item {
  margin-top: 10px;
}
.infinite-list .infinite-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--el-color-primary-light-9);
  height: 50px;
  margin: 10px;
  color: var(--el-color-primary);
}
.infinite-list .infinite-list-item + .list-item {
  margin-top: 10px;
}
</style>
