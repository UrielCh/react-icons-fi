import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Meh icon from Feather
 * @module
 */
export function FiMeh(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"line",attr:{"x1":"8","y1":"15","x2":"16","y2":"15"},child:[]},{tag:"line",attr:{"x1":"9","y1":"9","x2":"9.01","y2":"9"},child:[]},{tag:"line",attr:{"x1":"15","y1":"9","x2":"15.01","y2":"9"},child:[]}]})(props);
}
export default FiMeh;
