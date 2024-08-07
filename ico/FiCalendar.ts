import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Calendar icon from Feather
 * @module
 */
export function FiCalendar(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"4","width":"18","height":"18","rx":"2","ry":"2"}},{tag:"line",attr:{"x1":"16","y1":"2","x2":"16","y2":"6"},child:[]},{tag:"line",attr:{"x1":"8","y1":"2","x2":"8","y2":"6"},child:[]},{tag:"line",attr:{"x1":"3","y1":"10","x2":"21","y2":"10"},child:[]}]})(props);
}
export default FiCalendar;
