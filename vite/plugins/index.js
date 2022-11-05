/*
 * @Author: BORING GHOST
 * @Date: 2022-08-30 09:38:23
 * @LastEditTime: 2022-08-30 09:50:01
 * @Description:
 */
import vue from "@vitejs/plugin-vue";

import createAutoImport from "./auto-import";
import createSvgIcon from "./svg-icon";
import createCompression from "./compression";
import createSetupExtend from "./setup-extend";
import createMockServe from "./vite-mock";

export default function createVitePlugins(viteEnv, isBuild = false) {
  const vitePlugins = [vue()];
  vitePlugins.push(createAutoImport());
  vitePlugins.push(createSetupExtend());
  vitePlugins.push(createSvgIcon(isBuild));
  vitePlugins.push(createMockServe());
  isBuild && vitePlugins.push(...createCompression(viteEnv));
  return vitePlugins;
}
