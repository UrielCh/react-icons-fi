import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Monitor icon from Feather
 * @module
 */
export function FiMonitor(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"3","width":"20","height":"14","rx":"2","ry":"2"}},{tag:"line",attr:{"x1":"8","y1":"21","x2":"16","y2":"21"},child:[]},{tag:"line",attr:{"x1":"12","y1":"17","x2":"12","y2":"21"},child:[]}]})(props);
}
export default FiMonitor;
