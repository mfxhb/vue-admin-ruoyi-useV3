<!--
 * @Author: BORING GHOST
 * @Date: 2022-09-16 11:22:40
 * @LastEditTime: 2022-09-16 11:54:39
 * @Description: 
-->
<template>
  <div>
    <!-- 可移除的标签 -->
    <copy-text :copy-text="inputs.tag1Text">
      <div class="xlb-title-2">可移除的标签</div>
      <el-space>
        <el-tag
          v-for="tag in tags"
          :key="tag.name"
          class="mx-1"
          closable
          :type="tag.type"
        >
          {{ tag.name }}
        </el-tag>
        <el-input v-model="inputValue" size="small" />
        <el-button class="" size="small"> + New Tag </el-button>
      </el-space>
    </copy-text>
    <div class="xlb-space-h"></div>
    <!-- 展示 -->
    <div class="xlb-box-border xlb-shadow">
      <el-row>
        <el-col align="center" :span="12">
          <el-space>
            <el-tag
              v-for="tag in tags"
              :key="tag.name"
              closable
              effect="dark"
              :type="tag.type"
            >
              {{ tag.name }}
            </el-tag>
          </el-space>
        </el-col>
        <el-col align="left" :span="12">
          <el-space>
            <el-tag
              v-for="tag in tags"
              :key="tag.name"
              closable
              effect="dark"
              :type="tag.type"
              round
            >
              {{ tag.name }}
            </el-tag>
          </el-space>
        </el-col>
      </el-row>
      <el-row>
        <el-col align="center" :span="12">
          <el-space>
            <el-tag
              v-for="tag in tags"
              :key="tag.name"
              closable
              effect="light"
              :type="tag.type"
            >
              {{ tag.name }}
            </el-tag>
          </el-space>
        </el-col>
        <el-col align="left" :span="12">
          <el-space>
            <el-tag
              v-for="tag in tags"
              :key="tag.name"
              closable
              effect="light"
              :type="tag.type"
              round
            >
              {{ tag.name }}
            </el-tag>
          </el-space>
        </el-col>
      </el-row>
      <el-row>
        <el-col align="center" :span="12">
          <el-space>
            <el-tag
              v-for="tag in tags"
              :key="tag.name"
              closable
              effect="plain"
              :type="tag.type"
            >
              {{ tag.name }}
            </el-tag>
          </el-space>
        </el-col>
        <el-col align="left" :span="12">
          <el-space>
            <el-tag
              v-for="tag in tags"
              :key="tag.name"
              closable
              effect="plain"
              :type="tag.type"
              round
            >
              {{ tag.name }}
            </el-tag>
          </el-space>
        </el-col>
      </el-row>
      <el-row>
        <el-col align="center" :span="12">
          <el-space>
            <el-check-tag v-for="tag in tags" :key="tag.name" checked>
              {{ tag.name }}
            </el-check-tag>
          </el-space>
        </el-col>
        <el-col align="left" :span="12">
          <el-space>
            <el-check-tag v-for="tag in tags" :key="tag.name" :checked="false">
              {{ tag.name }}
            </el-check-tag>
          </el-space>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script name="TagElement" setup>
import { tag1Text } from "./data";
// data
const inputValue = ref("");
const inputs = {
  tag1Text,
};
const tags = [
  { name: "Tag 1", type: "" },
  { name: "Tag 2", type: "success" },
  { name: "Tag 3", type: "info" },
  { name: "Tag 4", type: "warning" },
  { name: "Tag 5", type: "danger" },
];
</script>

<style lang="scss" scoped></style>
