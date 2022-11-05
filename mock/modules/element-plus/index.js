/*
 * @Author: BORING GHOST
 * @Date: 2022-09-02 09:48:46
 * @LastEditTime: 2022-09-05 10:01:05
 * @Description:
 */
import useButtonMock from "./button";
import useCascaderMock from "./cascader";
import useColorMack from "./color";
import useColorPickerMock from "./colorPicker";
import useIconsMock from "./icons";
import useLinkMock from "./link";

const preffix = "/mock/elementplus/";

const ElementPlusMocks = [
  useButtonMock(preffix),
  useColorMack(preffix),
  useIconsMock(preffix),
  useLinkMock(preffix),
  useCascaderMock(preffix),
  useColorPickerMock(preffix),
];

/**
 * @param {*} id 单个模块的id
 * @param {*} method 请求的方法
 * @returns 返回的数据
 */
export async function elementPlusApi(id, method = "GET") {
  return (await fetch(preffix + id, { method })).json();
}

export default ElementPlusMocks;
