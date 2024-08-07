import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * AlertOctagon icon from Feather
 * @module
 */
export function FiAlertOctagon(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{"points":"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"}},{tag:"line",attr:{"x1":"12","y1":"8","x2":"12","y2":"12"},child:[]},{tag:"line",attr:{"x1":"12","y1":"16","x2":"12.01","y2":"16"},child:[]}]})(props);
}
export default FiAlertOctagon;
