<!--
 * @Author: BORING GHOST
 * @Date: 2022-09-01 10:11:22
 * @LastEditTime: 2022-09-01 11:04:52
 * @Description: 
-->
<template>
  <div>
    <div class="xlb-title-2">Height属性</div>
    <div>
      <el-scrollbar
        wrap-style="background-color:var(--el-border-color-darker);border-radius:8px;"
        height="300px"
      >
        <template v-for="item in 30">
          <div class="box">{{ item }}</div>
        </template>
      </el-scrollbar>
    </div>
    <!--  -->
    <div class="xlb-title-2">元素大于滚动条容器时会出现横向滚动</div>
    <div>
      <el-scrollbar
        wrap-style="background-color:var(--el-border-color-darker);border-radius:8px;"
      >
        <div class="content">
          <template v-for="item in 30">
            <div class="box">{{ item }}</div>
          </template>
        </div>
      </el-scrollbar>
    </div>
    <!--  -->
    <div class="xlb-title-2">设置最大高度为200</div>
    <div style="min-height: 280px">
      <span>
        <el-button @click="additem">add</el-button>
        <el-button @click="delitem">del</el-button>
      </span>
      <el-scrollbar max-height="200px">
        <template v-for="(item, index) in scrollList" :key="index">
          <div class="box">{{ index }}</div>
        </template>
      </el-scrollbar>
    </div>
    <!--  -->
    <div class="xlb-title-2">
      通过使用 setScrollTop 与 setScrollLeft 方法，可以手动控制滚动条滚动
    </div>
    <div>
      <el-input-number
        v-model="vinput"
        :min="1"
        :max="200"
        @change="handleChange"
      />
      <el-scrollbar always ref="scrollRef" height="300px">
        <template v-for="item in 50" :key="item">
          <div class="box">{{ item }}</div>
        </template>
      </el-scrollbar>
    </div>
  </div>
</template>

<script name="ScrollbarElement" setup>
/* data */
let scrollList = ref([]);
let vinput = ref(1);
let scrollRef = ref();

/* methods */
function handleChange(value) {
  scrollRef.value.setScrollTop(value);
}

function additem() {
  scrollList.value.push("1");
}

function delitem() {
  scrollList.value.shift();
}
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 30px;
  border-radius: 8px;
  margin: 10px 0;
  background-color: var(--el-border-color-lighter);
}
.content {
  display: flex;
  .box {
    flex-shrink: 0;
    width: 100px;
    height: 50px;
    margin: 10px;
    border-radius: 4px;
    background: var(--el-color-danger-light-9);
    color: var(--el-color-danger);
  }
}
</style>
