/*
 * @Author: BORING GHOST
 * @Date: 2022-08-30 09:47:00
 * @LastEditTime: 2022-08-30 09:48:07
 * @Description:
 */
import { viteMockServe } from "vite-plugin-mock";

function createMockServe() {
  return viteMockServe();
}

export default createMockServe;
