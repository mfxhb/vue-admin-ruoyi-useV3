<!--
 * @Author: BORING GHOST
 * @Date: 2022-08-30 15:01:29
 * @LastEditTime: 2022-08-31 09:31:41
 * @Description: 
-->
<template>
  <div>
    <!-- 主色 -->
    <div class="item">
      <h3>主色</h3>
      <hr />
      <span class="custom-flex-wrap">
        <template v-for="item in domain" :key="item">
          <div class="box" :style="`background-color: var(--el-color-${item})`">
            {{ item }}
          </div>
        </template>
      </span>
    </div>
    <!-- 辅助色 -->
    <div class="item">
      <h3>辅助色</h3>
      <hr />
      <span class="custom-flex-wrap">
        <template v-for="item in auxiliary" :key="item">
          <div class="box" :style="`background-color: var(--el-color-${item})`">
            {{ item }}
          </div>
        </template>
      </span>
    </div>
    <!-- 中性色 -->
    <div class="item">
      <h3>中性色</h3>
      <hr />
      <template v-for="item in neutral" :key="item">
        <div>
          <h5 class="text-cap">{{ item.type }}</h5>
          <span class="custom-flex-wrap">
            <template v-for="item2 in item['value']" :key="item2">
              <div class="box" :style="`background-color: var(--el-${item['type']}-color-${item2}) `">
                {{ item2 }}
              </div>
            </template>
          </span>
        </div>
      </template>
      <div>
        <h5 class="text-cap">白色跟黑色</h5>
        <span class="custom-flex-wrap">
          <div class="box" style="background-color: var(--el-color-white)">
            白色
          </div>
          <div class="box" style="background-color: var(--el-color-black)">
            黑色
          </div>
        </span>
      </div>
    </div>
  </div>
</template>

<script name="Colorelement" setup>
/* api */
import { elementPlusApi } from "~/mock/modules/element-plus";
/* data */
const auxiliary = ref([]); // 辅助色
const domain = ref([]); // 主色
const neutral = ref([]); // 中性色

/* methods */
async function dataListApi() {
  let { auxiliaryColor, domainColor, neutralColor } = await elementPlusApi(
    "color"
  );
  domain.value = domainColor;
  auxiliary.value = auxiliaryColor;
  neutral.value = neutralColor;
}
dataListApi();
</script>
