/*
 * @Author: BORING GHOST
 * @Date: 2022-09-14 15:29:24
 * @LastEditTime: 2022-09-14 15:45:02
 * @Description:
 */
export const avatar1Text = `
size='small' // 头像大小
shape='circle' // 头像的形状
`;

export const avatar2Text = `
icon='UserFilled' // 图标类型头像时,图标名称
src='' // 图片类型头像时,图标名称
<el-avatar> user </el-avatar> // 如果直接输入文字,那么就是文字头像
`;

export const avatar3Text = `
<el-avatar src="https://empty" @error="errorHandler"> user </el-avatar>
// src加载错误时默认使用插槽内的内容
`;
