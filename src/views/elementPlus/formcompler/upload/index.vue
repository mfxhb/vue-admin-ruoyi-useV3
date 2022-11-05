<!--
 * @Author: BORING GHOST
 * @Date: 2022-09-14 09:43:13
 * @LastEditTime: 2022-09-14 15:09:41
 * @Description:
-->
<template>
  <div>
    <!-- 普通用法 -->
    <copyText :copy-text="inputs.upload1Text">
      <div class="xlb-title-2">普通用法</div>
      <el-upload
        multiple
        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
        :limit="3"
        :on-exceed="handleExceed"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        v-model:file-list="fileList"
      >
        <el-button type="primary">Click to upload</el-button>
        <template #tip>
          <div class="el-upload__tip">
            jpg/png files with a size less than 500KB.(提示插槽)
          </div>
        </template>
      </el-upload>
    </copyText>
    <div class="xlb-space-h"></div>
    <!-- 覆盖前一个文件 -->
    <copyText :copy-text="inputs.upload2Text">
      <div class="xlb-title-2">覆盖前一个文件</div>
      <div class="xlb-title-3">
        设置 limit 和 on-exceed 可以在选中时自动替换上一个文件。
      </div>
      <el-upload
        ref="upload"
        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
        :limit="1"
        :on-exceed="handleExceed"
        :auto-upload="false"
      >
        <template #trigger>
          <el-button type="primary">插槽-文件触发按钮</el-button>
        </template>
        <el-button class="ml-3" type="success" @click="submitUpload">
          插槽-开始上传按钮
        </el-button>
        <template #tip>
          <div class="el-upload__tip text-red">
            limit 1 file, new file will cover the old file(插槽-文字提示)
          </div>
        </template>
      </el-upload>
    </copyText>
    <div class="xlb-space-h"></div>
    <!-- 用户头像 -->
    <copyText :copy-text="inputs.upload3Text">
      <div class="xlb-title-2">用户头像</div>
      <el-upload
        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
        class="avatar-uploader"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
      >
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
      </el-upload>
    </copyText>
    <!-- 照片墙 -->
    <copyText :copy-text="inputs.upload4Text">
      <div class="xlb-title-2">照片墙</div>
      <el-upload
        v-model:fileList="fileList"
        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
        list-type="picture-card"
      >
        <el-icon><Plus /></el-icon>
      </el-upload>
    </copyText>
  </div>
</template>

<script name="UploadElement" setup>
import { upload1Text, upload2Text, upload3Text, upload4Text } from "./conf";
// data
const upload = ref();
const fileList = ref([
  {
    name: "element-plus-logo.svg",
    url: "https://element-plus.org/images/element-plus-logo.svg",
  },
  {
    name: "element-plus-logo2.svg",
    url: "https://element-plus.org/images/element-plus-logo.svg",
  },
]);

const inputs = reactive({
  upload1Text,
  upload2Text,
  upload3Text,
  upload4Text,
});

const imageUrl = ref("");

// methods
const handlePictureCardPreview = () => {
  console.log("左侧预览事件");
};
const handleAvatarSuccess = (response, uploadFile) => {
  imageUrl.value = URL.createObjectURL(uploadFile.raw);
  console.log("上传成功");
};
const beforeAvatarUpload = () => {
  const flag = true; // 是否允许上传
  return flag;
};
const handleExceed = () => {
  console.log("超出限制");
};
const handlePreview = () => {
  console.log("这是已经上传的文件");
};
const handleRemove = () => {
  console.log("删除该文件成功");
};
const beforeRemove = () => {
  console.log("是否可以删除");
  console.log("返回false或者异步reject状态,停止删除");
  const num = Math.floor(Math.random() * (5 - 1) + 1);
  return num % 2 === 0;
};
const submitUpload = () => {
  upload.value?.submit();
};
</script>

<style lang="scss" scoped>
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-uploader :deep(.el-upload) {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>
