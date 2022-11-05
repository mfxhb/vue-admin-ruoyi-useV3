/*
 * @Author: BORING GHOST
 * @Date: 2022-09-07 11:36:43
 * @LastEditTime: 2022-09-07 12:03:34
 * @Description:
 */
const GLOBALFN = [
  //textarea 样式
  {
    name: "testarea_style",
    value: {
      backgroundColor: "#f5f7fa",
      color: "#79831f",
    },
  },
];

const useGlobalFn = {
  install(app) {
    for (let k = 0, len = GLOBALFN.length; k < len; k++) {
      const item = GLOBALFN[k];
      app.provide(item.name, item.value);
    }
  },
};

export default useGlobalFn;
