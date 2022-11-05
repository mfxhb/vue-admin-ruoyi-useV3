/*
 * @Author: BORING GHOST
 * @Date: 2022-08-31 10:42:31
 * @LastEditTime: 2022-08-31 11:26:51
 * @Description:
 */
const id = "icons";

const data = {
  buildIcons: [
    "Plus",
    "Minus",
    "CirclePlus",
    "Search",
    "Female",
    "Male",
    "Aim",
    "SortUp",
    "SortDown",
    "Rank",
    "CaretLeft",
    "CaretTop",
    "CaretRight",
    "CaretBottom",
    "List",
    "TrendCharts",
    "Failed",
    "Ticket",
    "Checked",
    "Management",
    "DataLine",
    "VideoCameraFilled",
    "PictureFilled",
    "Platform",
    "CameraFilled",
    "BellFilled",
    "Guide",
    "AddLocation",
    "MapLocation",
    "Place",
    "LocationFilled",
    "Van",
    "Dessert",
    "IceCreamSquare",
    "ForkSpoon",
    "IceCreamRound",
    "Food",
    "HotWater",
    "Grape",
    "Printer",
    "WalletFilled",
    "GoodsFilled",
    "Flag",
    "BrushFilled",
    "Briefcase",
    "Stamp",
    "Sunrise",
    "Sunny",
    "Ship",
    "MostlyCloudy",
    "PartlyCloudy",
    "Sunset",
    "Drizzling",
    "ChromeFilled",
    "Eleme",
    "ElemeFilled",
    "ElementPlus",
    "Shop",
    "SwitchFilled",
  ],
};

function useIconsMock(preffix) {
  return {
    url: preffix + id,
    method: "GET",
    response() {
      return data;
    },
  };
}

export default useIconsMock;
