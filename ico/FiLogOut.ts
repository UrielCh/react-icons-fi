import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * LogOut icon from Feather
 * @module
 */
export function FiLogOut(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}},{tag:"polyline",attr:{"points":"16 17 21 12 16 7"},child:[]},{tag:"line",attr:{"x1":"21","y1":"12","x2":"9","y2":"12"},child:[]}]})(props);
}
export default FiLogOut;
