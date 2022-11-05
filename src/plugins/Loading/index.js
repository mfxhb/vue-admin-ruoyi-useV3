/*
 * @Author: BORING GHOST
 * @Date: 2022-08-28 10:39:43
 * @LastEditTime: 2022-08-28 10:45:28
 * @Description:
 */
import { createApp, reactive } from "vue";
import loading from "./loading.vue";

const conf = reactive({
  show: false,
  count: 0,
});

const $loading = createApp(loading, { conf }).mount(
  document.createElement("div")
);

const load = {
  show() {
    if (conf.show) {
      conf.count++;
    } else {
      conf.show = true;
      document.body.appendChild($loading.$el);
    }
  },
  hide() {
    if (conf.count) {
      conf.count--;
    } else {
      conf.show = false;
    }
  },
};

export { load };
