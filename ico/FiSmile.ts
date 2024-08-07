import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Smile icon from Feather
 * @module
 */
export function FiSmile(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"path",attr:{d:"M8 14s1.5 2 4 2 4-2 4-2"},child:[]},{tag:"line",attr:{"x1":"9","y1":"9","x2":"9.01","y2":"9"},child:[]},{tag:"line",attr:{"x1":"15","y1":"9","x2":"15.01","y2":"9"},child:[]}]})(props);
}
export default FiSmile;
