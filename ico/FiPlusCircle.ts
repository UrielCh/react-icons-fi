import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * PlusCircle icon from Feather
 * @module
 */
export function FiPlusCircle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"line",attr:{"x1":"12","y1":"8","x2":"12","y2":"16"},child:[]},{tag:"line",attr:{"x1":"8","y1":"12","x2":"16","y2":"12"},child:[]}]})(props);
}
export default FiPlusCircle;
