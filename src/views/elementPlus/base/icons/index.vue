<!--
 * @Author: BORING GHOST
 * @Date: 2022-08-31 10:11:15
 * @LastEditTime: 2022-08-31 11:56:32
 * @Description: 
-->
<template>
  <div>
    <el-alert :title="alertText" type="error" :closable="false" />
    <div class="item">
      <div class="text-fw-primary">结合el-icon一起使用</div>
      <hr />

      <div class="text-fw-primary">{{ msgOneText }}</div>
      <br />
      <el-icon :size="30"><Plus /></el-icon>
      <el-icon :size="30"><CirclePlus /></el-icon>
      <el-icon :size="30"><ChatDotRound /></el-icon>
      <hr />

      <div class="text-fw-primary">{{ msgText }}</div>
      <hr />
      <div class="item">
        <template v-for="item in buildIcon">
          <el-icon :size="30">
            <component :is="item" />
          </el-icon>
        </template>
      </div>

      <div class="text-fw-primary">svg组件自定义图标</div>
      <br />
      <el-alert
        title="组件中已经对svg目录下的svg图标进行了全部导入处理,只需要拿到数据进行渲染就行~"
        type="error"
        :closable="false"
      />
      <div class="item">
        <template v-for="item in iconList" :key="item">
          <svg-icon
            style="width: 30px; height: 30px; margin: 10px"
            :icon-class="item"
          ></svg-icon>
        </template>
      </div>
    </div>
  </div>
</template>

<script name="IconsElement" setup>
/* module */
import icons from "@/components/IconSelect/requireIcons";
/* api */
import { elementPlusApi } from "~/mock/modules/element-plus";

/* data */
const alertText = ref(
  "若依框架已经安装有@element-plus/icons-vue,并且已经将所有图标全局注册,所以直接使用即可~"
);
const msgOneText = ref(`单个渲染<el-icon><Plus /></el-icon>`);
const msgText = ref(`动态渲染
      <el-icon :size="20">
        <component is="Menu" />
      </el-icon>`);
let buildIcon = ref([]);
const iconList = ref(icons);

/* methods */
async function dataListApi() {
  let { buildIcons } = await elementPlusApi("icons");
  buildIcon.value = buildIcons;
}

dataListApi();
</script>

<style lang="scss" scoped>
.el-icon {
  border: 1px solid var(--el-border-color);
  margin: 5px;
}
</style>
