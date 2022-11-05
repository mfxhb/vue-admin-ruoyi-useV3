<!--
 * @Author: BORING GHOST
 * @Date: 2022-09-01 16:21:15
 * @LastEditTime: 2022-09-02 11:32:54
 * @Description: 
-->
<template>
  <div>
    <!--  -->
    <div>
      <div class="xlb-title-2">基础用法options属性</div>
      <el-cascader v-model="vcascader" :options="options"></el-cascader>
    </div>
    <!--  -->
    <div>
      <div class="xlb-title-2">拥有禁用选项</div>
      <el-cascader
        v-model="vcascaderDisabled"
        :options="optionsDisabled"
      ></el-cascader>
    </div>
    <!--  -->
    <div>
      <div class="xlb-title-2">可清空</div>
      <el-cascader clearable :options="optionsDisabled"></el-cascader>
    </div>
    <!--  -->
    <div>
      <div class="xlb-title-2">将显示最后一项</div>
      <el-cascader :options="options" :show-all-levels="false"></el-cascader>
    </div>
    <!--  -->
    <div>
      <div class="xlb-title-2">多选</div>
      <div>{{ cheboxCascader }}</div>
      <el-cascader
        v-model="cheboxCascader"
        :options="options"
        :props="props"
        :show-all-levels="false"
      ></el-cascader>
    </div>
    <!--  -->
    <div>
      <div class="xlb-title-2">取消关联</div>
      <div class="xlb-title-3">
        通过 props.checkStrictly = true
        来设置父子节点取消选中关联，从而达到选择任意一级选项的目的
      </div>
      <div>{{ cheboxCascaderNoRelaves }}</div>
      <el-cascader
        v-model="cheboxCascaderNoRelaves"
        :props="props2"
        :options="options"
      ></el-cascader>
    </div>
    <!--  -->
    <div>
      <div class="xlb-title-2">动态加载</div>
      <div class="xlb-title-3">leaf属性标志是否为最后一位子节点</div>
      <el-cascader :props="lazyProps"></el-cascader>
    </div>
    <!--  -->
    <div>
      <div class="xlb-title-2">可搜索的filterable属性</div>
      <el-cascader filterable :options="options"> </el-cascader>
    </div>
    <!--  -->
    <div>
      <div class="xlb-title-2">自定义节点内容</div>
      <el-cascader :options="options">
        <template #default="{ node, data }">
          <span>{{ data.label }}</span>
          <span v-if="!node.isLeaf"> ({{ data.children.length }}) </span>
        </template>
      </el-cascader>
    </div>
    <!--  -->
    <div>
      <div class="xlb-title-2">级联面板</div>
      <el-cascader-panel :options="options"></el-cascader-panel>
    </div>
  </div>
</template>

<script name="CascaderElement" setup>
/* api */
import { elementPlusApi } from "~/mock/modules/element-plus";
/* data */
const vcascader = ref([]);
const options = ref([]);
const vcascaderDisabled = ref([]);
const optionsDisabled = ref([]);
const cheboxCascader = ref([]);
const cheboxCascaderNoRelaves = ref([]);
const props = { multiple: true };
const props2 = { multiple: true, checkStrictly: true };

const lazyProps = {
  lazy: true,
  lazyLoad(node, resolve) {
    const { level } = node;
    console.log(level);
    resolve([
      {
        value: "guide",
        label: "Guide",
        leaf: level > 2,
      },
    ]);
  },
};

/* methods */
async function dataListApi() {
  let result = await elementPlusApi("cascader");
  options.value = result.options;
  optionsDisabled.value = JSON.parse(JSON.stringify(result.options));
  optionsDisabled.value[0]["children"][0]["disabled"] = true;
}
dataListApi();
</script>

<style lang="scss" scoped>
.example-block {
  margin: 1rem;
}
.example-demonstration {
  margin: 1rem;
}
.el-cascader-panel {
  overflow-x: auto;
}
</style>
