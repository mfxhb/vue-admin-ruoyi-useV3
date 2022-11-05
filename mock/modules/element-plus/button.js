/*
 * @Author: BORING GHOST
 * @Date: 2022-08-30 10:01:22
 * @LastEditTime: 2022-09-02 10:12:50
 * @Description:
 */
const id = "button";

const dataList = {
  attribute: [
    ["size", ["large", "default", "small"]],
    ["type", ["primary", "success", "warning", "danger", "info", "text"]],
    ["plain", [false, true]],
    ["round", [false, true]],
    ["circle", [false, true]],
    ["loading", [false, true]],
    ["loading-icon", ["loading", "Start"]],
    ["disabled", [false, true]],
    ["icon", ["House"]],
    ["autofocus", [false]],
    ["native-type", ["button", "submit", "reset"]],
    ["auto-inset-space", [false, true]],
  ],
};

function useButtonMock(preffix) {
  return {
    url: preffix + id,
    method: "GET",
    response() {
      return dataList;
    },
  };
}

export default useButtonMock;
