/*
 * @Author: BORING GHOST
 * @Date: 2022-08-26 14:55:36
 * @LastEditTime: 2022-09-05 16:26:58
 * @Description:
 */
import defaultSettings from "@/settings";
import { useDynamicTitle } from "@/utils/dynamicTitle";

const {
  sideTheme,
  showSettings,
  topNav,
  tagsView,
  fixedHeader,
  sidebarLogo,
  dynamicTitle,
} = defaultSettings;

const storageSetting = JSON.parse(localStorage.getItem("layout-setting")) || "";

const useSettingsStore = defineStore("settings", {
  state: () => ({
    title: "",
    theme: storageSetting.theme || "#3c8dbc",
    sideTheme: storageSetting.sideTheme || sideTheme,
    showSettings: showSettings,
    topNav:
      storageSetting.topNav === undefined ? topNav : storageSetting.topNav,
    tagsView:
      storageSetting.tagsView === undefined
        ? tagsView
        : storageSetting.tagsView,
    fixedHeader:
      storageSetting.fixedHeader === undefined
        ? fixedHeader
        : storageSetting.fixedHeader,
    sidebarLogo:
      storageSetting.sidebarLogo === undefined
        ? sidebarLogo
        : storageSetting.sidebarLogo,
    dynamicTitle:
      storageSetting.dynamicTitle === undefined
        ? dynamicTitle
        : storageSetting.dynamicTitle,
  }),
  actions: {
    // 修改布局设置
    changeSetting(data) {
      const { key, value } = data;
      if (this.hasOwnProperty(key)) {
        this[key] = value;
      }
    },
    // 设置网页标题
    setTitle(title) {
      this.title = title;
      useDynamicTitle();
    },
  },
});

export default useSettingsStore;
