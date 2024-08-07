import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * UserX icon from Feather
 * @module
 */
export function FiUserX(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}},{tag:"circle",attr:{"cx":"8.5","cy":"7","r":"4"},child:[]},{tag:"line",attr:{"x1":"18","y1":"8","x2":"23","y2":"13"},child:[]},{tag:"line",attr:{"x1":"23","y1":"8","x2":"18","y2":"13"},child:[]}]})(props);
}
export default FiUserX;
