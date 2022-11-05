<!--
 * @Author: BORING GHOST
 * @Date: 2022-09-02 11:35:49
 * @LastEditTime: 2022-09-05 09:32:55
 * @Description: 
-->
<template>
  <div>
    <!--  -->
    <div>
      <div class="xlb-title-2">基础用法</div>
      <el-checkbox v-model="checkbox1" label="option1" />
    </div>
    <!--  -->
    <div>
      <div class="xlb-title-2">禁用属性disabled</div>
      <el-checkbox v-model="checkbox1" label="option2" disabled />
    </div>
    <!--  -->
    <div>
      <div class="xlb-title-2">多选框组</div>
      <el-checkbox-group @change="changeEvent" v-model="checkboxList">
        <el-checkbox label="option1" />
        <el-checkbox label="option2" />
        <el-checkbox label="option3" />
        <el-checkbox label="option4" />
        <el-checkbox label="option5" />
      </el-checkbox-group>
    </div>
    <!--  -->
    <div>
      <div class="xlb-title-2">indeterminate不确定状态,可用于实现全选状态</div>
      <el-checkbox
        v-model="checkAll"
        :indeterminate="isIndeterminate"
        label="全选"
        @change="checkAllChange"
      ></el-checkbox>
      <el-checkbox-group v-model="currentCheckList" @change="changeEvent">
        <template v-for="item in checkList" :key="item">
          <el-checkbox :label="item" />
        </template>
      </el-checkbox-group>
    </div>
    <!-- 按钮样式 -->
    <div>
      <div class="xlb-title-2">按钮样式</div>
      <el-checkbox-group v-model="checkboxButton">
        <el-checkbox-button
          v-for="item in checkboxOptions"
          :key="item"
          :label="item"
        />
      </el-checkbox-group>
    </div>
    <!-- checkbox带边框 -->
    <div>
      <div class="xlb-title-2">带边框的checkbox</div>
      <el-checkbox-group v-model="checkboxBorder">
        <el-checkbox
          border
          v-for="item in checkList"
          :key="item"
          :label="item"
        />
      </el-checkbox-group>
    </div>
  </div>
</template>

<script name="CheckboxElement" setup>
/* data */
const checkbox1 = ref(false);
const isIndeterminate = ref(true);
const checkboxList = ref(["option2"]);
const checkAll = ref(false);
const checkList = ref(["option1", "option2", "option3", "option4", "option5"]);
const currentCheckList = ref(["option3"]);
const checkboxButton = ref(["湖南"]);
const checkboxOptions = ref(["湖南", "北京", "江苏", "新疆"]);
const checkboxBorder = ref([]);

/* methods */
function changeEvent(value) {
  checkAll.value = currentCheckList.value.length === checkList.value.length;
}

function checkAllChange(value) {
  console.log(value);
  currentCheckList.value = value ? checkList.value : [];
  isIndeterminate.value = false;
}
</script>

<style lang="scss" scoped></style>
