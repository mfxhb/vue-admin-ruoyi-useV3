<!--
 * @Author: BORING GHOST
 * @Date: 2022-09-13 11:25:16
 * @LastEditTime: 2022-09-13 14:40:48
 * @Description: 
-->
<template>
  <div>
    <!-- 普通用法 -->
    <el-space fill class="xlb-box-border xlb-box-w xlb-father xlb-shadow">
      <div
        v-copyText="inputs.rate1Text"
        v-copyText:callback="copyTextSuccess"
        class="xlb-son-right-top xlb-button-copy"
      >
        复制
      </div>
      <div class="xlb-title-2">普通用法</div>
      <el-rate v-model="inputs.rate1" :colors="colors"></el-rate>
      <el-input
        v-model="inputs.rate1Text"
        type="textarea"
        autosize
        :input-style="textarea_style"
      ></el-input>
    </el-space>
    <div class="xlb-space-h"></div>
    <!-- 尺寸跟半选 -->
    <el-space fill class="xlb-box-border xlb-box-w xlb-father xlb-shadow">
      <div
        v-copyText="inputs.rate2Text"
        v-copyText:callback="copyTextSuccess"
        class="xlb-son-right-top xlb-button-copy"
      >
        复制
      </div>
      <div class="xlb-title-2">尺寸跟半选</div>
      <el-rate v-model="inputs.rate2" size="small" allow-half></el-rate>
      <el-input
        v-model="inputs.rate2Text"
        autosize
        type="textarea"
        :input-style="textarea_style"
      ></el-input>
    </el-space>
    <div class="xlb-space-h"></div>
    <!-- 辅助文字 -->
    <el-space fill class="xlb-box-border xlb-box-w xlb-father xlb-shadow">
      <div
        v-copyText="inputs.rate3Text"
        v-copyText:callback="copyTextSuccess"
        class="xlb-son-right-top xlb-button-copy"
      >
        复制
      </div>
      <div class="xlb-title-2">辅助文字</div>
      <el-rate
        v-model="inputs.rate3"
        show-text
        :texts="['oops', 'disappointed', 'normal', 'good', 'great']"
      ></el-rate>
      <el-input
        type="textarea"
        v-model="inputs.rate3Text"
        autosize
        :input-style="textarea_style"
      ></el-input>
    </el-space>
    <div class="xlb-space-h"></div>
    <!-- 自定义图标 -->
    <el-space fill class="xlb-box-border xlb-box-w xlb-father xlb-shadow">
      <div
        v-copyText="inputs.rate4Text"
        v-copyText:callback="copyTextSuccess"
        class="xlb-son-right-top xlb-button-copy"
      >
        复制
      </div>
      <div class="xlb-title-2">自定义图标</div>
      <el-rate v-model="inputs.rate4" :icons="icons" void-icon="ChatRound">
      </el-rate>
      <el-input
        v-model="inputs.rate4Text"
        autosize
        :input-style="textarea_style"
        type="textarea"
      ></el-input>
    </el-space>
    <div class="xlb-space-h"></div>
    <!-- 显示分值并且只读 -->
    <el-space fill class="xlb-box-border xlb-box-w xlb-father xlb-shadow">
      <div
        v-copyText="inputs.rate5Text"
        v-copyText:callback="copyTextSuccess"
        class="xlb-son-right-top xlb-button-copy"
      >
        复制
      </div>
      <div class="xlb-title-2">自定义图标</div>
      <el-rate
        v-model="inputs.rate5"
        disabled
        :icons="icons"
        show-score
        void-icon="ChatRound"
      >
      </el-rate>
      <el-input
        v-model="inputs.rate5Text"
        autosize
        :input-style="textarea_style"
        type="textarea"
      ></el-input>
    </el-space>
  </div>
</template>

<script name="RateElement" setup>
import {
  rate1Text,
  rate2Text,
  rate3Text,
  rate4Text,
  rate5Text,
} from "./conf.js";
const { proxy } = getCurrentInstance();
const textarea_style = shallowRef(inject("testarea_style"));
// data
const colors = ref(["#7ab34b", "#fc5430", "#1f1f20"]);
const inputs = reactive({
  rate1Text,
  rate2Text,
  rate3Text,
  rate4Text,
  rate5Text,
  rate5: 3.7,
});
const icons = ref(["ChatRound", "ChatLineRound", "ChatDotRound"]);
// methods
const copyTextSuccess = () => {
  proxy.$modal.msgSuccess("复制成功");
};
</script>

<style lang="scss" scoped></style>
