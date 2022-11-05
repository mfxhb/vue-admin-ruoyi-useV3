/*
 * @Author: BORING GHOST
 * @Date: 2022-09-13 16:36:16
 * @LastEditTime: 2022-09-13 16:37:16
 * @Description:
 */
import copyText from "@/components/modules/elementcom/index.vue";

const useComponents = {
  install(app) {
    app.component("copyText", copyText); // 代码显示组件
  },
};

export default useComponents;
