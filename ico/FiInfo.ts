import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Info icon from Feather
 * @module
 */
export function FiInfo(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"line",attr:{"x1":"12","y1":"16","x2":"12","y2":"12"},child:[]},{tag:"line",attr:{"x1":"12","y1":"8","x2":"12.01","y2":"8"},child:[]}]})(props);
}
export default FiInfo;
