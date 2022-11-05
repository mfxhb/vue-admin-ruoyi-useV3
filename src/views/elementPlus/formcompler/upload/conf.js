/*
 * @Author: BORING GHOST
 * @Date: 2022-09-14 11:30:22
 * @LastEditTime: 2022-09-14 15:11:30
 * @Description:
 */
export const upload1Text = `
action='' // 请求的地址
multiple // 是否可以上传多个文件
:on-preview='handlePreview' // 已经上传的文件列表被点击时触发
:on-remove='handleRemove' // 删除某个文件列表文件时触发
:before-remove='beforeRemove' // 删除某个文件之前会触发,如果返回false或者reject状态的异步就会停止删除
:limit="1" // 能够上传的文件最大数量
:on-exceed='handleEvent' // 上传的文件超出数量限制会触发这个方法
`;

export const upload2Text = `
action='' // 请求的地址
multiple // 是否可以上传多个文件
:limit="1" // 能够上传的文件最大数量
:on-exceed='handleEvent' // 上传的文件超出数量限制会触发这个方法
:auto-upload='false' // 是否自动上传文件,如果是false,选择文件后不会直接上传,需要调用dom的submit方法
`;

export const upload3Text = `
:show-file-list='false' // 是否显示上传的文件列表
:on-success='handlesuccess' // 上传成功的回调
:before-upload='beforeUpload' // 上传文件之前会触发,如果返回false或者reject状态的异步就会停止上传
`;

export const upload4Text = `
list-type='picture-card' // 文件列表展示模式
:on-preview='' // 在卡片模式下,点击放大镜图标会触发这个事件
:on-remove='' // 在卡片模式下,点击删除图标会触发这个事件
`;
