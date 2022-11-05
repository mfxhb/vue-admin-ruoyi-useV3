/*
 * @Author: BORING GHOST
 * @Date: 2022-08-30 09:38:23
 * @LastEditTime: 2022-09-01 16:02:25
 * @Description:
 */
import hasRole from "./permission/hasRole";
import hasPermi from "./permission/hasPermi";
import copyText from "./common/copyText";

export default function directive(app) {
  app.directive("hasRole", hasRole);
  app.directive("hasPermi", hasPermi);
  app.directive("copyText", copyText);
}
