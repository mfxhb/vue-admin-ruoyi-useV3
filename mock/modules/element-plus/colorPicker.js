/*
 * @Author: BORING GHOST
 * @Date: 2022-09-05 09:59:20
 * @LastEditTime: 2022-09-05 10:07:03
 * @Description:
 */
const id = "colorPicker";

const dataList = {
  predefineColors: [
    "#ff4500",
    "#ff8c00",
    "#ffd700",
    "#90ee90",
    "#00ced1",
    "#1e90ff",
    "#c71585",
    "rgba(255, 69, 0, 0.68)",
    "rgb(255, 120, 0)",
    "hsv(51, 100, 98)",
    "hsva(120, 40, 94, 0.5)",
    "hsl(181, 100%, 37%)",
    "hsla(209, 100%, 56%, 0.73)",
    "#c7158577",
  ],
};

function useColorPickerMock(preffix) {
  return {
    url: preffix + id,
    method: "GET",
    response() {
      return dataList;
    },
  };
}

export default useColorPickerMock;
