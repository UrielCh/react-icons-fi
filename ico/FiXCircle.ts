import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * XCircle icon from Feather
 * @module
 */
export function FiXCircle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"line",attr:{"x1":"15","y1":"9","x2":"9","y2":"15"},child:[]},{tag:"line",attr:{"x1":"9","y1":"9","x2":"15","y2":"15"},child:[]}]})(props);
}
export default FiXCircle;
