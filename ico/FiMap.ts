import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Map icon from Feather
 * @module
 */
export function FiMap(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{"points":"1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"}},{tag:"line",attr:{"x1":"8","y1":"2","x2":"8","y2":"18"},child:[]},{tag:"line",attr:{"x1":"16","y1":"6","x2":"16","y2":"22"},child:[]}]})(props);
}
export default FiMap;
