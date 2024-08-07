import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Minimize2 icon from Feather
 * @module
 */
export function FiMinimize2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{"points":"4 14 10 14 10 20"}},{tag:"polyline",attr:{"points":"20 10 14 10 14 4"},child:[]},{tag:"line",attr:{"x1":"14","y1":"10","x2":"21","y2":"3"},child:[]},{tag:"line",attr:{"x1":"3","y1":"21","x2":"10","y2":"14"},child:[]}]})(props);
}
export default FiMinimize2;
