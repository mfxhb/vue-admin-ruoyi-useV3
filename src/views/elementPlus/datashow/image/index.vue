<!--
 * @Author: BORING GHOST
 * @Date: 2022-09-15 10:17:32
 * @LastEditTime: 2022-09-15 10:40:28
 * @Description: 
-->
<template>
  <div>
    <!-- 占位符 -->
    <copyText :copy-text="inputs.image1Text">
      <div class="xlb-title-2">占位符</div>
      <el-col :span="3">
        <el-image :src="src">
          <template #placeholder>
            <div class="image-slot">Loading<span class="dot">...</span></div>
          </template>
        </el-image>
      </el-col>
    </copyText>
    <div class="xlb-space-h"></div>
    <!-- 加载失败的内容 -->
    <copyText :copy-text="inputs.image2Text">
      <div class="xlb-title-2">加载失败的内容</div>
      <el-col :span="3">
        <el-image>
          <template #error>
            <div class="image-slot">
              <el-icon><Picture /></el-icon>
            </div>
          </template>
        </el-image>
      </el-col>
    </copyText>
    <div class="xlb-space-h"></div>
    <!-- 懒加载 -->
    <copyText :copy-text="inputs.image3Text">
      <div class="xlb-title-2">懒加载</div>
      <el-col :span="12">
        <div class="demo-image__lazy">
          <el-image v-for="url in urls" :key="url" :src="url" lazy />
        </div>
      </el-col>
    </copyText>
    <div class="xlb-space-h"></div>
    <!-- 图片预览功能+预览时第一张图片的位置 -->
    <copyText :copy-text="inputs.image4Text">
      <div class="xlb-title-2">图片预览功能+预览时第一张图片的位置</div>
      <el-col :span="12">
        <el-image
          style="width: 100px; height: 100px"
          :src="src"
          :preview-src-list="srcList"
          :initial-index="4"
          fit="cover"
        />
      </el-col>
    </copyText>
    <div class="xlb-space-h"></div>
  </div>
</template>

<script name="ImageElement" setup>
import { image1Text, image2Text, image3Text, image4Text } from "./conf";
// data
const inputs = reactive({
  image1Text,
  image2Text,
  image3Text,
  image4Text,
});
const src =
  "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg";
const urls = [
  "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
  "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
  "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
  "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
  "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
  "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",
  "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg",
];
const srcList = [
  "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
  "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
  "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
  "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
  "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
  "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",
  "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg",
];
</script>

<style lang="scss" scoped>
.demo-image__lazy {
  height: 400px;
  overflow-y: auto;
}
.demo-image__lazy .el-image {
  display: block;
  min-height: 200px;
  margin-bottom: 10px;
}
.demo-image__lazy .el-image:last-child {
  margin-bottom: 0;
}
.demo-image__placeholder .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  display: inline-block;
  width: 49%;
  box-sizing: border-box;
  vertical-align: top;
}
.demo-image__placeholder .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
.demo-image__placeholder .el-image {
  padding: 0 5px;
  max-width: 300px;
  max-height: 200px;
}

.demo-image__placeholder.image-slot {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: var(--el-fill-color-light);
  color: var(--el-text-color-secondary);
  font-size: 14px;
}
.demo-image__placeholder .dot {
  animation: dot 2s infinite steps(3, start);
  overflow: hidden;
}
</style>
