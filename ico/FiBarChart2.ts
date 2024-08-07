import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BarChart2 icon from Feather
 * @module
 */
export function FiBarChart2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"18","y1":"20","x2":"18","y2":"10"}},{tag:"line",attr:{"x1":"12","y1":"20","x2":"12","y2":"4"},child:[]},{tag:"line",attr:{"x1":"6","y1":"20","x2":"6","y2":"14"},child:[]}]})(props);
}
export default FiBarChart2;
