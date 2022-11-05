/*
 * @Author: BORING GHOST
 * @Date: 2022-09-01 09:38:37
 * @LastEditTime: 2022-09-01 09:51:10
 * @Description:
 */
const id = "link";

const data = {
  type: ["primary", "success", "warning", "danger", "info"],
};

function useLinkMock(preffix) {
  return {
    url: preffix + id,
    method: "GET",
    response() {
      return data;
    },
  };
}

export default useLinkMock;
