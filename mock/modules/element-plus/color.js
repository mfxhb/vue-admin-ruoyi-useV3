/*
 * @Author: BORING GHOST
 * @Date: 2022-08-30 15:10:39
 * @LastEditTime: 2022-08-30 17:14:25
 * @Description:
 */
const id = "color";

const data = {
  domainColor: ["primary"],
  auxiliaryColor: ["success", "warning", "danger", "info"], // 辅助色
  neutralColor: [
    {
      type: "text",
      value: ["primary", "regular", "secondary", "placeholder", "disabled"],
    },
    {
      type: "border",
      value: ["darker", "dark", "base", "light", "lighter", "extra-light"],
    },
    {
      type: "fill",
      value: [
        "darker",
        "dark",
        "base",
        "light",
        "lighter",
        "extra-light",
        "blank",
      ],
    },
    {
      type: "bg",
      value: ["page", "", "overlay"],
    },
  ], // 中性色
};

function useColorMack(preffix) {
  return {
    url: preffix + id,
    method: "GET",
    response() {
      return data;
    },
  };
}

export default useColorMack;
